import { univercities } from "@/context/schoolsData/exampleSchoolsData";


export const generateUniversities = (city: string): string[] => {
    return univercities
        .filter(univercity => univercity.city.toLowerCase() === city.toLowerCase())
        .map(univercity => univercity.name);
}
