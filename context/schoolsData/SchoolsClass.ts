import {faculty, schools, traits, universities} from './exampleSchoolsData'
class SchoolsClass {

    generateFeaturesByFacultate = (facultyId: number) => {
        const foundFaculty = faculty.find(f => f.id === facultyId);
        if (!foundFaculty) {
            return `Faculty with id ${facultyId} not found.`;
        }

        const features1 = foundFaculty.features_1.map(id => {
            const feature = traits.find(t => t.id === id);
            return feature ? feature : { name: `Feature with id ${id} not found.`, id: id, popularity: 0 };
        });

        const features2 = foundFaculty.features_2.map(id => {
            const feature = traits.find(t => t.id === id);
            return feature ? feature : { name: `Feature with id ${id} not found.`, id: id, popularity: 0 };
        });

        const otherFeatures = traits.filter(t => 
            !foundFaculty.features_1.includes(t.id) && !foundFaculty.features_2.includes(t.id)
        );

        const allFeatures = [...features1, ...features2, ...otherFeatures];
        allFeatures.sort((a, b) => b.popularity - a.popularity);

        return allFeatures;
    }

    generateFacultatesByUniversities = (universityName: string) => {
        const foundUniversity = universities.find(u => u.name === universityName);
        if (!foundUniversity) {
            return `University with name ${universityName} not found.`;
        }

        const facultates = foundUniversity.faculties.map(id => {
            const facultate = faculty.find(f => f.id === id);
            return facultate ? facultate.name : `Faculty with id ${id} not found.`;
        });

        return facultates;
    }
}