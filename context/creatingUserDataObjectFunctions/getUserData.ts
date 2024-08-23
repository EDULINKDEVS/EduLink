import { mainData, employeeData, universieties, school, user_skills, userProfileAssign } from "./types";

export class UserDataGetter {
    userID: string;
    mainData: mainData | null;
    employeeData: employeeData | null;
    universities: universieties[] | null;
    school: school | null;
    user_traits: user_skills[] | null;
    user_hardSkills: user_skills[] | null;
    userProfileAssign: userProfileAssign | null;

    constructor(userID: string) {
        this.userID = userID;
        this.mainData = null;
        this.employeeData = null;
        this.universities = null;
        this.school = null;
        this.user_traits = null;
        this.user_hardSkills = null;
        this.userProfileAssign = null;
    }

    private async fetchData<T>(url: string): Promise<T | null> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Failed to fetch data from ${url}: ${response.statusText}`);
                return null;
            }
            const data = await response.json();
            return data.data || null;
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
            return null;
        }
    }

    getMainData = async () => {
        const url = `/api/loggedUserData/getMainData?userID=${this.userID}`;
        this.mainData = await this.fetchData<mainData>(url);
    }

    getEmployiesData = async () => {
        const url = `/api/loggedUserData/employee/getEmployeeData?userID=${this.userID}`;
        this.employeeData = await this.fetchData<employeeData>(url);
    }

    getUniversities = async () => {
        const url = `/api/loggedUserData/employee/getUniversities?userID=${this.userID}`;
        const universitiesData = await this.fetchData<{ schools: universieties[] }>(url);
        this.universities = universitiesData ? universitiesData.schools : null;
    }

    getSchoolData = async () => {
        const url = `/api/loggedUserData/employee/getSchool?userID=${this.userID}`;
        const schoolData = await this.fetchData<{ schools: school[] }>(url);
        this.school = schoolData ? schoolData.schools[0] : null;
    }

    getUserSkills = async () => {
        const url = `/api/loggedUserData/employee/getSkills?userID=${this.userID}`;
        const data = await this.fetchData<{ traits: user_skills[], hardSkills: user_skills[] }>(url);
        if (data) {
            this.user_traits = data.traits;
            this.user_hardSkills = data.hardSkills;
        } else {
            this.user_traits = null;
            this.user_hardSkills = null;
        }
    }

    getProfileAssign = async () => {
        const url = `/api/loggedUserData/getProfileTable?userID=${this.userID}`;
        this.userProfileAssign = await this.fetchData<userProfileAssign>(url);
    }
}
