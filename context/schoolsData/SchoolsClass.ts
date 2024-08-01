import { degreeEnum } from '../register/types';
import { cities, City, Faculty, faculty, HardSkill, hardSkills, human, Keywords, Profile, School, schools, science, Trait, traits, univercities, University } from './exampleSchoolsData'

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


    getSortedAttributes(facultyName: string, type: 'traits' | 'hard'): string[] {
        const facultyItem = faculty.find(f => f.name === facultyName);
        if (!facultyItem) {
            return [];
        }

        let primaryFeatures: number[] = [];
        let secondaryFeatures: number[] = [];
        let data: (Trait | HardSkill)[] = [];
        console.log('inin')

        if (type === 'traits') {
            primaryFeatures = facultyItem.features_traits_1;
            secondaryFeatures = facultyItem.features_traits_2;
            data = traits;

        } else if (type === 'hard') {
            primaryFeatures = facultyItem.features_hard_1;
            secondaryFeatures = facultyItem.features_hard_2;
            data = hardSkills;
        }

        const allFeatureIds = new Set([...primaryFeatures, ...secondaryFeatures]);

        const getFeatureById = (id: number) => data.find(item => item.id === id);

        const primaryFeaturesDetails = primaryFeatures.map(id => getFeatureById(id)!);
        const secondaryFeaturesDetails = secondaryFeatures.map(id => getFeatureById(id)!);
        const otherFeaturesDetails = data.filter(item => !allFeatureIds.has(item.id));

        const sortByPopularity = (a: Trait | HardSkill, b: Trait | HardSkill) => b.popularity - a.popularity;

        primaryFeaturesDetails.sort(sortByPopularity);
        secondaryFeaturesDetails.sort(sortByPopularity);
        otherFeaturesDetails.sort(sortByPopularity);

        const sortedFeatures = [
            ...primaryFeaturesDetails,
            ...secondaryFeaturesDetails,
            ...otherFeaturesDetails
        ];

        return sortedFeatures.map(item => item.name);
    }

    getProfilesBySchools(schoolName: string) {
        const school = schools.find(s => s.schoolName === schoolName);

        if (!school) return [];

        const profileIds = school.profiles;

        const profileNames = profileIds.map(id => {
            const profile = faculty.find(p => p.id === id);
            return profile ? profile.name : null;
        }).filter(name => name !== null);
        return profileNames;
    }
    generateUniversities = (city: string): string[] => {
        return univercities
            .filter(univercity => univercity.city.toLowerCase() === city.toLowerCase())
            .map(univercity => univercity.name);
    }


}
