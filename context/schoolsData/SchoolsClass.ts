import { degreeEnum } from '../register/types';
import { cities, City, Faculty, faculty, HardSkill, hardSkills, human, Keywords, Profile, profiles, School, schools, science, Trait, traits, univercities, University } from './exampleSchoolsData'

export class SchoolsClass {
    schools: School[] = [];
    universities: University[] = [];
    faculties: Faculty[] = [];
    cities: City[] = [];
    traits: Trait[] = [];
    hardSkills: HardSkill[] = [];
    science: string[] = [];
    human: string[] = [];
    profiles: Profile[] = [];

    init = async () => {
        this.schools = schools;
        this.universities = univercities;
        this.faculties = faculty;
        this.cities = cities;
        this.traits = traits;
        this.hardSkills = hardSkills;
        this.science = science;
        this.human = human;
        this.profiles = profiles;
    }

    generateFaculties = (universityName: string): string[] => {
        const university = this.universities.find(u => u.name.toLowerCase() === universityName.toLowerCase());
        if (!university) {
            return [`University with name ${universityName} not found.`];
        }

        const facultyNames = university.faculties.map(facultyId => {
            const faculty = this.faculties.find(f => f.id === facultyId);
            return faculty ? faculty.name : `Faculty with id ${facultyId} not found.`;
        });

        return facultyNames;
    }

    getSchoolsByDegreeAndCity(school_level: "vocational" | "technical" | "high_school", city: string): string[] {
        let label: string;
        switch (school_level) {
            case "high_school":
                label = "High School";
                break;
            case "vocational":
                label = "Vocational School";
                break;
            case "technical":
                label = "Technical School";
                break;
            default:
                label = "";
                break;
        }
    
        return schools
            .filter(school => school.city === city && school.label === label)
            .map(school => school.schoolName);
    }
    getProfilesBySchools(schoolName: string) {
        const school = schools.find(s => s.schoolName === schoolName);

        if (!school) return [];

        const profileIds = school.profiles;

        const profileNames = profileIds.map(id => {
            const profile = profiles.find(p => p.id === id);
            return profile ? profile.profileName : null;
        }).filter(name => name !== null);
        return profileNames;
    }
    generateUniversities = (city: string): string[] => {
        return univercities
            .filter(univercity => univercity.city.toLowerCase() === city.toLowerCase())
            .map(univercity => univercity.name);
    }


}
