
export type City = string;

export type Faculty = {
    name: string;
    id: number;
    features_traits_1: number[];
    features_traits_2: number[];
    features_hard_1: number[];
    features_hard_2: number[];
};

export type Profile = {
    id: number;
    profileName: string;
    features_traits_1: number[];
    features_traits_2: number[];
    features_hard_1: number[];
    features_hard_2: number[];
};
export interface School {
    schoolName: string;
    profiles: number[];
    city: City;
    label: string;
    id:number;
}

export interface Trait {
    name: string;
    id: number;
    popularity: number;
}

export interface HardSkill {
    name: string;
    id: number;
    popularity: number;
}

export interface University {
    name: string;
    faculties: number[];
    city: City;
}

export type Keywords = string[];



export const faculty = [
    { name: "Administracja", id: 1, features_traits_1: [3, 5, 12, 23, 30, 35], features_traits_2: [1, 7, 16, 27, 31, 36], features_hard_1: [2, 9, 22, 37, 45], features_hard_2: [3, 11, 19, 28, 34] },
    { name: "Akustyka", id: 2, features_traits_1: [4, 8, 13, 19, 24, 37], features_traits_2: [2, 9, 17, 20, 32, 38], features_hard_1: [5, 12, 27, 39, 42], features_hard_2: [7, 10, 18, 29, 33] },
    { name: "Amerykanistyka", id: 3, features_traits_1: [5, 10, 14, 25, 28, 39], features_traits_2: [6, 11, 18, 21, 33, 40], features_hard_1: [2, 8, 17, 26, 36], features_hard_2: [3, 12, 19, 30, 45] },
    { name: "Analityka produktów spożywczych", id: 4, features_traits_1: [1, 7, 15, 22, 26, 41], features_traits_2: [3, 9, 16, 23, 27, 42], features_hard_1: [5, 11, 18, 31, 34], features_hard_2: [4, 13, 21, 29, 33] },
    { name: "Analiza i przetwarzanie danych", id: 5, features_traits_1: [2, 8, 17, 20, 31, 43], features_traits_2: [4, 10, 18, 21, 32, 44], features_hard_1: [6, 11, 24, 38, 40], features_hard_2: [7, 13, 22, 27, 35] },
    { name: "Aplikacje Internetu Rzeczy", id: 6, features_traits_1: [6, 11, 19, 23, 34, 45], features_traits_2: [5, 12, 20, 25, 35, 46], features_hard_1: [3, 14, 28, 37, 42], features_hard_2: [4, 10, 22, 30, 39] },
    { name: "Archeologia", id: 7, features_traits_1: [1, 12, 14, 26, 30, 47], features_traits_2: [2, 13, 16, 27, 31, 48], features_hard_1: [5, 9, 23, 33, 40], features_hard_2: [4, 11, 21, 29, 38] },
    { name: "Archeometria", id: 8, features_traits_1: [3, 9, 15, 28, 32, 49], features_traits_2: [4, 10, 18, 21, 33, 50], features_hard_1: [6, 12, 20, 34, 41], features_hard_2: [5, 11, 25, 31, 39] },
    { name: "Astronomia", id: 9, features_traits_1: [5, 11, 19, 22, 34, 51], features_traits_2: [6, 12, 20, 25, 35, 52], features_hard_1: [4, 9, 21, 30, 36], features_hard_2: [3, 14, 24, 32, 38] },
    { name: "Bałkanistyka", id: 10, features_traits_1: [1, 8, 17, 24, 29, 53], features_traits_2: [2, 9, 18, 25, 30, 54], features_hard_1: [5, 11, 20, 34, 37], features_hard_2: [4, 10, 22, 31, 39] },
    { name: "Bezpieczeństwo narodowe", id: 11, features_traits_1: [2, 10, 14, 23, 31, 55], features_traits_2: [3, 11, 15, 24, 32, 56], features_hard_1: [5, 12, 20, 30, 38], features_hard_2: [4, 13, 21, 29, 35] },
    { name: "Biofizyka", id: 12, features_traits_1: [4, 7, 16, 25, 33, 57], features_traits_2: [5, 8, 17, 26, 34, 58], features_hard_1: [6, 11, 21, 31, 38], features_hard_2: [3, 12, 20, 28, 39] },
    { name: "Bioinformatyka", id: 13, features_traits_1: [6, 9, 15, 22, 35, 59], features_traits_2: [7, 10, 18, 23, 36, 60], features_hard_1: [4, 13, 19, 27, 37], features_hard_2: [5, 11, 21, 30, 39] },
    { name: "Biologia", id: 14, features_traits_1: [3, 11, 17, 24, 28, 61], features_traits_2: [4, 12, 18, 25, 29, 62], features_hard_1: [6, 10, 20, 31, 34], features_hard_2: [5, 9, 22, 27, 33] },
    { name: "Biologia i zdrowie człowieka", id: 15, features_traits_1: [1, 8, 19, 26, 30, 63], features_traits_2: [2, 9, 20, 27, 31, 64], features_hard_1: [4, 12, 23, 29, 36], features_hard_2: [5, 10, 21, 30, 33] },
    { name: "Biotechnologia", id: 16, features_traits_1: [5, 10, 14, 21, 32, 65], features_traits_2: [6, 11, 15, 22, 33, 66], features_hard_1: [2, 13, 19, 28, 37], features_hard_2: [4, 9, 20, 31, 34] },
    { name: "Central Europe in the International Perspective", id: 17, features_traits_1: [4, 12, 18, 25, 34, 67], features_traits_2: [5, 13, 19, 26, 35, 68], features_hard_1: [3, 10, 22, 29, 38], features_hard_2: [6, 12, 20, 30, 33] },
    { name: "Central European and Balkan Studies", id: 18, features_traits_1: [2, 7, 15, 22, 30, 69], features_traits_2: [3, 8, 16, 23, 31, 70], features_hard_1: [5, 11, 19, 27, 34], features_hard_2: [4, 12, 20, 30, 39] },
    { name: "Chemia", id: 19, features_traits_1: [6, 9, 17, 24, 32, 71], features_traits_2: [7, 10, 18, 25, 33, 72], features_hard_1: [3, 12, 21, 30, 37], features_hard_2: [5, 11, 20, 28, 34] },
    { name: "Chemia aplikacyjna", id: 20, features_traits_1: [1, 10, 14, 23, 28, 73], features_traits_2: [2, 11, 15, 24, 29, 74], features_hard_1: [6, 13, 19, 30, 36], features_hard_2: [4, 9, 22, 27, 35] },
    { name: "Chemia dla inżynierów", id: 21, features_traits_1: [3, 7, 16, 25, 30, 75], features_traits_2: [4, 8, 17, 26, 31, 76], features_hard_1: [2, 11, 20, 28, 34], features_hard_2: [6, 12, 21, 29, 37] },
    { name: "Chemia materiałowa", id: 22, features_traits_1: [5, 11, 18, 27, 34, 77], features_traits_2: [6, 12, 19, 28, 35, 78], features_hard_1: [3, 9, 22, 30, 37], features_hard_2: [4, 13, 20, 29, 38] },
    { name: "Chemia medyczna z projektowaniem leków", id: 23, features_traits_1: [2, 8, 15, 21, 33, 79], features_traits_2: [3, 9, 16, 22, 34, 80], features_hard_1: [6, 12, 20, 30, 37], features_hard_2: [4, 11, 23, 28, 36] },
    { name: "Chemistry", id: 24, features_traits_1: [4, 10, 14, 23, 31, 81], features_traits_2: [5, 11, 15, 24, 32, 82], features_hard_1: [2, 13, 19, 28, 37], features_hard_2: [3, 12, 20, 29, 35] },
    { name: "Dialog i doradztwo społeczne", id: 25, features_traits_1: [6, 9, 17, 26, 34, 83], features_traits_2: [7, 10, 18, 27, 35, 84], features_hard_1: [4, 11, 20, 30, 36], features_hard_2: [5, 12, 22, 29, 39] },
    { name: "Digital Entrepreneurship", id: 26, features_traits_1: [1, 7, 14, 22, 30, 85], features_traits_2: [2, 8, 15, 23, 31, 86], features_hard_1: [5, 10, 18, 29, 33], features_hard_2: [3, 11, 19, 28, 36] },
    { name: "Dziennikarstwo i komunikacja społeczna", id: 27, features_traits_1: [3, 11, 17, 24, 33, 87], features_traits_2: [4, 12, 18, 25, 34, 88], features_hard_1: [6, 9, 21, 30, 35], features_hard_2: [5, 10, 20, 28, 37] },
    { name: "Edukacja artystyczna w zakresie sztuk muzycznych", id: 28, features_traits_1: [5, 8, 19, 21, 32, 89], features_traits_2: [6, 9, 20, 22, 33, 90], features_hard_1: [2, 13, 24, 29, 36], features_hard_2: [3, 10, 19, 30, 35] },
    { name: "Edukacja artystyczna w zakresie sztuk plastycznych", id: 29, features_traits_1: [1, 10, 14, 23, 31, 91], features_traits_2: [2, 11, 15, 24, 32, 92], features_hard_1: [5, 13, 19, 29, 34], features_hard_2: [4, 12, 21, 30, 37] },
    { name: "English Linguistics: Theories, Interfaces, Technologies", id: 30, features_traits_1: [4, 7, 16, 25, 33, 93], features_traits_2: [5, 8, 17, 26, 34, 94], features_hard_1: [2, 13, 22, 30, 38], features_hard_2: [3, 11, 20, 29, 35] },
    { name: "English Studies: Literature and Culture", id: 31, features_traits_1: [6, 9, 15, 21, 30, 95], features_traits_2: [7, 10, 16, 22, 31, 96], features_hard_1: [5, 12, 19, 28, 37], features_hard_2: [4, 13, 20, 29, 36] },
    { name: "Environmental Protection", id: 32, features_traits_1: [3, 12, 18, 24, 35, 97], features_traits_2: [4, 13, 19, 25, 36, 98], features_hard_1: [6, 11, 22, 30, 39], features_hard_2: [5, 10, 21, 28, 34] },
    { name: "Etnolingwistyka", id: 33, features_traits_1: [2, 8, 14, 23, 29, 99], features_traits_2: [3, 9, 15, 24, 30, 100], features_hard_1: [4, 13, 21, 30, 38], features_hard_2: [5, 10, 22, 29, 35] },
    { name: "Etnologia", id: 34, features_traits_1: [4, 10, 16, 25, 33, 101], features_traits_2: [5, 11, 17, 26, 34, 102], features_hard_1: [6, 12, 22, 31, 38], features_hard_2: [3, 11, 20, 28, 35] },
    { name: "European Legal Studies", id: 35, features_traits_1: [1, 7, 15, 22, 31, 103], features_traits_2: [2, 8, 16, 23, 32, 104], features_hard_1: [5, 12, 19, 30, 36], features_hard_2: [4, 10, 21, 29, 33] },
    { name: "Filmoznawstwo i kultura mediów", id: 36, features_traits_1: [3, 9, 18, 24, 35, 105], features_traits_2: [4, 10, 19, 25, 36, 106], features_hard_1: [6, 11, 20, 30, 38], features_hard_2: [5, 13, 22, 28, 34] },
    { name: "Filologia angielska", id: 37, features_traits_1: [2, 8, 14, 23, 30, 107], features_traits_2: [3, 9, 15, 24, 31, 108], features_hard_1: [6, 11, 21, 29, 35], features_hard_2: [5, 12, 20, 30, 37] },
    { name: "Filologia angielska w edukacji", id: 38, features_traits_1: [5, 10, 17, 21, 32, 109], features_traits_2: [6, 11, 18, 22, 33, 110], features_hard_1: [4, 13, 19, 30, 36], features_hard_2: [3, 12, 20, 28, 35] },
    { name: "Filologia angielska z pedagogiką", id: 39, features_traits_1: [1, 7, 15, 23, 31, 111], features_traits_2: [2, 8, 16, 24, 32, 112], features_hard_1: [5, 13, 19, 29, 34], features_hard_2: [4, 10, 21, 30, 38] },
    { name: "Filologia angielsko-celtycka", id: 40, features_traits_1: [4, 12, 18, 25, 34, 113], features_traits_2: [5, 13, 19, 26, 35, 114], features_hard_1: [3, 11, 20, 28, 37], features_hard_2: [6, 10, 22, 30, 36] },
    { name: "Filologia angielsko-chińska", id: 41, features_traits_1: [6, 9, 15, 22, 30, 115], features_traits_2: [7, 10, 16, 23, 31, 116], features_hard_1: [5, 11, 21, 29, 34], features_hard_2: [4, 13, 20, 30, 35] },
    { name: "Filologia arabska", id: 42, features_traits_1: [3, 11, 17, 24, 33, 117], features_traits_2: [4, 12, 18, 25, 34, 118], features_hard_1: [6, 9, 21, 30, 37], features_hard_2: [5, 10, 22, 28, 35] },
    { name: "Filologia francuska", id: 43, features_traits_1: [2, 8, 14, 21, 32, 119], features_traits_2: [3, 9, 15, 22, 33, 120], features_hard_1: [4, 13, 19, 30, 38], features_hard_2: [5, 11, 20, 29, 34] },
    { name: "Filologia germańska", id: 44, features_traits_1: [5, 10, 18, 23, 31, 121], features_traits_2: [6, 11, 19, 24, 32, 122], features_hard_1: [4, 12, 22, 29, 35], features_hard_2: [3, 11, 21, 30, 38] },
    { name: "Filologia hiszpańska", id: 45, features_traits_1: [1, 7, 15, 22, 30, 123], features_traits_2: [2, 8, 16, 23, 31, 124], features_hard_1: [5, 13, 19, 28, 37], features_hard_2: [4, 10, 21, 30, 34] },
    { name: "Filologia klasyczna", id: 46, features_traits_1: [4, 12, 18, 25, 33, 125], features_traits_2: [5, 13, 19, 26, 34, 126], features_hard_1: [6, 11, 22, 30, 35], features_hard_2: [3, 10, 21, 29, 38] },
    { name: "Filologia koreańska", id: 47, features_traits_1: [6, 9, 14, 22, 32, 127], features_traits_2: [7, 10, 15, 23, 33, 128], features_hard_1: [4, 13, 20, 30, 37], features_hard_2: [5, 11, 21, 28, 35] },
    { name: "Filologia polska", id: 48, features_traits_1: [3, 11, 17, 24, 34, 129], features_traits_2: [4, 12, 18, 25, 35, 130], features_hard_1: [6, 9, 21, 28, 37], features_hard_2: [5, 10, 22, 30, 33] },
    { name: "Filologia polska jako obca", id: 49, features_traits_1: [2, 8, 14, 21, 30, 131], features_traits_2: [3, 9, 15, 22, 31, 132], features_hard_1: [4, 12, 20, 28, 38], features_hard_2: [5, 13, 21, 30, 35] },
    { name: "Filologia rumuńska", id: 50, features_traits_1: [5, 10, 19, 23, 33, 133], features_traits_2: [6, 11, 20, 24, 34, 134], features_hard_1: [2, 12, 22, 30, 37], features_hard_2: [4, 13, 21, 28, 35] },
    { name: "Filologia skandynawska", id: 51, features_traits_1: [1, 7, 15, 22, 31, 135], features_traits_2: [2, 8, 16, 23, 32, 136], features_hard_1: [5, 12, 19, 29, 36], features_hard_2: [4, 10, 20, 30, 35] },
    { name: "Filologia wschodniosłowiańska", id: 52, features_traits_1: [4, 12, 18, 25, 34, 137], features_traits_2: [5, 13, 19, 26, 35, 138], features_hard_1: [6, 11, 21, 28, 37], features_hard_2: [3, 10, 20, 30, 35] },
    { name: "Filologia włoska", id: 53, features_traits_1: [6, 9, 14, 21, 30, 139], features_traits_2: [7, 10, 15, 22, 31, 140], features_hard_1: [4, 13, 20, 29, 35], features_hard_2: [5, 11, 22, 30, 37] },
    { name: "Filologie regionów", id: 54, features_traits_1: [3, 11, 17, 24, 33, 141], features_traits_2: [4, 12, 18, 25, 34, 142], features_hard_1: [6, 9, 21, 30, 36], features_hard_2: [5, 13, 20, 28, 35] },
    { name: "Filozofia", id: 55, features_traits_1: [2, 8, 14, 21, 32, 143], features_traits_2: [3, 9, 15, 22, 33, 144], features_hard_1: [4, 12, 20, 30, 36], features_hard_2: [5, 11, 21, 28, 37] },
    { name: "Fizyka", id: 56, features_traits_1: [5, 10, 19, 23, 31, 145], features_traits_2: [6, 11, 20, 24, 32, 146], features_hard_1: [4, 13, 22, 29, 35], features_hard_2: [3, 11, 21, 30, 38] },
    { name: "Fizyka medyczna", id: 57, features_traits_1: [1, 7, 15, 22, 30, 147], features_traits_2: [2, 8, 16, 23, 31, 148], features_hard_1: [6, 10, 21, 30, 36], features_hard_2: [5, 13, 20, 28, 35] },
    { name: "Geodezja i kartografia", id: 58, features_traits_1: [4, 12, 18, 25, 34, 149], features_traits_2: [5, 13, 19, 26, 35, 150], features_hard_1: [2, 11, 20, 30, 37], features_hard_2: [6, 9, 21, 28, 35] },
    { name: "Geografia", id: 59, features_traits_1: [3, 11, 17, 24, 33, 151], features_traits_2: [4, 12, 18, 25, 34, 152], features_hard_1: [6, 9, 22, 30, 36], features_hard_2: [5, 10, 21, 28, 35] },
    { name: "Gospodarka przestrzenna", id: 60, features_traits_1: [2, 8, 14, 21, 32, 153], features_traits_2: [3, 9, 15, 22, 33, 154], features_hard_1: [5, 11, 20, 30, 37], features_hard_2: [4, 13, 21, 28, 35] },
    { name: "Grafika komputerowa", id: 61, features_traits_1: [6, 9, 19, 22, 31, 155], features_traits_2: [7, 10, 20, 23, 32, 156], features_hard_1: [4, 13, 22, 30, 37], features_hard_2: [5, 11, 21, 28, 35] },
    { name: "Historia", id: 62, features_traits_1: [1, 7, 15, 23, 31, 157], features_traits_2: [2, 8, 16, 24, 32, 158], features_hard_1: [5, 12, 21, 29, 34], features_hard_2: [4, 10, 20, 30, 37] },
    { name: "Historia sztuki", id: 63, features_traits_1: [3, 11, 17, 24, 33, 159], features_traits_2: [4, 12, 18, 25, 34, 160], features_hard_1: [6, 10, 22, 30, 36], features_hard_2: [5, 13, 21, 28, 35] },
    { name: "Historia wojskowości", id: 64, features_traits_1: [5, 9, 19, 22, 34, 161], features_traits_2: [6, 10, 20, 23, 35, 162], features_hard_1: [4, 11, 21, 30, 36], features_hard_2: [5, 12, 20, 28, 35] },
    { name: "Iberystyka", id: 65, features_traits_1: [2, 8, 14, 21, 30, 163], features_traits_2: [3, 9, 15, 22, 31, 164], features_hard_1: [5, 11, 22, 29, 37], features_hard_2: [4, 10, 21, 30, 35] },
    { name: "Indianistyka", id: 66, features_traits_1: [3, 11, 17, 24, 32, 165], features_traits_2: [4, 12, 18, 25, 33, 166], features_hard_1: [6, 10, 20, 30, 38], features_hard_2: [5, 13, 21, 28, 36] },
    { name: "Indologia", id: 67, features_traits_1: [6, 9, 19, 22, 31, 167], features_traits_2: [7, 10, 20, 23, 32, 168], features_hard_1: [5, 13, 21, 29, 37], features_hard_2: [4, 11, 22, 30, 35] },
    { name: "Informatyka", id: 68, features_traits_1: [4, 10, 14, 21, 30, 169], features_traits_2: [5, 11, 15, 22, 31, 170], features_hard_1: [6, 9, 20, 28, 34], features_hard_2: [3, 12, 21, 30, 36] },
    { name: "Informatyka stosowana", id: 69, features_traits_1: [3, 11, 17, 24, 33, 171], features_traits_2: [4, 12, 18, 25, 34, 172], features_hard_1: [6, 10, 21, 30, 36], features_hard_2: [5, 13, 22, 28, 35] },
    { name: "Instrumentalistyka", id: 70, features_traits_1: [1, 7, 15, 22, 31, 173], features_traits_2: [2, 8, 16, 23, 32, 174], features_hard_1: [4, 12, 19, 30, 36], features_hard_2: [5, 11, 21, 28, 34] },
    { name: "Integracja europejska", id: 71, features_traits_1: [6, 9, 19, 24, 30, 175], features_traits_2: [7, 10, 20, 25, 31, 176], features_hard_1: [5, 13, 22, 30, 37], features_hard_2: [4, 12, 21, 28, 36] },
    { name: "Inżynieria biomedyczna", id: 72, features_traits_1: [2, 8, 14, 23, 31, 177], features_traits_2: [3, 9, 15, 24, 32, 178], features_hard_1: [5, 12, 21, 30, 34], features_hard_2: [4, 11, 20, 29, 37] },
    { name: "Inżynieria chemiczna", id: 73, features_traits_1: [3, 11, 17, 24, 34, 179], features_traits_2: [4, 12, 18, 25, 35, 180], features_hard_1: [6, 10, 22, 28, 37], features_hard_2: [5, 13, 21, 29, 36] },
    { name: "Inżynieria środowiska", id: 74, features_traits_1: [5, 9, 19, 23, 33, 181], features_traits_2: [6, 10, 20, 24, 34, 182], features_hard_1: [4, 11, 21, 29, 35], features_hard_2: [5, 13, 22, 30, 36] },
    { name: "Język migowy", id: 75, features_traits_1: [1, 7, 15, 22, 30, 183], features_traits_2: [2, 8, 16, 23, 31, 184], features_hard_1: [4, 12, 19, 29, 36], features_hard_2: [5, 13, 21, 28, 34] },
    { name: "Językoznawstwo komputerowe", id: 76, features_traits_1: [6, 9, 19, 24, 33, 185], features_traits_2: [7, 10, 20, 25, 34, 186], features_hard_1: [5, 13, 22, 30, 37], features_hard_2: [4, 12, 21, 28, 36] },
    { name: "Kognitywistyka", id: 77, features_traits_1: [3, 11, 17, 24, 32, 187], features_traits_2: [4, 12, 18, 25, 33, 188], features_hard_1: [6, 10, 21, 30, 35], features_hard_2: [5, 13, 22, 28, 36] },
    { name: "Komunikacja cyfrowa", id: 78, features_traits_1: [2, 8, 14, 23, 29, 189], features_traits_2: [3, 9, 15, 24, 30, 190], features_hard_1: [4, 11, 20, 30, 37], features_hard_2: [5, 13, 22, 28, 36] },
    { name: "Komunikacja marketingowa", id: 79, features_traits_1: [5, 9, 19, 22, 33, 191], features_traits_2: [6, 10, 20, 23, 34, 192], features_hard_1: [4, 13, 22, 30, 35], features_hard_2: [5, 12, 21, 28, 36] },
    { name: "Kulturoznawstwo", id: 80, features_traits_1: [4, 12, 18, 25, 34, 193], features_traits_2: [5, 13, 19, 26, 35, 194], features_hard_1: [6, 10, 21, 28, 35], features_hard_2: [5, 12, 22, 30, 37] },
    { name: "Literatura anglojęzyczna", id: 81, features_traits_1: [3, 11, 17, 24, 33, 195], features_traits_2: [4, 12, 18, 25, 34, 196], features_hard_1: [6, 10, 22, 28, 35], features_hard_2: [5, 13, 21, 30, 37] },
    { name: "Literatura anglojęzyczna w mediach", id: 82, features_traits_1: [1, 7, 15, 22, 30, 197], features_traits_2: [2, 8, 16, 23, 31, 198], features_hard_1: [6, 11, 20, 30, 34], features_hard_2: [5, 13, 21, 28, 36] },
    { name: "Logistyka", id: 83, features_traits_1: [6, 9, 19, 24, 34, 199], features_traits_2: [7, 10, 20, 25, 35, 200], features_hard_1: [5, 13, 22, 30, 37], features_hard_2: [4, 12, 21, 28, 36] },
    { name: "Logistyka", id: 83, features_traits_1: [6, 9, 19, 24, 34], features_traits_2: [7, 10, 20, 25, 35], features_hard_1: [5, 13, 22, 30, 37], features_hard_2: [4, 12, 21, 28, 36] },
    { name: "Matematyka", id: 84, features_traits_1: [3, 11, 17, 24, 33], features_traits_2: [4, 12, 18, 25, 34], features_hard_1: [6, 9, 21, 30, 36], features_hard_2: [5, 10, 22, 28, 37] },
    { name: "Mechanika", id: 85, features_traits_1: [5, 10, 19, 23, 31], features_traits_2: [6, 11, 20, 24, 32], features_hard_1: [4, 13, 22, 29, 35], features_hard_2: [3, 12, 21, 30, 37] },
    { name: "Media cyfrowe", id: 86, features_traits_1: [2, 8, 14, 23, 32], features_traits_2: [3, 9, 15, 24, 33], features_hard_1: [6, 10, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 35] },
    { name: "Medycyna", id: 87, features_traits_1: [1, 7, 15, 22, 30], features_traits_2: [2, 8, 16, 23, 31], features_hard_1: [4, 13, 22, 29, 35], features_hard_2: [5, 11, 21, 30, 37] },
    { name: "Mikrobiologia", id: 88, features_traits_1: [5, 9, 17, 24, 34], features_traits_2: [6, 10, 18, 25, 35], features_hard_1: [4, 13, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 36] },
    { name: "Muzykologia", id: 89, features_traits_1: [3, 11, 17, 23, 32], features_traits_2: [4, 12, 18, 24, 33], features_hard_1: [6, 10, 21, 30, 36], features_hard_2: [5, 13, 22, 28, 35] },
    { name: "Nanotechnologia", id: 90, features_traits_1: [6, 9, 19, 22, 30], features_traits_2: [7, 10, 20, 23, 31], features_hard_1: [5, 13, 21, 28, 37], features_hard_2: [4, 11, 22, 29, 35] },
    { name: "Neurobiologia", id: 91, features_traits_1: [2, 8, 14, 23, 32], features_traits_2: [3, 9, 15, 24, 33], features_hard_1: [6, 10, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 35] },
    { name: "Pielęgniarstwo", id: 92, features_traits_1: [5, 9, 17, 24, 34], features_traits_2: [6, 10, 18, 25, 35], features_hard_1: [4, 13, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 36] },
    { name: "Prawo", id: 93, features_traits_1: [3, 11, 17, 23, 32], features_traits_2: [4, 12, 18, 24, 33], features_hard_1: [6, 10, 21, 30, 36], features_hard_2: [5, 13, 22, 28, 35] },
    { name: "Psychologia", id: 94, features_traits_1: [6, 9, 19, 22, 30], features_traits_2: [7, 10, 20, 23, 31], features_hard_1: [5, 13, 21, 28, 37], features_hard_2: [4, 11, 22, 29, 35] },
    { name: "Socjologia", id: 95, features_traits_1: [2, 8, 14, 23, 32], features_traits_2: [3, 9, 15, 24, 33], features_hard_1: [6, 10, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 35] },
    { name: "Technologie informatyczne", id: 96, features_traits_1: [5, 9, 17, 24, 34], features_traits_2: [6, 10, 18, 25, 35], features_hard_1: [4, 13, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 36] },
    { name: "Turystyka", id: 97, features_traits_1: [3, 11, 17, 23, 32], features_traits_2: [4, 12, 18, 24, 33], features_hard_1: [6, 10, 21, 30, 36], features_hard_2: [5, 13, 22, 28, 35] },
    { name: "Zarządzanie", id: 98, features_traits_1: [6, 9, 19, 22, 30], features_traits_2: [7, 10, 20, 23, 31], features_hard_1: [5, 13, 21, 28, 37], features_hard_2: [4, 11, 22, 29, 35] },
    { name: "Zarządzanie zasobami ludzkimi", id: 99, features_traits_1: [2, 8, 14, 23, 32], features_traits_2: [3, 9, 15, 24, 33], features_hard_1: [6, 10, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 35] },
    { name: "Zoologia", id: 100, features_traits_1: [5, 9, 17, 24, 34], features_traits_2: [6, 10, 18, 25, 35], features_hard_1: [4, 13, 21, 30, 37], features_hard_2: [5, 12, 22, 28, 36] },
    { name: "Filologia klasyczna", id: 101, features_traits_1: [4, 12, 18, 25, 33, 125], features_traits_2: [5, 13, 19, 26, 34, 126], features_hard_1: [6, 11, 22, 30, 35], features_hard_2: [3, 10, 21, 29, 38] },
    { name: "Filologia koreańska", id: 102, features_traits_1: [6, 9, 14, 22, 32, 127], features_traits_2: [7, 10, 15, 23, 33, 128], features_hard_1: [4, 13, 20, 30, 37], features_hard_2: [5, 11, 21, 28, 35] },
    { name: "Filologia polska", id: 103, features_traits_1: [3, 11, 17, 24, 34, 129], features_traits_2: [4, 12, 18, 25, 35, 130], features_hard_1: [6, 9, 21, 28, 37], features_hard_2: [5, 10, 22, 30, 33] },
    { name: "Filologia polska jako obca", id: 104, features_traits_1: [2, 8, 14, 21, 30, 131], features_traits_2: [3, 9, 15, 22, 31, 132], features_hard_1: [4, 12, 20, 28, 38], features_hard_2: [5, 13, 21, 30, 35] },
    { name: "Filologia rumuńska", id: 105, features_traits_1: [5, 10, 19, 23, 33, 133], features_traits_2: [6, 11, 20, 24, 34, 134], features_hard_1: [2, 12, 22, 30, 37], features_hard_2: [4, 13, 21, 28, 35] },
    { name: "Filologia skandynawska", id: 106, features_traits_1: [1, 7, 15, 22, 31, 135], features_traits_2: [2, 8, 16, 23, 32, 136], features_hard_1: [5, 12, 19, 29, 36], features_hard_2: [4, 10, 20, 30, 35] },
    { name: "Filologia wschodniosłowiańska", id: 107, features_traits_1: [4, 12, 18, 25, 34, 137], features_traits_2: [5, 13, 19, 26, 35, 138], features_hard_1: [6, 11, 21, 28, 37], features_hard_2: [3, 10, 20, 30, 35] },
    { name: "Filologia włoska", id: 108, features_traits_1: [6, 9, 14, 21, 30, 139], features_traits_2: [7, 10, 15, 22, 31, 140], features_hard_1: [4, 13, 20, 29, 35], features_hard_2: [5, 11, 22, 30, 37] },
    { name: "Filologie regionów", id: 109, features_traits_1: [3, 11, 17, 24, 33, 141], features_traits_2: [4, 12, 18, 25, 34, 142], features_hard_1: [6, 9, 21, 30, 36], features_hard_2: [5, 13, 20, 28, 35] },
    { name: "Filozofia", id: 110, features_traits_1: [2, 8, 14, 21, 32, 143], features_traits_2: [3, 9, 15, 22, 33, 144], features_hard_1: [4, 12, 20, 30, 36], features_hard_2: [5, 11, 21, 28, 37] },
    { name: "Fizyka", id: 111, features_traits_1: [5, 10, 19, 23, 31, 145], features_traits_2: [6, 11, 20, 24, 32, 146], features_hard_1: [4, 13, 22, 29, 35], features_hard_2: [3, 11, 21, 30, 38] },
    { name: "Fizyka medyczna", id: 112, features_traits_1: [1, 7, 15, 22, 30, 147], features_traits_2: [2, 8, 16, 23, 31, 148], features_hard_1: [6, 10, 21, 30, 36], features_hard_2: [5, 13, 20, 28, 35] },
    { name: "Geodezja i kartografia", id: 113, features_traits_1: [4, 12, 18, 25, 34, 149], features_traits_2: [5, 13, 19, 26, 35, 150], features_hard_1: [6, 9, 22, 30, 37], features_hard_2: [3, 10, 20, 29, 35] },
    { name: "Geografia", id: 114, features_traits_1: [6, 9, 14, 21, 30, 151], features_traits_2: [7, 10, 15, 22, 31, 152], features_hard_1: [4, 13, 20, 30, 36], features_hard_2: [5, 11, 21, 28, 35] },
    { name: "Geohazards and Climate Change", id: 115, features_traits_1: [3, 11, 17, 24, 33, 153], features_traits_2: [4, 12, 18, 25, 34, 154], features_hard_1: [6, 9, 22, 29, 37], features_hard_2: [5, 10, 20, 30, 35] },
    { name: "Geoinformacja", id: 116, features_traits_1: [2, 8, 14, 21, 32, 155], features_traits_2: [3, 9, 15, 22, 33, 156], features_hard_1: [4, 13, 20, 30, 36], features_hard_2: [5, 10, 21, 28, 35] },
    { name: "Geologia", id: 117, features_traits_1: [5, 10, 19, 23, 31, 157], features_traits_2: [6, 11, 20, 24, 32, 158], features_hard_1: [4, 13, 22, 29, 37], features_hard_2: [3, 9, 21, 30, 35] },
    { name: "Geologia dla inżynierów", id: 118, features_traits_1: [1, 7, 15, 22, 30, 159], features_traits_2: [2, 8, 16, 23, 31, 160], features_hard_1: [5, 12, 21, 28, 34], features_hard_2: [4, 13, 20, 30, 37] },
    { name: "Geologia inżynierska i hydrogeologia", id: 119, features_traits_1: [3, 11, 17, 24, 33, 161], features_traits_2: [4, 12, 18, 25, 34, 162], features_hard_1: [6, 9, 20, 30, 35], features_hard_2: [5, 13, 21, 29, 36] },
    { name: "Geoslawistyka", id: 120, features_traits_1: [2, 8, 14, 21, 32, 163], features_traits_2: [3, 9, 15, 22, 33, 164], features_hard_1: [4, 12, 20, 30, 35], features_hard_2: [5, 11, 21, 28, 36] },
    { name: "Global Communication", id: 121, features_traits_1: [5, 10, 19, 23, 31, 165], features_traits_2: [6, 11, 20, 24, 32, 166], features_hard_1: [4, 13, 22, 29, 35], features_hard_2: [3, 12, 21, 30, 37] },
    { name: "Gospodarka i ekonomia w dziejach", id: 122, features_traits_1: [1, 7, 15, 22, 30, 167], features_traits_2: [2, 8, 16, 23, 31, 168], features_hard_1: [5, 12, 21, 28, 34], features_hard_2: [4, 10, 22, 30, 36] },
    { name: "Gospodarka przestrzenna", id: 123, features_traits_1: [4, 12, 18, 25, 34, 169], features_traits_2: [5, 13, 19, 26, 35, 170], features_hard_1: [3, 9, 22, 30, 36], features_hard_2: [6, 10, 20, 28, 37] },
    { name: "Governance of Organizations", id: 124, features_traits_1: [6, 9, 14, 21, 30, 171], features_traits_2: [7, 10, 15, 22, 31, 172], features_hard_1: [4, 11, 20, 29, 35], features_hard_2: [5, 12, 22, 30, 36] },
    { name: "Groznawstwo", id: 125, features_traits_1: [3, 11, 17, 24, 33, 173], features_traits_2: [4, 12, 18, 25, 34, 174], features_hard_1: [6, 9, 21, 28, 37], features_hard_2: [5, 10, 20, 30, 35] },
    { name: "Hebraistyka", id: 126, features_traits_1: [2, 8, 14, 21, 32, 175], features_traits_2: [3, 9, 15, 22, 33, 176], features_hard_1: [4, 12, 20, 30, 35], features_hard_2: [5, 13, 22, 28, 36] },
    { name: "Historia", id: 127, features_traits_1: [5, 10, 19, 23, 31, 177], features_traits_2: [6, 11, 20, 24, 32, 178], features_hard_1: [3, 12, 21, 30, 37], features_hard_2: [4, 9, 22, 28, 35] },
    { name: "Historia i polityka współczesna - interdyscyplinarne studia nauczycielskie", id: 128, features_traits_1: [1, 7, 15, 22, 30, 179], features_traits_2: [2, 8, 16, 23, 31, 180], features_hard_1: [4, 10, 22, 28, 36], features_hard_2: [5, 12, 21, 30, 35] },
    { name: "Historia sztuki", id: 129, features_traits_1: [4, 12, 18, 25, 34, 181], features_traits_2: [5, 13, 19, 26, 35, 182], features_hard_1: [3, 11, 21, 29, 36], features_hard_2: [6, 10, 20, 30, 38] },
    { name: "Humanistyka w szkole - polonistyczno-historyczne studia nauczycielskie", id: 130, features_traits_1: [6, 9, 14, 21, 30, 183], features_traits_2: [7, 10, 15, 22, 31, 184], features_hard_1: [4, 12, 20, 30, 35], features_hard_2: [5, 13, 21, 28, 36] },
    { name: "Hydrologia, meteorologia i klimatologia", id: 131, features_traits_1: [3, 11, 17, 24, 33, 185], features_traits_2: [4, 12, 18, 25, 34, 186], features_hard_1: [6, 9, 22, 28, 37], features_hard_2: [5, 10, 20, 30, 35] },
    { name: "Informacja naukowa i bibliotekoznawstwo", id: 132, features_traits_1: [2, 8, 14, 21, 32, 187], features_traits_2: [3, 9, 15, 22, 33, 188], features_hard_1: [4, 12, 20, 30, 38], features_hard_2: [5, 11, 22, 28, 35] },
    { name: "Informatyka", id: 133, features_traits_1: [5, 10, 19, 23, 31, 189], features_traits_2: [6, 11, 20, 24, 32, 190], features_hard_1: [3, 13, 22, 30, 36], features_hard_2: [4, 9, 21, 28, 35] },
    { name: "Informatyka kwantowa", id: 134, features_traits_1: [1, 7, 15, 22, 30, 191], features_traits_2: [2, 8, 16, 23, 31, 192], features_hard_1: [6, 12, 20, 28, 37], features_hard_2: [4, 13, 22, 30, 35] },
    { name: "Japonistyka", id: 135, features_traits_1: [4, 12, 18, 25, 34, 193], features_traits_2: [5, 13, 19, 26, 35, 194], features_hard_1: [3, 9, 21, 30, 36], features_hard_2: [6, 11, 22, 28, 37] },
    { name: "Język niemiecki i komunikacja w biznesie", id: 136, features_traits_1: [6, 9, 14, 21, 30, 195], features_traits_2: [7, 10, 15, 22, 31, 196], features_hard_1: [4, 13, 22, 30, 35], features_hard_2: [5, 11, 21, 29, 37] },
    { name: "Językoznawstwo i zarządzanie informacją", id: 137, features_traits_1: [3, 11, 17, 24, 33, 197], features_traits_2: [4, 12, 18, 25, 34, 198], features_hard_1: [6, 9, 21, 28, 35], features_hard_2: [5, 10, 22, 30, 36] },
    { name: "Kartografia i geomatyka", id: 138, features_traits_1: [2, 8, 14, 21, 32, 199], features_traits_2: [3, 9, 15, 22, 33, 200], features_hard_1: [4, 12, 20, 30, 35], features_hard_2: [5, 11, 22, 28, 36] },
    { name: "Kierunek prawno-ekonomiczny", id: 139, features_traits_1: [5, 10, 19, 23, 31, 201], features_traits_2: [6, 11, 20, 24, 32, 202], features_hard_1: [3, 13, 21, 28, 34], features_hard_2: [4, 9, 22, 30, 36] },
    { name: "Kognitywistyka", id: 140, features_traits_1: [1, 7, 15, 22, 30, 203], features_traits_2: [2, 8, 16, 23, 31, 204], features_hard_1: [6, 12, 20, 30, 37], features_hard_2: [4, 13, 22, 28, 35] },
    { name: "Kulturoznawstwo", id: 141, features_traits_1: [4, 12, 18, 25, 34, 205], features_traits_2: [5, 13, 19, 26, 35, 206], features_hard_1: [3, 11, 21, 30, 36], features_hard_2: [6, 9, 22, 28, 35] },
    { name: "Logopedia", id: 142, features_traits_1: [6, 9, 14, 21, 30, 207], features_traits_2: [7, 10, 15, 22, 31, 208], features_hard_1: [4, 13, 20, 30, 35], features_hard_2: [5, 12, 22, 28, 37] },
    { name: "Matematyka", id: 143, features_traits_1: [3, 11, 17, 24, 33, 209], features_traits_2: [4, 12, 18, 25, 34, 210], features_hard_1: [6, 9, 21, 28, 35], features_hard_2: [5, 10, 22, 30, 37] },
    { name: "Matematyka w finansach", id: 144, features_traits_1: [2, 8, 14, 21, 32, 211], features_traits_2: [3, 9, 15, 22, 33, 212], features_hard_1: [4, 12, 20, 30, 35], features_hard_2: [5, 11, 22, 28, 37] },
    { name: "Matematyka z informatyką", id: 145, features_traits_1: [5, 10, 19, 23, 31, 213], features_traits_2: [6, 11, 20, 24, 32, 214], features_hard_1: [3, 13, 21, 28, 34], features_hard_2: [4, 9, 22, 30, 35] },  
]
export const cities = [
    "Warszawa",
    "Kraków",
    "Łódź",
    "Wrocław",
    "Poznań",
    "Gdańsk",
    "Szczecin",
    "Bydgoszcz",
    "Lublin",
    "Katowice",
    "Białystok",
    "Gdynia",
    "Częstochowa",
    "Radom",
    "Toruń"
  ];
  export const profiles = [
    { id: 1, profileName: "klasa humanistyczna", features_traits_1: [10, 14, 18, 22, 28, 35], features_traits_2: [11, 24, 36, 47, 56, 73, 82], features_hard_1: [101, 119], features_hard_2: [107, 108, 105] },
    { id: 2, profileName: "klasa biologiczno-chemiczno-matematyczna", features_traits_1: [15, 19, 25, 29, 42, 46], features_traits_2: [34, 38, 58, 69, 87], features_hard_1: [102, 120], features_hard_2: [106, 109, 111] },
    { id: 3, profileName: "klasa matematyczno-fizyczna", features_traits_1: [12, 15, 25, 31, 38, 41], features_traits_2: [26, 57, 68], features_hard_1: [103, 121], features_hard_2: [110, 112, 113] },
    { id: 4, profileName: "klasa matematyczno-geograficzna", features_traits_1: [21, 29, 32, 45, 50], features_traits_2: [33, 47, 54, 60], features_hard_1: [104, 122], features_hard_2: [114, 115, 116] },
    { id: 5, profileName: "ABAKUS mat fiz", features_traits_1: [19, 25, 30, 46], features_traits_2: [35, 48, 62], features_hard_1: [105, 123], features_hard_2: [117, 118, 119] },
    { id: 6, profileName: "COLUMBUS mat-geo", features_traits_1: [20, 34, 47], features_traits_2: [30, 52, 61, 71], features_hard_1: [106, 124], features_hard_2: [120, 121, 122] },
    { id: 7, profileName: "LEX gr. 1 human", features_traits_1: [10, 14, 18, 35, 44], features_traits_2: [37, 49, 65], features_hard_1: [107, 125], features_hard_2: [123, 124, 125] },
    { id: 8, profileName: "LEX gr. 2 human", features_traits_1: [17, 28, 35, 43], features_traits_2: [31, 56, 64], features_hard_1: [108, 126], features_hard_2: [126, 127, 128] },
    { id: 9, profileName: "MEDICUS biol-chem", features_traits_1: [15, 19, 25, 41, 46], features_traits_2: [34, 58, 70], features_hard_1: [109, 127], features_hard_2: [129, 130, 131] },
    { id: 10, profileName: "GALIA gr 1 wstępny humanistyczny", features_traits_1: [13, 18, 23, 28, 35, 45], features_traits_2: [36, 51, 66], features_hard_1: [110, 128], features_hard_2: [132, 133, 134] },
    { id: 11, profileName: "GALIA gr 2 wstępny biologiczno - chemiczny", features_traits_1: [15, 19, 25, 38, 47], features_traits_2: [31, 55, 67], features_hard_1: [111, 129], features_hard_2: [135, 136, 137] },
    { id: 12, profileName: "pre-IB", features_traits_1: [10, 14, 22, 33, 42], features_traits_2: [32, 54, 63], features_hard_1: [112, 130], features_hard_2: [138, 139, 140] },
    { id: 13, profileName: "PRAWNICZA", features_traits_1: [10, 14, 18, 35, 38], features_traits_2: [39, 57, 68], features_hard_1: [113, 131], features_hard_2: [141, 142, 143] },
    { id: 14, profileName: "POLITECHNICZNA AI", features_traits_1: [15, 19, 25, 28, 46], features_traits_2: [35, 50, 62], features_hard_1: [114, 132], features_hard_2: [144, 145, 146] },
    { id: 15, profileName: "EKONOMICZNA AI", features_traits_1: [13, 19, 25, 28, 44], features_traits_2: [36, 48, 61], features_hard_1: [115, 133], features_hard_2: [147, 148, 149] },
    { id: 16, profileName: "MEDYCZNA", features_traits_1: [15, 19, 25, 30, 45], features_traits_2: [33, 51, 67], features_hard_1: [116, 134], features_hard_2: [150, 151, 152] },
    { id: 17, profileName: "VESPUCCI - akademicka", features_traits_1: [15, 19, 25, 27, 43], features_traits_2: [37, 56, 64], features_hard_1: [117, 135], features_hard_2: [153, 154, 155] },
    { id: 18, profileName: "LINUX - akademicka", features_traits_1: [15, 19, 25, 28, 42], features_traits_2: [35, 52, 63], features_hard_1: [118, 136], features_hard_2: [156, 157, 158] },
    { id: 19, profileName: "DA VINCI - akademicka", features_traits_1: [12, 13, 15, 19, 25, 38], features_traits_2: [34, 54, 69], features_hard_1: [119, 137], features_hard_2: [159, 160, 161] },
    { id: 20, profileName: "AVICENNA – akademicka", features_traits_1: [13, 15, 18, 23, 28, 46], features_traits_2: [36, 57, 66], features_hard_1: [120, 138], features_hard_2: [162, 163, 164] },
    { id: 21, profileName: "Akademicki-Ekonomiczny", features_traits_1: [12, 13, 15, 19, 25, 44], features_traits_2: [30, 49, 62], features_hard_1: [121, 139], features_hard_2: [165, 166, 167] },
    { id: 22, profileName: "Medyczny", features_traits_1: [15, 19, 25, 41, 46], features_traits_2: [39, 56, 68], features_hard_1: [122, 140], features_hard_2: [168, 169, 170] },
    { id: 23, profileName: "Informatyczny", features_traits_1: [12, 15, 25, 28, 45], features_traits_2: [35, 51, 67], features_hard_1: [123, 141], features_hard_2: [171, 172, 173] },
    { id: 24, profileName: "Psychologiczno-Prawniczy", features_traits_1: [10, 14, 18, 22, 42], features_traits_2: [38, 54, 61], features_hard_1: [124, 142], features_hard_2: [174, 175, 176] },
    { id: 25, profileName: "medyczna", features_traits_1: [15, 19, 25, 31, 44], features_traits_2: [37, 57, 69], features_hard_1: [125, 143], features_hard_2: [177, 178, 179] },
    { id: 26, profileName: "biologiczno chemiczna", features_traits_1: [15, 19, 25, 29, 45], features_traits_2: [33, 55, 68], features_hard_1: [126, 144], features_hard_2: [180, 181, 182] },
    { id: 27, profileName: "dziennikarsko prawna", features_traits_1: [10, 14, 18, 35, 47], features_traits_2: [35, 50, 66], features_hard_1: [127, 145], features_hard_2: [183, 184, 185] },
    { id: 28, profileName: "politechniczna", features_traits_1: [12, 13, 15, 19, 25, 28, 44], features_traits_2: [36, 53, 63], features_hard_1: [128, 146], features_hard_2: [186, 187, 188] },
    { id: 29, profileName: "turystyczno ekonomiczna", features_traits_1: [13, 19, 25, 31, 41], features_traits_2: [30, 49, 67], features_hard_1: [129, 147], features_hard_2: [189, 190, 191] },
    { id: 30, profileName: "Humanistyczna", features_traits_1: [10, 14, 18, 28, 46], features_traits_2: [32, 57, 66], features_hard_1: [130, 148], features_hard_2: [192, 193, 194] },
    { id: 31, profileName: "Informatyka z kwantem", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [34, 54, 64], features_hard_1: [131, 149], features_hard_2: [195, 196, 197] },
    { id: 32, profileName: "Matematyczno-geograficzna", features_traits_1: [12, 15, 25, 29, 32, 43], features_traits_2: [36, 56, 62], features_hard_1: [132, 150], features_hard_2: [198, 199, 200] },
    { id: 33, profileName: "Biologiczno-chemiczna", features_traits_1: [15, 19, 25, 44], features_traits_2: [35, 50, 67], features_hard_1: [133, 151], features_hard_2: [201, 202, 203] },
    { id: 34, profileName: "Medialny", features_traits_1: [10, 14, 18, 28, 45], features_traits_2: [37, 51, 65], features_hard_1: [134, 152], features_hard_2: [204, 205, 206] },
    { id: 35, profileName: "Biologiczno-Chemiczny", features_traits_1: [15, 19, 25, 41, 47], features_traits_2: [38, 55, 61], features_hard_1: [135, 153], features_hard_2: [207, 208, 209] },
    { id: 36, profileName: "Ekonomiczny", features_traits_1: [13, 19, 25, 31, 41], features_traits_2: [31, 54, 69], features_hard_1: [136, 154], features_hard_2: [210, 211, 212] },
    { id: 37, profileName: "Politechniczny", features_traits_1: [12, 13, 15, 19, 25, 46], features_traits_2: [32, 50, 64], features_hard_1: [137, 155], features_hard_2: [213, 214, 215] },
    { id: 38, profileName: "Wstępny", features_traits_1: [12, 13, 15, 19, 28, 44], features_traits_2: [35, 57, 67], features_hard_1: [138, 156], features_hard_2: [216, 217, 218] },
    { id: 39, profileName: "IKA Informatyczna Klasa Akademicka mat.-fiz.-inf.", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [34, 49, 68], features_hard_1: [139, 157], features_hard_2: [219, 220, 221] },
    { id: 40, profileName: "MKA Matematyczna Klasa Akademicka mat.-fiz.-inf.", features_traits_1: [12, 15, 25, 27, 43], features_traits_2: [32, 51, 64], features_hard_1: [140, 158], features_hard_2: [222, 223, 224] },
    { id: 41, profileName: "PKM Patronacka Klasa Medyczna biol.-chem.", features_traits_1: [15, 19, 25, 30, 44], features_traits_2: [36, 57, 66], features_hard_1: [141, 159], features_hard_2: [225, 226, 227] },
    { id: 42, profileName: "EKA Ekonomiczna Klasa Akademicka mat.-geo.-językowa", features_traits_1: [13, 19, 25, 28, 46], features_traits_2: [37, 50, 63], features_hard_1: [142, 160], features_hard_2: [228, 229, 230] },
    { id: 43, profileName: "prozdrowotna", features_traits_1: [15, 19, 25, 31, 47], features_traits_2: [34, 55, 61], features_hard_1: [143, 161], features_hard_2: [231, 232, 233] },
    { id: 44, profileName: "inżynieryjna", features_traits_1: [15, 19, 25, 28, 45], features_traits_2: [33, 51, 65], features_hard_1: [144, 162], features_hard_2: [234, 235, 236] },
    { id: 45, profileName: "biznesowa", features_traits_1: [13, 19, 25, 31, 41], features_traits_2: [32, 56, 62], features_hard_1: [145, 163], features_hard_2: [237, 238, 239] },
    { id: 46, profileName: "europejska", features_traits_1: [15, 19, 25, 29, 42], features_traits_2: [30, 50, 66], features_hard_1: [146, 164], features_hard_2: [240, 241, 242] },
    { id: 47, profileName: "LINGWISTYCZNA", features_traits_1: [12, 13, 15, 19, 25, 46], features_traits_2: [36, 54, 67], features_hard_1: [147, 165], features_hard_2: [243, 244, 245] },
    { id: 48, profileName: "POLITECHNICZNO-EKONOMICZNA (klasa akademicka Uniwersytetu Ekonomicznego)", features_traits_1: [12, 13, 15, 19, 28, 44], features_traits_2: [35, 57, 64], features_hard_1: [148, 166], features_hard_2: [246, 247, 248] },
    { id: 49, profileName: "MEDIALNA", features_traits_1: [10, 14, 18, 28, 45], features_traits_2: [34, 49, 68], features_hard_1: [149, 167], features_hard_2: [249, 250, 251] },
    { id: 50, profileName: "PRZYRODNICZA", features_traits_1: [15, 19, 25, 29, 42], features_traits_2: [32, 55, 62], features_hard_1: [150, 168], features_hard_2: [252, 253, 254] },
    { id: 51, profileName: "biologiczno - chemiczny", features_traits_1: [15, 19, 25, 29, 44], features_traits_2: [36, 56, 65], features_hard_1: [151, 169], features_hard_2: [255, 256, 257] },
    { id: 52, profileName: "lingwistyczno - geograficzny", features_traits_1: [13, 19, 25, 31, 43], features_traits_2: [30, 54, 67], features_hard_1: [152, 170], features_hard_2: [258, 259, 260] },
    { id: 53, profileName: "humanistyczno - medialny", features_traits_1: [10, 14, 18, 28, 44], features_traits_2: [34, 49, 64], features_hard_1: [153, 171], features_hard_2: [261, 262, 263] },
    { id: 54, profileName: "matematyczno - geograficzny", features_traits_1: [12, 15, 25, 29, 45], features_traits_2: [37, 51, 66], features_hard_1: [154, 172], features_hard_2: [264, 265, 266] },
    { id: 55, profileName: "klasa ekonomiczna: profil matematyczno-geograficzno-językowy", features_traits_1: [13, 19, 25, 29, 42], features_traits_2: [32, 55, 62], features_hard_1: [155, 173], features_hard_2: [267, 268, 269] },
    { id: 56, profileName: "klasa humanistyczna: profil teatrologiczno-filmoznawczy", features_traits_1: [10, 14, 18, 28, 46], features_traits_2: [35, 57, 63], features_hard_1: [156, 174], features_hard_2: [270, 271, 272] },
    { id: 57, profileName: "klasa humanistyczna: profil prawniczy", features_traits_1: [10, 14, 18, 35, 47], features_traits_2: [34, 50, 67], features_hard_1: [157, 175], features_hard_2: [273, 274, 275] },
    { id: 58, profileName: "klasa o profilu biologiczno-chemicznym", features_traits_1: [15, 19, 25, 31, 44], features_traits_2: [30, 54, 66], features_hard_1: [158, 176], features_hard_2: [276, 277, 278] },
    { id: 59, profileName: "klasa politechniczna: profil matematyczno-informatyczno-językowy", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [37, 55, 65], features_hard_1: [159, 177], features_hard_2: [279, 280, 281] },
    { id: 60, profileName: "architektoniczno-językowa ARCHITEKT", features_traits_1: [13, 19, 25, 29, 46], features_traits_2: [32, 56, 62], features_hard_1: [160, 178], features_hard_2: [282, 283, 284] },
    { id: 61, profileName: "psychologiczna SELF-CARE", features_traits_1: [10, 14, 18, 28, 44], features_traits_2: [34, 50, 63], features_hard_1: [161, 179], features_hard_2: [285, 286, 287] },
    { id: 62, profileName: "matematyczno-chemiczna ANALITYK", features_traits_1: [12, 15, 25, 29, 42], features_traits_2: [30, 57, 67], features_hard_1: [162, 180], features_hard_2: [288, 289, 290] },
    { id: 63, profileName: "dwujęzyczna prawniczo-ekonomiczna PRAWNIK", features_traits_1: [10, 14, 18, 28, 47], features_traits_2: [32, 55, 66], features_hard_1: [163, 181], features_hard_2: [291, 292, 293] },
    { id: 64, profileName: "humanistyczny z językiem niemieckim", features_traits_1: [10, 14, 18, 28, 33, 41], features_traits_2: [35, 51, 65], features_hard_1: [164, 182], features_hard_2: [294, 295, 296] },
    { id: 65, profileName: "humanistyczny z językiem hiszpańskim", features_traits_1: [10, 14, 18, 28, 46], features_traits_2: [36, 54, 67], features_hard_1: [165, 183], features_hard_2: [297, 298, 299] },
    { id: 66, profileName: "biologiczno-językowy z językiem niemieckim", features_traits_1: [15, 19, 25, 29, 45], features_traits_2: [32, 55, 62], features_hard_1: [166, 184], features_hard_2: [300, 301, 302] },
    { id: 67, profileName: "biologiczno-językowy z językiem hiszpańskim", features_traits_1: [15, 19, 25, 29, 44], features_traits_2: [34, 50, 65], features_hard_1: [167, 185], features_hard_2: [303, 304, 305] },
    { id: 68, profileName: "matematyczno-geograficzny z językiem niemieckim", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [36, 57, 63], features_hard_1: [168, 186], features_hard_2: [306, 307, 308] },
    { id: 69, profileName: "matematyczno-geograficzny z językiem hiszpańskim", features_traits_1: [12, 15, 25, 29, 46], features_traits_2: [35, 56, 62], features_hard_1: [169, 187], features_hard_2: [309, 310, 311] },
    { id: 70, profileName: "biologiczno-chemiczny", features_traits_1: [15, 19, 25, 30, 45], features_traits_2: [32, 55, 67], features_hard_1: [170, 188], features_hard_2: [312, 313, 314] },
    { id: 71, profileName: "Dwujęzyczny prawniczo-psychologiczny", features_traits_1: [10, 14, 18, 22, 33, 44], features_traits_2: [37, 50, 65], features_hard_1: [171, 189], features_hard_2: [315, 316, 317] },
    { id: 72, profileName: "Dwujęzyczny medyczny", features_traits_1: [15, 19, 25, 30, 42], features_traits_2: [36, 56, 64], features_hard_1: [172, 190], features_hard_2: [318, 319, 320] },
    { id: 73, profileName: "Dwujęzyczny ekonomiczno-informatyczno-społeczny", features_traits_1: [13, 19, 25, 31, 47], features_traits_2: [34, 51, 62], features_hard_1: [173, 191], features_hard_2: [321, 322, 323] },
    { id: 74, profileName: "Dwujęzyczny politechniczny", features_traits_1: [12, 13, 15, 19, 28, 44], features_traits_2: [37, 54, 67], features_hard_1: [174, 192], features_hard_2: [324, 325, 326] },
    { id: 75, profileName: "LEX-PRESS", features_traits_1: [10, 14, 18, 28, 42], features_traits_2: [33, 56, 61], features_hard_1: [175, 193], features_hard_2: [327, 328, 329] },
    { id: 76, profileName: "LEX-CINEMA", features_traits_1: [10, 14, 18, 28, 45], features_traits_2: [34, 55, 62], features_hard_1: [176, 194], features_hard_2: [330, 331, 332] },
    { id: 77, profileName: "POLITECHNICUS", features_traits_1: [12, 13, 15, 19, 25, 46], features_traits_2: [36, 57, 67], features_hard_1: [177, 195], features_hard_2: [333, 334, 335] },
    { id: 78, profileName: "ECONOMICUS", features_traits_1: [13, 19, 25, 29, 44], features_traits_2: [32, 50, 66], features_hard_1: [178, 196], features_hard_2: [336, 337, 338] },
    { id: 79, profileName: "MEDICORUM", features_traits_1: [15, 19, 25, 30, 42], features_traits_2: [34, 56, 62], features_hard_1: [179, 197], features_hard_2: [339, 340, 341] },
    { id: 80, profileName: "PEREGRINUS", features_traits_1: [15, 19, 25, 30, 45], features_traits_2: [35, 54, 61], features_hard_1: [180, 198], features_hard_2: [342, 343, 344] },
    { id: 81, profileName: "SECCION BILLINGUE - WSTĘPNY", features_traits_1: [13, 19, 25, 31, 46], features_traits_2: [34, 56, 67], features_hard_1: [181, 199], features_hard_2: [345, 346, 347] },
    { id: 82, profileName: "Liceum Ogólnokształcące - klasa sportowa", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [33, 55, 62], features_hard_1: [182, 200], features_hard_2: [348, 349, 350] },
    { id: 83, profileName: "Liceum Ogólnokształcące", features_traits_1: [10, 14, 18, 28, 42], features_traits_2: [36, 54, 67], features_hard_1: [183, 201], features_hard_2: [351, 352, 353] },
    { id: 84, profileName: "językowa z rozszerzonym językiem hiszpańskim i angielskim", features_traits_1: [12, 13, 15, 19, 25, 44], features_traits_2: [32, 50, 63], features_hard_1: [184, 202], features_hard_2: [354, 355, 356] },
    { id: 85, profileName: "kryminalistyczno - resocjalizacyjna z rozszerzeniem językowym", features_traits_1: [13, 19, 25, 31, 47], features_traits_2: [34, 57, 61], features_hard_1: [185, 203], features_hard_2: [357, 358, 359] },
    { id: 86, profileName: "psychologiczno - językowa", features_traits_1: [10, 14, 18, 28, 41], features_traits_2: [35, 50, 66], features_hard_1: [186, 204], features_hard_2: [360, 361, 362] },
    { id: 87, profileName: "sportowa z piłką nożną", features_traits_1: [12, 15, 25, 29, 46], features_traits_2: [36, 54, 62], features_hard_1: [187, 205], features_hard_2: [363, 364, 365] },
    { id: 88, profileName: "architektura i design z elementami nauczania outdoorowego", features_traits_1: [13, 19, 25, 29, 44], features_traits_2: [30, 56, 67], features_hard_1: [188, 206], features_hard_2: [366, 367, 368] },
    { id: 89, profileName: "projektowanie gier komputerowych z elementami sztucznej inteligencji", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [32, 55, 61], features_hard_1: [189, 207], features_hard_2: [369, 370, 371] },
    { id: 90, profileName: "teatralno-dziennikarska", features_traits_1: [10, 14, 18, 28, 47], features_traits_2: [35, 51, 63], features_hard_1: [190, 208], features_hard_2: [372, 373, 374] },
    { id: 91, profileName: "psychologiczno-językowa", features_traits_1: [10, 14, 18, 28, 44], features_traits_2: [36, 54, 67], features_hard_1: [191, 209], features_hard_2: [375, 376, 377] },
    { id: 92, profileName: "lingwistyczna", features_traits_1: [12, 13, 15, 19, 25, 41], features_traits_2: [33, 50, 64], features_hard_1: [192, 210], features_hard_2: [378, 379, 380] },
    { id: 93, profileName: "klasa psychologiczna - psychologia i resocjalizacja", features_traits_1: [10, 14, 18, 22, 42], features_traits_2: [34, 55, 61], features_hard_1: [193, 211], features_hard_2: [381, 382, 383] },
    { id: 94, profileName: "klasa prawna - kryminologia i resocjalizacja", features_traits_1: [10, 14, 18, 28, 46], features_traits_2: [37, 57, 67], features_hard_1: [194, 212], features_hard_2: [384, 385, 386] },
    { id: 95, profileName: "psychologiczno-pedagogiczna angielsko-hiszpańska", features_traits_1: [10, 14, 18, 28, 44], features_traits_2: [32, 50, 65], features_hard_1: [195, 213], features_hard_2: [387, 388, 389] },
    { id: 96, profileName: "psychologiczno-pedagogiczna angielsko-niemiecka", features_traits_1: [10, 14, 18, 28, 42], features_traits_2: [36, 54, 62], features_hard_1: [196, 214], features_hard_2: [390, 391, 392] },
    { id: 97, profileName: "sportowo-obronna", features_traits_1: [12, 15, 25, 29, 47], features_traits_2: [34, 56, 67], features_hard_1: [197, 215], features_hard_2: [393, 394, 395] },
    { id: 98, profileName: "policyjna", features_traits_1: [13, 19, 25, 30, 44], features_traits_2: [35, 50, 63], features_hard_1: [198, 216], features_hard_2: [396, 397, 398] },
    { id: 99, profileName: "Oddział Przygotowania Wojskowego OPW", features_traits_1: [15, 19, 25, 30, 42], features_traits_2: [32, 54, 61], features_hard_1: [199, 217], features_hard_2: [399, 400, 401] },
    { id: 100, profileName: "klasa kosmetyczna", features_traits_1: [12, 15, 25, 29, 46], features_traits_2: [36, 55, 67], features_hard_1: [200, 218], features_hard_2: [402, 403, 404] },
    { id: 101, profileName: "klasa strażacka", features_traits_1: [13, 19, 25, 31, 41], features_traits_2: [33, 50, 64], features_hard_1: [201, 219], features_hard_2: [405, 406, 407] },
    { id: 102, profileName: "terapeutyczny", features_traits_1: [10, 14, 18, 22, 44], features_traits_2: [34, 57, 62], features_hard_1: [202, 220], features_hard_2: [408, 409, 410] },
    { id: 103, profileName: "Dwujęzyczna Akademicka Klasa Ekonomiczno-Językowa", features_traits_1: [13, 19, 25, 31, 43], features_traits_2: [37, 56, 65], features_hard_1: [203, 221], features_hard_2: [411, 412, 413] },
    { id: 104, profileName: "Dwujęzyczna Patronacka Klasa Prawniczo-Psychologiczna z rozszerzoną historią", features_traits_1: [10, 14, 18, 28, 47], features_traits_2: [36, 54, 61], features_hard_1: [204, 222], features_hard_2: [414, 415, 416] },
    { id: 105, profileName: "Dwujęzyczna Patronacka Klasa Prawniczo-Psychologiczna z rozszerzoną wiedzą o społeczeństwie", features_traits_1: [10, 14, 18, 28, 42], features_traits_2: [34, 55, 67], features_hard_1: [205, 223], features_hard_2: [417, 418, 419] },
    { id: 106, profileName: "Dwujęzyczna Patronacka Klasa Medyczna", features_traits_1: [15, 19, 25, 30, 44], features_traits_2: [32, 56, 62], features_hard_1: [206, 224], features_hard_2: [420, 421, 422] },
    { id: 107, profileName: "Dwujęzyczna Patronacka Klasa Politechniczna z rozszerzoną chemią", features_traits_1: [12, 13, 15, 19, 25, 46], features_traits_2: [35, 50, 65], features_hard_1: [207, 225], features_hard_2: [423, 424, 425] },
    { id: 108, profileName: "Dwujęzyczna Patronacka Klasa Politechniczna z rozszerzoną fizyką", features_traits_1: [12, 13, 15, 19, 28, 47], features_traits_2: [34, 55, 67], features_hard_1: [208, 226], features_hard_2: [426, 427, 428] },
    { id: 109, profileName: "sportowy, piłka nożna 'Poznańska 13'", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [33, 56, 61], features_hard_1: [209, 227], features_hard_2: [429, 430, 431] },
    { id: 110, profileName: "mistrzostwa sportowego, kajaki", features_traits_1: [12, 15, 25, 30, 44], features_traits_2: [36, 50, 64], features_hard_1: [210, 228], features_hard_2: [432, 433, 434] },
    { id: 111, profileName: "mistrzostwa sportowego, hokej na trawie, siatkówka dziewcząt", features_traits_1: [12, 15, 25, 29, 42], features_traits_2: [34, 55, 67], features_hard_1: [211, 229], features_hard_2: [435, 436, 437] },
    { id: 112, profileName: "sportowy, koszykówka", features_traits_1: [12, 15, 25, 29, 46], features_traits_2: [35, 54, 61], features_hard_1: [212, 230], features_hard_2: [438, 439, 440] },
    { id: 113, profileName: "mistrzostwa sportowego, pływanie, pływanie synchroniczne, wioślarstwo, skoki do wody", features_traits_1: [12, 15, 25, 29, 44], features_traits_2: [32, 50, 63], features_hard_1: [213, 231], features_hard_2: [441, 442, 443] },
    { id: 114, profileName: "sportowy, sportowy, sztuki walki, piłka nożna dziewcząt 'Warta', piłka nożna 'Przemysław'", features_traits_1: [12, 15, 25, 29, 46], features_traits_2: [36, 55, 64], features_hard_1: [214, 232], features_hard_2: [444, 445, 446] },
    { id: 115, profileName: "Mistrzostwa Sportowego", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [33, 50, 67], features_hard_1: [215, 233], features_hard_2: [447, 448, 449] },
    { id: 116, profileName: "Sportowy", features_traits_1: [12, 15, 25, 29, 44], features_traits_2: [34, 56, 62], features_hard_1: [216, 234], features_hard_2: [450, 451, 452] },
    { id: 117, profileName: "oddział przygotowania wojskowego", features_traits_1: [15, 19, 25, 30, 45], features_traits_2: [35, 54, 61], features_hard_1: [217, 235], features_hard_2: [453, 454, 455] },
    { id: 118, profileName: "policyjna", features_traits_1: [13, 19, 25, 30, 46], features_traits_2: [36, 57, 64], features_hard_1: [218, 236], features_hard_2: [456, 457, 458] },
    { id: 119, profileName: "strażacko-ratownicza", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [34, 56, 65], features_hard_1: [219, 237], features_hard_2: [459, 460, 461] },
    { id: 120, profileName: "ogólnokształcąca", features_traits_1: [10, 14, 18, 28, 44], features_traits_2: [33, 55, 67], features_hard_1: [220, 238], features_hard_2: [462, 463, 464] },
    { id: 121, profileName: "Turystyczno - Językowy", features_traits_1: [12, 13, 15, 19, 25, 46], features_traits_2: [36, 54, 62], features_hard_1: [221, 239], features_hard_2: [465, 466, 467] },
    { id: 122, profileName: "humanistyczno-lingwistyczna", features_traits_1: [10, 14, 18, 28, 41], features_traits_2: [34, 57, 65], features_hard_1: [222, 240], features_hard_2: [468, 469, 470] },
    { id: 123, profileName: "policyjna", features_traits_1: [13, 19, 25, 30, 45], features_traits_2: [33, 55, 64], features_hard_1: [223, 241], features_hard_2: [471, 472, 473] },
    { id: 124, profileName: "Profil językowo - prawniczy", features_traits_1: [10, 14, 18, 28, 45], features_traits_2: [36, 56, 62], features_hard_1: [224, 242], features_hard_2: [474, 475, 476] },
    { id: 125, profileName: "Profil politechniczny", features_traits_1: [12, 13, 15, 19, 25, 46], features_traits_2: [34, 50, 67], features_hard_1: [225, 243], features_hard_2: [477, 478, 479] },
    { id: 126, profileName: "Profil medyczno - przyrodniczy", features_traits_1: [15, 19, 25, 30, 44], features_traits_2: [35, 54, 61], features_hard_1: [226, 244], features_hard_2: [480, 481, 482] },
    { id: 127, profileName: "HUMANISTYCZNO-DZIENNIKARSKA", features_traits_1: [10, 14, 18, 28, 41], features_traits_2: [33, 55, 62], features_hard_1: [227, 245], features_hard_2: [483, 484, 485] },
    { id: 128, profileName: "PRZYRODNICZA", features_traits_1: [15, 19, 25, 29, 42], features_traits_2: [34, 56, 65], features_hard_1: [228, 246], features_hard_2: [486, 487, 488] },
    { id: 129, profileName: "EKONOMICZNO-TURYSTYCZNA", features_traits_1: [13, 19, 25, 31, 42], features_traits_2: [33, 55, 67], features_hard_1: [229, 247], features_hard_2: [489, 490, 491] },
    { id: 130, profileName: "sportowa", features_traits_1: [12, 15, 25, 29, 44], features_traits_2: [36, 54, 62], features_hard_1: [230, 248], features_hard_2: [492, 493, 494] },
    { id: 131, profileName: "grupa ekonomiczna", features_traits_1: [13, 19, 25, 29, 41], features_traits_2: [34, 56, 63], features_hard_1: [231, 249], features_hard_2: [495, 496, 497] },
    { id: 132, profileName: "grupa biznesowa", features_traits_1: [13, 19, 25, 29, 44], features_traits_2: [36, 55, 65], features_hard_1: [232, 250], features_hard_2: [498, 499, 500] },
    { id: 133, profileName: "przyrodnicza", features_traits_1: [15, 19, 25, 29, 42], features_traits_2: [33, 50, 67], features_hard_1: [233, 251], features_hard_2: [501, 502, 503] },
    { id: 134, profileName: "liceum ogólnokształcące", features_traits_1: [10, 14, 18, 28, 44], features_traits_2: [34, 56, 62], features_hard_1: [234, 252], features_hard_2: [504, 505, 506] },
    { id: 135, profileName: "klasa dwujęzyczna z rozszerzonym j.polskim oraz biologią", features_traits_1: [15, 19, 25, 29, 44], features_traits_2: [35, 55, 64], features_hard_1: [235, 253], features_hard_2: [507, 508, 509] },
    { id: 136, profileName: "klasa dwujęzyczna z rozszerzoną matematyką i geografią", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [33, 56, 65], features_hard_1: [236, 254], features_hard_2: [510, 511, 512] },
    { id: 137, profileName: "Oddział Jeżyce", features_traits_1: [10, 14, 18, 28, 46], features_traits_2: [34, 57, 67], features_hard_1: [237, 255], features_hard_2: [513, 514, 515] },
    { id: 138, profileName: "Oddział Nieszawska", features_traits_1: [10, 14, 18, 28, 42], features_traits_2: [35, 50, 61], features_hard_1: [238, 256], features_hard_2: [516, 517, 518] },
    { id: 139, profileName: "klasa 1A", features_traits_1: [10, 14, 18, 28, 44], features_traits_2: [32, 54, 62], features_hard_1: [239, 257], features_hard_2: [519, 520, 521] },
    { id: 140, profileName: "klasa 1B", features_traits_1: [10, 14, 18, 28, 41], features_traits_2: [34, 56, 64], features_hard_1: [240, 258], features_hard_2: [522, 523, 524] },
    { id: 141, profileName: "klasa humanistyczna", features_traits_1: [10, 14, 18, 28, 35, 45], features_traits_2: [36, 55, 61], features_hard_1: [241, 259], features_hard_2: [525, 526, 527] },
    { id: 142, profileName: "politechniczna", features_traits_1: [12, 13, 15, 19, 25, 46], features_traits_2: [33, 57, 67], features_hard_1: [242, 260], features_hard_2: [528, 529, 530] },
    { id: 143, profileName: "medyczna", features_traits_1: [15, 19, 25, 30, 42], features_traits_2: [35, 50, 62], features_hard_1: [243, 261], features_hard_2: [531, 532, 533] },
    { id: 144, profileName: "mechanik samochodowy", features_traits_1: [12, 15, 25, 28, 44], features_traits_2: [34, 56, 61], features_hard_1: [244, 262], features_hard_2: [534, 535, 536] },
    { id: 145, profileName: "elektryk", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [33, 55, 65], features_hard_1: [245, 263], features_hard_2: [537, 538, 539] },
    { id: 146, profileName: "technik informatyk", features_traits_1: [12, 15, 25, 28, 46], features_traits_2: [34, 56, 62], features_hard_1: [246, 264], features_hard_2: [540, 541, 542] },
    { id: 147, profileName: "kucharz", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [35, 54, 64], features_hard_1: [247, 265], features_hard_2: [543, 544, 545] },
    { id: 148, profileName: "technik mechanik", features_traits_1: [12, 15, 25, 28, 44], features_traits_2: [33, 57, 67], features_hard_1: [248, 266], features_hard_2: [546, 547, 548] },
    { id: 149, profileName: "technik mechatronik", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [36, 55, 62], features_hard_1: [249, 267], features_hard_2: [549, 550, 551] },
    { id: 150, profileName: "technik elektryk", features_traits_1: [12, 15, 25, 29, 45], features_traits_2: [34, 56, 61], features_hard_1: [250, 268], features_hard_2: [552, 553, 554] },
    { id: 151, profileName: "technik energetyk", features_traits_1: [12, 15, 25, 28, 46], features_traits_2: [33, 55, 62], features_hard_1: [251, 269], features_hard_2: [555, 556, 557] },
    { id: 152, profileName: "technik żywienia i usług gastronomicznych", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [34, 57, 65], features_hard_1: [252, 270], features_hard_2: [558, 559, 560] },
    { id: 153, profileName: "cukiernik", features_traits_1: [12, 15, 25, 30, 44], features_traits_2: [33, 56, 67], features_hard_1: [253, 271], features_hard_2: [561, 562, 563] },
    { id: 154, profileName: "kelner", features_traits_1: [12, 15, 25, 28, 41], features_traits_2: [34, 55, 62], features_hard_1: [254, 272], features_hard_2: [564, 565, 566] },
    { id: 155, profileName: "technik budownictwa", features_traits_1: [12, 15, 25, 28, 46], features_traits_2: [36, 57, 65], features_hard_1: [255, 273], features_hard_2: [567, 568, 569] },
    { id: 156, profileName: "technik architektury krajobrazu", features_traits_1: [12, 15, 25, 29, 42], features_traits_2: [33, 54, 67], features_hard_1: [256, 274], features_hard_2: [570, 571, 572] },
    { id: 157, profileName: "technik geodeta", features_traits_1: [12, 15, 25, 29, 44], features_traits_2: [35, 56, 61], features_hard_1: [257, 275], features_hard_2: [573, 574, 575] },
    { id: 158, profileName: "technik robót wykończeniowych w budownictwie", features_traits_1: [12, 15, 25, 29, 45], features_traits_2: [34, 55, 66], features_hard_1: [258, 276], features_hard_2: [576, 577, 578] },
    { id: 159, profileName: "technik elektronik", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [36, 57, 65], features_hard_1: [259, 277], features_hard_2: [579, 580, 581] },
    { id: 160, profileName: "technik teleinformatyk", features_traits_1: [12, 15, 25, 30, 44], features_traits_2: [35, 54, 62], features_hard_1: [260, 278], features_hard_2: [582, 583, 584] },
    { id: 161, profileName: "technik programista", features_traits_1: [12, 15, 25, 29, 46], features_traits_2: [33, 56, 67], features_hard_1: [261, 279], features_hard_2: [585, 586, 587] },
    { id: 162, profileName: "technik grafiki i poligrafii cyfrowej", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [36, 55, 61], features_hard_1: [262, 280], features_hard_2: [588, 589, 590] },
    { id: 163, profileName: "krawiec", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [34, 57, 65], features_hard_1: [263, 281], features_hard_2: [591, 592, 593] },
    { id: 164, profileName: "technik przemysłu mody", features_traits_1: [12, 15, 25, 29, 44], features_traits_2: [33, 54, 67], features_hard_1: [264, 282], features_hard_2: [594, 595, 596] },
    { id: 165, profileName: "technik technologii odzieży", features_traits_1: [12, 15, 25, 28, 46], features_traits_2: [36, 55, 62], features_hard_1: [265, 283], features_hard_2: [597, 598, 599] },
    { id: 166, profileName: "technik usług fryzjerskich", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [34, 57, 64], features_hard_1: [266, 284], features_hard_2: [600, 601, 602] },
    { id: 167, profileName: "technik analityk", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [33, 56, 65], features_hard_1: [267, 285], features_hard_2: [603, 604, 605] },
    { id: 168, profileName: "technik ochrony środowiska", features_traits_1: [12, 15, 25, 29, 46], features_traits_2: [36, 54, 67], features_hard_1: [268, 286], features_hard_2: [606, 607, 608] },
    { id: 169, profileName: "technik technologii chemicznej", features_traits_1: [12, 15, 25, 29, 44], features_traits_2: [34, 56, 65], features_hard_1: [269, 287], features_hard_2: [609, 610, 611] },
    { id: 170, profileName: "technik laboratoriów chemicznych", features_traits_1: [12, 15, 25, 28, 42], features_traits_2: [33, 57, 67], features_hard_1: [270, 288], features_hard_2: [612, 613, 614] },
    { id: 171, profileName: "technik ekonomista", features_traits_1: [12, 13, 15, 19, 25, 44], features_traits_2: [34, 54, 62], features_hard_1: [271, 289], features_hard_2: [615, 616, 617] },
    { id: 172, profileName: "technik rachunkowości", features_traits_1: [12, 15, 25, 29, 41], features_traits_2: [33, 56, 65], features_hard_1: [272, 290], features_hard_2: [618, 619, 620] },
    { id: 173, profileName: "technik handlowiec", features_traits_1: [12, 15, 25, 29, 44], features_traits_2: [36, 54, 61], features_hard_1: [273, 291], features_hard_2: [621, 622, 623] },
    { id: 174, profileName: "technik logistyk", features_traits_1: [12, 15, 25, 31, 43], features_traits_2: [30, 50, 65], features_hard_1: [274, 292], features_hard_2: [624, 625, 626] }
]


  
export const schools = [
    {
        id: 1,
        schoolName: "Liceum Ogólnokształcące św. Marii Magdaleny",
        profiles: [1, 2, 3, 4],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 2,
        schoolName: "I Liceum Ogólnokształcące im. Karola Marcinkowskiego w ZSO Nr 1",
        profiles: [5, 6, 7, 8, 9, 10, 11],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 3,
        schoolName: "II Liceum Ogólnokształcące im. Generałowej Zamoyskiej i Heleny Modrzejewskiej",
        profiles: [12, 13, 14, 15, 16],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 4,
        schoolName: "III Liceum Ogólnokształcące im. św. Jana Kantego",
        profiles: [17, 18, 19, 20],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 5,
        schoolName: "IV Liceum Ogólnokształcące im. Komisji Edukacji Narodowej",
        profiles: [21, 22, 23, 24],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 6,
        schoolName: "V Liceum Ogólnokształcące im. Klaudyny Potockiej",
        profiles: [25, 26, 27, 28, 29],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 7,
        schoolName: "VI Liceum Ogólnokształcące w ZSO Nr 7",
        profiles: [30, 31, 32, 33],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 8,
        schoolName: "VII Liceum Ogólnokształcące im. Dąbrówki",
        profiles: [34, 35, 36, 37, 38],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 9,
        schoolName: "VIII Liceum Ogólnokształcące im. Adama Mickiewicza",
        profiles: [39, 40, 41, 42],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 10,
        schoolName: "IX Liceum Ogólnokształcące im. Karola Libelta",
        profiles: [43, 44, 45, 46],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 11,
        schoolName: "X Liceum Ogólnokształcące w ZSO nr 8",
        profiles: [47, 48, 49, 50],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 12,
        schoolName: "XI Liceum Ogólnokształcące im. Jadwigi i Wacława Zembrzuskich",
        profiles: [51, 52, 53, 54],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 13,
        schoolName: "XII Liceum Ogólnokształcące im. Marie Skłodowskiej - Curie",
        profiles: [55, 56, 57, 58, 59],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 14,
        schoolName: "XIV Liceum Ogólnokształcące im. Kazimierza Wielkiego",
        profiles: [60, 61, 62, 63],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 15,
        schoolName: "XV Liceum Ogólnokształcące im. prof. Wiktora Degi",
        profiles: [64, 65, 66, 67, 68, 69, 70],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 16,
        schoolName: "XVI Liceum Ogólnokształcące w ZSO Nr 2",
        profiles: [71, 72, 73, 74],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 17,
        schoolName: "XVII Liceum Ogólnokształcące w ZSO Nr 4",
        profiles: [75, 76, 77, 78, 79, 80, 81],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 18,
        schoolName: "XVIII Liceum Ogólnokształcące",
        profiles: [82, 83],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 19,
        schoolName: "XX Liceum Ogólnokształcące",
        profiles: [84, 85, 86, 87],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 20,
        schoolName: "XXI Liceum Ogólnokształcące",
        profiles: [88, 89],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 21,
        schoolName: "XXV Liceum Ogólnokształcące im. Generałowej Jadwigi Zamoyskiej w Poznaniu",
        profiles: [90, 70, 91, 92],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 22,
        schoolName: "XXVIII Liceum Ogólnokształcące",
        profiles: [93, 94],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 23,
        schoolName: "XXIX Liceum Ogólnokształcące",
        profiles: [95, 96, 97, 98, 99],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 24,
        schoolName: "XXXI Liceum Ogólnokształcące",
        profiles: [100, 98, 101],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 25,
        schoolName: "XXXVII Liceum Ogólnokształcące z Oddziałami Terapeutycznymi im. Jana Pawła II",
        profiles: [102],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 26,
        schoolName: "XXXVIII Dwujęzyczne Liceum Ogólnokształcące",
        profiles: [103, 104, 105, 106, 107, 108],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 27,
        schoolName: "Liceum Ogólnokształcące Mistrzostwa Sportowego",
        profiles: [109, 110, 111, 112, 113, 114],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 28,
        schoolName: "Sportowe Liceum Ogólnokształcące",
        profiles: [115, 116],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 29,
        schoolName: "Liceum Ogólnokształcące w ZS w Bolechowie",
        profiles: [117, 118, 119, 120],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 30,
        schoolName: "Liceum Ogólnokształcące w Zespole Szkół im. Konstytucji 3 Maja w Pobiedziskach Letnisku",
        profiles: [121],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 31,
        schoolName: "II Liceum Ogólnokształcące im. Tadeusza Staniewskiego w Swarzędzu",
        profiles: [122, 32, 70, 123],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 32,
        schoolName: "Liceum Ogólnokształcące im. Powstańców Wielkopolskich w Tarnowie Podgórnym",
        profiles: [124, 125, 126],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 33,
        schoolName: "Liceum Ogólnokształcące im. Generałowej Jadwigi Zamoyskiej w Kórniku",
        profiles: [127, 128, 129],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 34,
        schoolName: "Liceum Ogólnokształcące im. Mikołaja Kopernika w Puszczykowie",
        profiles: [130, 1, 131, 132, 133],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 35,
        schoolName: "Liceum Ogólnokształcące w Rokietnicy",
        profiles: [134],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 36,
        schoolName: "Dwujęzyczne Liceum Ogólnokształcące w Luboniu",
        profiles: [135, 136],
        city: "Gdańsk",
        label: "High School"
    },
    {
        id: 37,
        schoolName: "Publiczne Liceum Ogólnokształcące im. Romka Strzałkowskiego",
        profiles: [137, 138],
        city: "Warszawa",
        label: "High School"
    },
    {
        id: 38,
        schoolName: "Liceum Ogólnokształcące im. Romka Strzałkowskiego w Suchym Lesie",
        profiles: [139, 140],
        city: "Kraków",
        label: "High School"
    },
    {
        id: 39,
        schoolName: "Publiczne Liceum Ogólnokształcące Zakonu Pijarów im. św. Józefa Kalasancjusza w Poznaniu",
        profiles: [1, 28, 25],
        city: "Poznań",
        label: "High School"
    },
    {
        id: 40,
        schoolName: "Zespół Szkół Zawodowych Nr 1",
        profiles: [144, 145, 146, 147],
        city: "Warszawa",
        label: "Vocational School"
    },
    {
        id: 41,
        schoolName: "Technikum Mechaniczne",
        profiles: [148, 149, 150, 151],
        city: "Kraków",
        label: "Technical School"
    },
    {
        id: 42,
        schoolName: "Zespół Szkół Gastronomicznych",
        profiles: [147, 152, 153, 154],
        city: "Poznań",
        label: "Vocational School"
    },
    {
        id: 43,
        schoolName: "Technikum Budowlane",
        profiles: [155, 156, 157, 158],
        city: "Gdańsk",
        label: "Technical School"
    },
    {
        id: 44,
        schoolName: "Zespół Szkół Elektronicznych",
        profiles: [159, 160, 146, 161],
        city: "Warszawa",
        label: "Vocational School"
    },
    {
        id: 45,
        schoolName: "Technikum Informatyczne",
        profiles: [146, 161, 160, 162],
        city: "Kraków",
        label: "Technical School"
    },
    {
        id: 46,
        schoolName: "Zespół Szkół Odzieżowych",
        profiles: [163, 164, 165, 166],
        city: "Poznań",
        label: "Vocational School"
    },
    {
        id: 47,
        schoolName: "Technikum Elektryczne",
        profiles: [150, 151, 159, 149],
        city: "Gdańsk",
        label: "Technical School"
    },
    {
        id: 48,
        schoolName: "Zespół Szkół Chemicznych",
        profiles: [167, 168, 169, 170],
        city: "Warszawa",
        label: "Vocational School"
    },
    {
        id: 49,
        schoolName: "Technikum Ekonomiczne",
        profiles: [171, 172, 173, 174],
        city: "Kraków",
        label: "Technical School"
    }
];

export const traits = [
    { name: "Inteligentny", id: 1, popularity: 0 },
    { name: "Kreatywny", id: 2, popularity: 0 },
    { name: "Pracowity", id: 3, popularity: 0 },
    { name: "Gracz zespołowy", id: 4, popularity: 0 },
    { name: "Zorganizowany", id: 5, popularity: 0 },
    { name: "Punktualny", id: 6, popularity: 0 },
    { name: "Elastyczny", id: 7, popularity: 0 },
    { name: "Niezawodny", id: 8, popularity: 0 },
    { name: "Lider", id: 9, popularity: 0 },
    { name: "Przyjazny", id: 10, popularity: 0 },
    { name: "Zmotywowany", id: 11, popularity: 0 },
    { name: "Wydajny", id: 12, popularity: 0 },
    { name: "Ambitny", id: 13, popularity: 0 },
    { name: "Komunikatywny", id: 14, popularity: 0 },
    { name: "Cierpliwy", id: 15, popularity: 0 },
    { name: "Dokładny", id: 16, popularity: 0 },
    { name: "Odpowiedzialny", id: 17, popularity: 0 },
    { name: "Uczciwy", id: 18, popularity: 0 },
    { name: "Innowacyjny", id: 19, popularity: 0 },
    { name: "Przystosowujący się", id: 20, popularity: 0 },
    { name: "Proaktywny", id: 21, popularity: 0 },
    { name: "Empatyczny", id: 22, popularity: 0 },
    { name: "Zdeterminowany", id: 23, popularity: 0 },
    { name: "Samodzielny", id: 24, popularity: 0 },
    { name: "Analityczny", id: 25, popularity: 0 },
    { name: "Sumienny", id: 26, popularity: 0 },
    { name: "Uważny", id: 27, popularity: 0 },
    { name: "Inspirujący", id: 28, popularity: 0 },
    { name: "Zrównoważony", id: 29, popularity: 0 },
    { name: "Zorganizowany", id: 30, popularity: 0 },
    { name: "Spostrzegawczy", id: 31, popularity: 0 },
    { name: "Entuzjastyczny", id: 32, popularity: 0 },
    { name: "Przewidujący", id: 33, popularity: 0 },
    { name: "Zdolny do negocjacji", id: 34, popularity: 0 },
    { name: "Opanowany", id: 35, popularity: 0 },
    { name: "Kulturalny", id: 36, popularity: 0 },
    { name: "Techniczny", id: 37, popularity: 0 },
    { name: "Kreatywny myśliciel", id: 38, popularity: 0 },
    { name: "Dyplomatyczny", id: 39, popularity: 0 },
    { name: "Otwartość umysłu", id: 40, popularity: 0 },
    { name: "Zorientowany na szczegóły", id: 41, popularity: 0 },
    { name: "Skrupulatny", id: 42, popularity: 0 },
    { name: "Lojalny", id: 43, popularity: 0 },
    { name: "Optymistyczny", id: 44, popularity: 0 },
    { name: "Systematyczny", id: 45, popularity: 0 },
    { name: "Wszechstronny", id: 46, popularity: 0 },
    { name: "Wspierający", id: 47, popularity: 0 },
    { name: "Perswazyjny", id: 48, popularity: 0 },
    { name: "Rzetelny", id: 49, popularity: 0 },
    { name: "Zdolny do pracy pod presją", id: 50, popularity: 0 },
    { name: "Zaradny", id: 51, popularity: 0 },
    { name: "Zdolności przywódcze", id: 52, popularity: 0 },
    { name: "Zorientowany na klienta", id: 53, popularity: 0 },
    { name: "Zdolny do multitaskingu", id: 54, popularity: 0 },
    { name: "Przewidywalny", id: 55, popularity: 0 },
    { name: "Elokwentny", id: 56, popularity: 0 },
    { name: "Zdolny do nauki", id: 57, popularity: 0 },
    { name: "Inicjatywny", id: 58, popularity: 0 },
    { name: "Oszczędny", id: 59, popularity: 0 },
    { name: "Skuteczny komunikator", id: 60, popularity: 0 },
    { name: "Entuzjasta technologii", id: 61, popularity: 0 },
    { name: "Zorientowany na cel", id: 62, popularity: 0 },
    { name: "Zaufany", id: 63, popularity: 0 },
    { name: "Adaptacyjny", id: 64, popularity: 0 },
    { name: "Strategiczny", id: 65, popularity: 0 },
    { name: "Proaktywny", id: 66, popularity: 0 },
    { name: "Zdeterminowany", id: 67, popularity: 0 },
    { name: "Kompetentny", id: 68, popularity: 0 },
    { name: "Inspirowany", id: 69, popularity: 0 },
    { name: "Dyskrytny", id: 70, popularity: 0 },
    { name: "Zrównoważony", id: 71, popularity: 0 },
    { name: "Przywódczy", id: 72, popularity: 0 },
    { name: "Uczciwy", id: 73, popularity: 0 },
    { name: "Cierpliwy", id: 74, popularity: 0 },
    { name: "Odpowiedzialny", id: 75, popularity: 0 },
    { name: "Zorientowany na ludzi", id: 76, popularity: 0 },
    { name: "Lojalny", id: 77, popularity: 0 },
    { name: "Sumienny", id: 78, popularity: 0 },
    { name: "Empatyczny", id: 79, popularity: 0 },
    { name: "Przystosowujący się", id: 80, popularity: 0 },
    { name: "Proaktywny", id: 81, popularity: 0 },
    { name: "Ambitny", id: 82, popularity: 0 },
    { name: "Innowacyjny", id: 83, popularity: 0 },
    { name: "Komunikatywny", id: 84, popularity: 0 },
    { name: "Kreatywny", id: 85, popularity: 0 },
    { name: "Pracowity", id: 86, popularity: 0 },
    { name: "Gracz zespołowy", id: 87, popularity: 0 },
    { name: "Organizowany", id: 88, popularity: 0 },
    { name: "Punktualny", id: 89, popularity: 0 },
    { name: "Elastyczny", id: 90, popularity: 0 },
    { name: "Niezawodny", id: 91, popularity: 0 },
    { name: "Lider", id: 92, popularity: 0 },
    { name: "Przyjazny", id: 93, popularity: 0 },
    { name: "Zmotywowany", id: 94, popularity: 0 },
    { name: "Wydajny", id: 95, popularity: 0 },
    { name: "Ambitny", id: 96, popularity: 0 },
    { name: "Komunikatywny", id: 97, popularity: 0 },
    { name: "Cierpliwy", id: 98, popularity: 0 },
    { name: "Dokładny", id: 99, popularity: 0 },
    { name: "Odpowiedzialny", id: 100, popularity: 0 },
    { name: "Uprzejmy", id: 101, popularity: 0 },
    { name: "Opanowany", id: 102, popularity: 0 },
    { name: "Zdyscyplinowany", id: 103, popularity: 0 },
    { name: "Kreatywny", id: 104, popularity: 0 },
    { name: "Pewny siebie", id: 105, popularity: 0 },
    { name: "Asertywny", id: 106, popularity: 0 },
    { name: "Spontaniczny", id: 107, popularity: 0 },
    { name: "Wytrwały", id: 108, popularity: 0 },
    { name: "Przemyślany", id: 109, popularity: 0 },
    { name: "Elokwentny", id: 110, popularity: 0 },
    { name: "Zorientowany na detale", id: 111, popularity: 0 },
    { name: "Lojalny", id: 112, popularity: 0 },
    { name: "Zorientowany na zespół", id: 113, popularity: 0 },
    { name: "Kulturalny", id: 114, popularity: 0 },
    { name: "Zrównoważony", id: 115, popularity: 0 },
    { name: "Sprawiedliwy", id: 116, popularity: 0 },
    { name: "Charyzmatyczny", id: 117, popularity: 0 },
    { name: "Zmotywowany", id: 118, popularity: 0 },
    { name: "Rzetelny", id: 119, popularity: 0 },
    { name: "Tolerancyjny", id: 120, popularity: 0 },
    { name: "Zaufany", id: 121, popularity: 0 },
    { name: "Lider zespołu", id: 122, popularity: 0 },
    { name: "Dyplomatyczny", id: 123, popularity: 0 },
    { name: "Zorganizowany", id: 124, popularity: 0 },
    { name: "Skrupulatny", id: 125, popularity: 0 },
    { name: "Dyskrytny", id: 126, popularity: 0 },
    { name: "Elastyczny", id: 127, popularity: 0 },
    { name: "Wydajny", id: 128, popularity: 0 },
    { name: "Przyjazny", id: 129, popularity: 0 },
    { name: "Ambitny", id: 130, popularity: 0 },
    { name: "Zmotywowany", id: 131, popularity: 0 },
    { name: "Komunikatywny", id: 132, popularity: 0 },
    { name: "Entuzjastyczny", id: 133, popularity: 0 },
    { name: "Cierpliwy", id: 134, popularity: 0 },
    { name: "Dokładny", id: 135, popularity: 0 },
    { name: "Odpowiedzialny", id: 136, popularity: 0 },
    { name: "Uczciwy", id: 137, popularity: 0 },
    { name: "Innowacyjny", id: 138, popularity: 0 },
    { name: "Proaktywny", id: 139, popularity: 0 },
    { name: "Empatyczny", id: 140, popularity: 0 },
    { name: "Zdeterminowany", id: 141, popularity: 0 },
    { name: "Samodzielny", id: 142, popularity: 0 },
    { name: "Sumienny", id: 143, popularity: 0 },
    { name: "Uważny", id: 144, popularity: 0 },
    { name: "Inspirujący", id: 145, popularity: 0 },
    { name: "Zrównoważony", id: 146, popularity: 0 },
    { name: "Spostrzegawczy", id: 147, popularity: 0 },
    { name: "Przewidujący", id: 148, popularity: 0 },
    { name: "Zdolny do negocjacji", id: 149, popularity: 0 },
    { name: "Opanowany", id: 150, popularity: 0 },
    { name: "Kulturalny", id: 151, popularity: 0 },
    { name: "Techniczny", id: 152, popularity: 0 },
    { name: "Kreatywny myśliciel", id: 153, popularity: 0 },
    { name: "Dyplomatyczny", id: 154, popularity: 0 },
    { name: "Otwartość umysłu", id: 155, popularity: 0 },
    { name: "Zorientowany na szczegóły", id: 156, popularity: 0 },
    { name: "Skrupulatny", id: 157, popularity: 0 },
    { name: "Lojalny", id: 158, popularity: 0 },
    { name: "Optymistyczny", id: 159, popularity: 0 },
    { name: "Systematyczny", id: 160, popularity: 0 },
    { name: "Wszechstronny", id: 161, popularity: 0 },
    { name: "Wspierający", id: 162, popularity: 0 },
    { name: "Perswazyjny", id: 163, popularity: 0 },
    { name: "Rzetelny", id: 164, popularity: 0 },
    { name: "Zdolny do pracy pod presją", id: 165, popularity: 0 },
    { name: "Zaradny", id: 166, popularity: 0 },
    { name: "Zdolności przywódcze", id: 167, popularity: 0 },
    { name: "Zorientowany na klienta", id: 168, popularity: 0 },
    { name: "Zdolny do multitaskingu", id: 169, popularity: 0 },
    { name: "Przewidywalny", id: 170, popularity: 0 },
    { name: "Elokwentny", id: 171, popularity: 0 },
    { name: "Zdolny do nauki", id: 172, popularity: 0 },
    { name: "Inicjatywny", id: 173, popularity: 0 },
    { name: "Oszczędny", id: 174, popularity: 0 },
    { name: "Skuteczny komunikator", id: 175, popularity: 0 },
    { name: "Entuzjasta technologii", id: 176, popularity: 0 },
    { name: "Zorientowany na cel", id: 177, popularity: 0 },
    { name: "Zaufany", id: 178, popularity: 0 },
    { name: "Adaptacyjny", id: 179, popularity: 0 },
    { name: "Strategiczny", id: 180, popularity: 0 },
    { name: "Proaktywny", id: 181, popularity: 0 },
    { name: "Zdeterminowany", id: 182, popularity: 0 },
    { name: "Kompetentny", id: 183, popularity: 0 },
    { name: "Inspirowany", id: 184, popularity: 0 },
    { name: "Dyskrytny", id: 185, popularity: 0 },
    { name: "Zrównoważony", id: 186, popularity: 0 },
    { name: "Przywódczy", id: 187, popularity: 0 },
    { name: "Uczciwy", id: 188, popularity: 0 },
    { name: "Cierpliwy", id: 189, popularity: 0 },
    { name: "Odpowiedzialny", id: 190, popularity: 0 },
    { name: "Zorientowany na ludzi", id: 191, popularity: 0 },
    { name: "Lojalny", id: 192, popularity: 0 },
    { name: "Sumienny", id: 193, popularity: 0 },
    { name: "Empatyczny", id: 194, popularity: 0 },
    { name: "Przystosowujący się", id: 195, popularity: 0 },
    { name: "Proaktywny", id: 196, popularity: 0 },
    { name: "Ambitny", id: 197, popularity: 0 },
    { name: "Innowacyjny", id: 198, popularity: 0 },
    { name: "Komunikatywny", id: 199, popularity: 0 },
    { name: "Kreatywny", id: 200, popularity: 0 },
];

export const hardSkills = [
    { name: "Programowanie w Java", id: 1, popularity: 0 },
    { name: "Analiza danych", id: 2, popularity: 0 },
    { name: "Zarządzanie projektami", id: 3, popularity: 0 },
    { name: "Znajomość SQL", id: 4, popularity: 0 },
    { name: "Tworzenie stron internetowych", id: 5, popularity: 0 },
    { name: "Obsługa systemów ERP", id: 6, popularity: 0 },
    { name: "Testowanie oprogramowania", id: 7, popularity: 0 },
    { name: "Tworzenie aplikacji mobilnych", id: 8, popularity: 0 },
    { name: "Zarządzanie bazami danych", id: 9, popularity: 0 },
    { name: "Projektowanie graficzne", id: 10, popularity: 0 },
    { name: "Znajomość języka Python", id: 11, popularity: 0 },
    { name: "Tworzenie interfejsów użytkownika", id: 12, popularity: 0 },
    { name: "Administrowanie systemami operacyjnymi", id: 13, popularity: 0 },
    { name: "Inżynieria oprogramowania", id: 14, popularity: 0 },
    { name: "Znajomość JavaScript", id: 15, popularity: 0 },
    { name: "Tworzenie raportów", id: 16, popularity: 0 },
    { name: "Zarządzanie kampaniami marketingowymi", id: 17, popularity: 0 },
    { name: "Znajomość narzędzi DevOps", id: 18, popularity: 0 },
    { name: "Obsługa programu Excel", id: 19, popularity: 0 },
    { name: "Projektowanie systemów", id: 20, popularity: 0 },
    { name: "Modelowanie procesów biznesowych", id: 21, popularity: 0 },
    { name: "Znajomość języka C#", id: 22, popularity: 0 },
    { name: "Analiza finansowa", id: 23, popularity: 0 },
    { name: "Znajomość systemów CRM", id: 24, popularity: 0 },
    { name: "Znajomość narzędzi analitycznych", id: 25, popularity: 0 },
    { name: "Znajomość technologii chmurowych", id: 26, popularity: 0 },
    { name: "Programowanie w języku R", id: 27, popularity: 0 },
    { name: "Automatyzacja testów", id: 28, popularity: 0 },
    { name: "Obsługa oprogramowania CAD", id: 29, popularity: 0 },
    { name: "Znajomość języka PHP", id: 30, popularity: 0 },
    { name: "Zarządzanie zespołami", id: 31, popularity: 0 },
    { name: "Tworzenie treści SEO", id: 32, popularity: 0 },
    { name: "Znajomość narzędzi BI", id: 33, popularity: 0 },
    { name: "Znajomość języka Swift", id: 34, popularity: 0 },
    { name: "Znajomość języka Kotlin", id: 35, popularity: 0 },
    { name: "Znajomość języka Ruby", id: 36, popularity: 0 },
    { name: "Tworzenie i zarządzanie API", id: 37, popularity: 0 },
    { name: "Znajomość narzędzi CI/CD", id: 38, popularity: 0 },
    { name: "Znajomość narzędzi monitorujących", id: 39, popularity: 0 },
    { name: "Analiza ryzyka", id: 40, popularity: 0 },
    { name: "Zarządzanie bezpieczeństwem", id: 41, popularity: 0 },
    { name: "Znajomość systemów SIEM", id: 42, popularity: 0 },
    { name: "Tworzenie aplikacji desktopowych", id: 43, popularity: 0 },
    { name: "Programowanie w C++", id: 44, popularity: 0 },
    { name: "Programowanie w Go", id: 45, popularity: 0 },
    { name: "Projektowanie UX", id: 46, popularity: 0 },
    { name: "Znajomość blockchain", id: 47, popularity: 0 },
    { name: "Tworzenie gier", id: 48, popularity: 0 },
    { name: "Znajomość Arduino", id: 49, popularity: 0 },
    { name: "Tworzenie chatbotów", id: 50, popularity: 0 },
    { name: "Znajomość ROS", id: 51, popularity: 0 },
    { name: "Tworzenie VR/AR", id: 52, popularity: 0 },
    { name: "Znajomość MATLAB", id: 53, popularity: 0 },
    { name: "Znajomość AutoCAD", id: 54, popularity: 0 },
    { name: "Znajomość SolidWorks", id: 55, popularity: 0 },
    { name: "Znajomość systemów SCADA", id: 56, popularity: 0 },
    { name: "Tworzenie serwisów IoT", id: 57, popularity: 0 },
    { name: "Programowanie FPGA", id: 58, popularity: 0 },
    { name: "Tworzenie systemów wbudowanych", id: 59, popularity: 0 },
    { name: "Zarządzanie wersjami", id: 60, popularity: 0 },
    { name: "Testowanie jednostkowe", id: 61, popularity: 0 },
    { name: "Programowanie w Haskell", id: 62, popularity: 0 },
    { name: "Znajomość AWS", id: 63, popularity: 0 },
    { name: "Znajomość Azure", id: 64, popularity: 0 },
    { name: "Znajomość GCP", id: 65, popularity: 0 },
    { name: "Tworzenie microservices", id: 66, popularity: 0 },
    { name: "Programowanie w Rust", id: 67, popularity: 0 },
    { name: "Znajomość TensorFlow", id: 68, popularity: 0 },
    { name: "Znajomość PyTorch", id: 69, popularity: 0 },
    { name: "Tworzenie modeli ML", id: 70, popularity: 0 },
    { name: "Tworzenie modeli AI", id: 71, popularity: 0 },
    { name: "Znajomość Keras", id: 72, popularity: 0 },
    { name: "Znajomość Docker", id: 73, popularity: 0 },
    { name: "Znajomość Kubernetes", id: 74, popularity: 0 },
    { name: "Znajomość Jenkins", id: 75, popularity: 0 },
    { name: "Znajomość Ansible", id: 76, popularity: 0 },
    { name: "Znajomość Puppet", id: 77, popularity: 0 },
    { name: "Znajomość Chef", id: 78, popularity: 0 },
    { name: "Znajomość Nagios", id: 79, popularity: 0 },
    { name: "Znajomość Prometheus", id: 80, popularity: 0 },
    { name: "Znajomość Grafana", id: 81, popularity: 0 },
    { name: "Tworzenie sieci neuronowych", id: 82, popularity: 0 },
    { name: "Tworzenie chatbotów AI", id: 83, popularity: 0 },
    { name: "Znajomość OpenCV", id: 84, popularity: 0 },
    { name: "Tworzenie aplikacji IoT", id: 85, popularity: 0 },
    { name: "Programowanie w Julia", id: 86, popularity: 0 },
    { name: "Znajomość Flask", id: 87, popularity: 0 },
    { name: "Znajomość Django", id: 88, popularity: 0 },
    { name: "Znajomość React", id: 89, popularity: 0 },
    { name: "Znajomość Angular", id: 90, popularity: 0 },
    { name: "Znajomość Vue", id: 91, popularity: 0 },
    { name: "Tworzenie Progressive Web Apps", id: 92, popularity: 0 },
    { name: "Tworzenie aplikacji desktopowych", id: 93, popularity: 0 },
    { name: "Programowanie w Fortran", id: 94, popularity: 0 },
    { name: "Programowanie w COBOL", id: 95, popularity: 0 },
    { name: "Znajomość języka Perl", id: 96, popularity: 0 },
    { name: "Znajomość języka Lisp", id: 97, popularity: 0 },
    { name: "Programowanie w Scheme", id: 98, popularity: 0 },
    { name: "Znajomość języka Groovy", id: 99, popularity: 0 },
    { name: "Tworzenie aplikacji blockchain", id: 100, popularity: 0 },
    { name: "Pisanie dokumentacji technicznej", id: 101, popularity: 0 },
    { name: "Obsługa pakietu Microsoft Office", id: 102, popularity: 0 },
    { name: "Zarządzanie harmonogramami", id: 103, popularity: 0 },
    { name: "Zarządzanie korespondencją", id: 104, popularity: 0 },
    { name: "Prowadzenie prezentacji", id: 105, popularity: 0 },
    { name: "Obsługa oprogramowania do zarządzania zadaniami", id: 106, popularity: 0 },
    { name: "Prowadzenie spotkań", id: 107, popularity: 0 },
    { name: "Zarządzanie czasem", id: 108, popularity: 0 },
    { name: "Tworzenie budżetów", id: 109, popularity: 0 },
    { name: "Analiza danych finansowych", id: 110, popularity: 0 },
    { name: "Tworzenie ofert handlowych", id: 111, popularity: 0 },
    { name: "Zarządzanie relacjami z klientami", id: 112, popularity: 0 },
    { name: "Tworzenie planów marketingowych", id: 113, popularity: 0 },
    { name: "Negocjacje", id: 114, popularity: 0 },
    { name: "Prowadzenie rozmów rekrutacyjnych", id: 115, popularity: 0 },
    { name: "Znajomość przepisów BHP", id: 116, popularity: 0 },
    { name: "Organizacja wydarzeń", id: 117, popularity: 0 },
    { name: "Tworzenie umów", id: 118, popularity: 0 },
    { name: "Prowadzenie szkoleń", id: 119, popularity: 0 },
    { name: "Tworzenie kampanii reklamowych", id: 120, popularity: 0 },
    { name: "Znajomość systemów zarządzania treścią", id: 121, popularity: 0 },
    { name: "Obsługa systemów księgowych", id: 122, popularity: 0 },
    { name: "Znajomość procedur importowych/eksportowych", id: 123, popularity: 0 },
    { name: "Tworzenie strategii sprzedażowych", id: 124, popularity: 0 },
    { name: "Prowadzenie analiz rynkowych", id: 125, popularity: 0 },
    { name: "Znajomość narzędzi do analizy danych", id: 126, popularity: 0 },
    { name: "Obsługa klienta", id: 127, popularity: 0 },
    { name: "Zarządzanie zespołem", id: 128, popularity: 0 },
    { name: "Tworzenie prezentacji multimedialnych", id: 129, popularity: 0 },
    { name: "Obsługa systemów CRM", id: 130, popularity: 0 },
    { name: "Tworzenie planów biznesowych", id: 131, popularity: 0 },
    { name: "Znajomość narzędzi do zarządzania projektami", id: 132, popularity: 0 },
    { name: "Zarządzanie kosztami", id: 133, popularity: 0 },
    { name: "Tworzenie strategii HR", id: 134, popularity: 0 },
    { name: "Znajomość procedur prawnych", id: 135, popularity: 0 },
    { name: "Organizacja logistyki", id: 136, popularity: 0 },
    { name: "Prowadzenie rozmów kwalifikacyjnych", id: 137, popularity: 0 },
    { name: "Tworzenie planów operacyjnych", id: 138, popularity: 0 },
    { name: "Tworzenie raportów finansowych", id: 139, popularity: 0 },
    { name: "Znajomość narzędzi do komunikacji", id: 140, popularity: 0 },
    { name: "Prowadzenie wideokonferencji", id: 141, popularity: 0 },
    { name: "Znajomość metod zarządzania ryzykiem", id: 142, popularity: 0 },
    { name: "Zarządzanie relacjami z dostawcami", id: 143, popularity: 0 },
    { name: "Tworzenie strategii IT", id: 144, popularity: 0 },
    { name: "Obsługa systemów ERP", id: 145, popularity: 0 },
    { name: "Tworzenie treści marketingowych", id: 146, popularity: 0 },
    { name: "Zarządzanie dokumentacją", id: 147, popularity: 0 },
    { name: "Zarządzanie relacjami z partnerami biznesowymi", id: 148, popularity: 0 },
    { name: "Tworzenie analiz SWOT", id: 149, popularity: 0 },
    { name: "Obsługa systemów do analizy danych", id: 150, popularity: 0 },
    { name: "Prowadzenie warsztatów", id: 151, popularity: 0 },
    { name: "Tworzenie infografik", id: 152, popularity: 0 },
    { name: "Tworzenie materiałów szkoleniowych", id: 153, popularity: 0 },
    { name: "Znajomość technik sprzedażowych", id: 154, popularity: 0 },
    { name: "Znajomość metod lean management", id: 155, popularity: 0 },
    { name: "Tworzenie strategii rozwoju", id: 156, popularity: 0 },
    { name: "Tworzenie strategii produktowych", id: 157, popularity: 0 },
    { name: "Obsługa narzędzi do analizy finansowej", id: 158, popularity: 0 },
    { name: "Znajomość technik negocjacyjnych", id: 159, popularity: 0 },
    { name: "Zarządzanie przepływem pracy", id: 160, popularity: 0 },
    { name: "Tworzenie strategii e-commerce", id: 161, popularity: 0 },
    { name: "Znajomość systemów płacowych", id: 162, popularity: 0 },
    { name: "Znajomość narzędzi do analizy SEO", id: 163, popularity: 0 },
    { name: "Prowadzenie analizy konkurencji", id: 164, popularity: 0 },
    { name: "Znajomość metodologii Agile", id: 165, popularity: 0 },
    { name: "Znajomość metodologii Scrum", id: 166, popularity: 0 },
    { name: "Tworzenie strategii komunikacji", id: 167, popularity: 0 },
    { name: "Obsługa narzędzi do monitoringu mediów", id: 168, popularity: 0 },
    { name: "Zarządzanie kryzysowe", id: 169, popularity: 0 },
    { name: "Tworzenie strategii content marketingowych", id: 170, popularity: 0 },
    { name: "Znajomość technik zarządzania projektami", id: 171, popularity: 0 },
    { name: "Prowadzenie analizy danych sprzedażowych", id: 172, popularity: 0 },
    { name: "Znajomość narzędzi do zarządzania zadaniami", id: 173, popularity: 0 },
    { name: "Tworzenie strategii PR", id: 174, popularity: 0 },
    { name: "Znajomość narzędzi do zarządzania zasobami ludzkimi", id: 175, popularity: 0 },
    { name: "Znajomość systemów do zarządzania magazynem", id: 176, popularity: 0 },
    { name: "Prowadzenie badań rynkowych", id: 177, popularity: 0 },
    { name: "Znajomość narzędzi do zarządzania dokumentami", id: 178, popularity: 0 },
    { name: "Znajomość systemów do zarządzania flotą", id: 179, popularity: 0 },
    { name: "Zarządzanie komunikacją wewnętrzną", id: 180, popularity: 0 },
    { name: "Tworzenie strategii social media", id: 181, popularity: 0 },
    { name: "Znajomość narzędzi do analizy social media", id: 182, popularity: 0 },
    { name: "Tworzenie planów contentowych", id: 183, popularity: 0 },
    { name: "Zarządzanie kosztami operacyjnymi", id: 184, popularity: 0 },
    { name: "Znajomość systemów do zarządzania szkoleniami", id: 185, popularity: 0 },
    { name: "Tworzenie planów sukcesji", id: 186, popularity: 0 },
    { name: "Zarządzanie programami lojalnościowymi", id: 187, popularity: 0 },
    { name: "Tworzenie planów innowacyjnych", id: 188, popularity: 0 },
    { name: "Znajomość narzędzi do zarządzania relacjami z partnerami", id: 189, popularity: 0 },
    { name: "Prowadzenie analizy strategicznej", id: 190, popularity: 0 },
    { name: "Zarządzanie zespołami wirtualnymi", id: 191, popularity: 0 },
    { name: "Znajomość metodologii Design Thinking", id: 192, popularity: 0 },
    { name: "Tworzenie strategii transformacji cyfrowej", id: 193, popularity: 0 },
    { name: "Znajomość narzędzi do zarządzania czasem pracy", id: 194, popularity: 0 },
    { name: "Znajomość systemów do zarządzania rekrutacją", id: 195, popularity: 0 },
    { name: "Prowadzenie szkoleń zdalnych", id: 196, popularity: 0 },
    { name: "Tworzenie planów szkoleń i rozwoju", id: 197, popularity: 0 },
    { name: "Znajomość technik mediacji", id: 198, popularity: 0 },
    { name: "Tworzenie strategii employer branding", id: 199, popularity: 0 },
    { name: "Znajomość narzędzi do analizy wyników sprzedażowych", id: 200, popularity: 0 },
];

export const univercities = [
    {
        name: 'Uniwersytet im. Adama Mickiewicza ',
        faculties: [
            79, 41, 50, 72, 20, 11, 9, 42, 8, 67, 13, 56, 38, 74, 64, 95, 83, 4, 25, 100, 68, 25, 49, 96, 27
        ],
        city: 'Poznań'

    },
    {
        name: 'Politechnika',
        faculties: [
            43, 43, 87, 77, 4, 76, 51, 86, 2, 57
        ],
        city: 'Wrocław'
    },
    {
        name: 'Uniwersytet Jagielloński',
        faculties: [
            10, 12, 23, 45, 32, 61, 75, 81, 91, 94, 58, 63, 70, 18, 66, 33, 7, 29, 52, 89
        ],
        city: 'Kraków'
    },
    {
        name: 'Uniwersytet Warszawski',
        faculties: [
            3, 5, 15, 17, 26, 28, 30, 35, 37, 39, 44, 46, 47, 53, 55, 59, 60, 62, 65, 71
        ],
        city: 'Warszawa'
    },
    {
        name: 'Uniwersytet Wrocławski',
        faculties: [
            1, 6, 14, 16, 19, 21, 22, 24, 31, 34, 36, 40, 48, 54, 73, 78, 80, 82, 84, 88
        ],
        city: 'Wrocław'
    },
    {
        name: 'Politechnika Warszawska',
        faculties: [
            2, 5, 13, 15, 25, 27, 34, 38, 41, 45, 49, 53, 58, 61, 67, 72, 74, 79, 85, 93
        ],
        city: 'Warszawa'
    },
    {
        name: 'Uniwersytet Gdański',
        faculties: [
            7, 9, 11, 20, 23, 26, 29, 32, 35, 39, 42, 46, 50, 52, 55, 57, 60, 64, 68, 75
        ],
        city: 'Gdańsk'
    },
    {
        name: 'Politechnika Gdańska',
        faculties: [
            4, 8, 12, 16, 19, 21, 24, 28, 31, 36, 40, 44, 48, 51, 54, 59, 62, 65, 69, 73
        ],
        city: 'Gdańsk'
    },
    {
        name: 'Uniwersytet Śląski',
        faculties: [
            5, 10, 14, 18, 22, 25, 30, 33, 37, 41, 43, 47, 51, 56, 59, 63, 66, 70, 76, 81
        ],
        city: 'Katowice'
    },
    {
        name: 'Politechnika Śląska',
        faculties: [
            6, 13, 17, 20, 24, 27, 31, 34, 38, 42, 45, 49, 52, 55, 58, 61, 65, 71, 77, 83
        ],
        city: 'Gliwice'
    },
    {
        name: 'Uniwersytet Łódzki',
        faculties: [
            8, 12, 16, 19, 22, 26, 29, 32, 36, 39, 43, 46, 50, 53, 57, 60, 64, 68, 72, 79
        ],
        city: 'Łódź'
    },
    {
        name: 'Politechnika Łódzka',
        faculties: [
            3, 7, 11, 14, 17, 21, 25, 28, 32, 35, 38, 41, 45, 48, 51, 55, 58, 62, 66, 70
        ],
        city: 'Łódź'
    },
    {
        name: 'Uniwersytet im. Marii Curie-Skłodowskiej',
        faculties: [
            2, 9, 13, 18, 22, 27, 30, 34, 37, 42, 46, 50, 54, 58, 63, 67, 71, 75, 78, 84
        ],
        city: 'Lublin'
    },{
        name: 'Uniwersytet Przyrodniczy w Poznaniu',
        faculties: [
            5, 14, 18, 27, 31, 34, 39, 43, 48, 51, 55, 60, 63, 68, 72, 76, 80, 85, 89, 94
        ],
        city: 'Poznań'
    },
    {
        name: 'Uniwersytet Ekonomiczny w Poznaniu',
        faculties: [
            3, 7, 12, 19, 23, 28, 33, 38, 42, 47, 50, 54, 59, 64, 69, 73, 77, 82, 87, 92
        ],
        city: 'Poznań'
    },
    {
        name: 'Akademia Muzyczna im. Ignacego Jana Paderewskiego w Poznaniu',
        faculties: [
            2, 8, 13, 17, 22, 26, 30, 36, 40, 45, 49, 53, 57, 62, 66, 71, 75, 79, 84, 90
        ],
        city: 'Poznań'
    },
    {
        name: 'Politechnika Poznańska',
        faculties: [
            1, 6, 11, 15, 20, 25, 29, 35, 41, 44, 48, 52, 58, 61, 65, 70, 74, 78, 83, 88
        ],
        city: 'Poznań'
    },
    {
        name: 'Akademia Wychowania Fizycznego w Poznaniu',
        faculties: [
            4, 9, 16, 21, 24, 27, 32, 37, 41, 46, 50, 56, 60, 64, 68, 73, 77, 81, 86, 91
        ],
        city: 'Poznań'
    },
    {
        name: 'Akademia Sztuk Pięknych w Poznaniu',
        faculties: [
            5, 10, 14, 19, 23, 28, 32, 38, 43, 47, 51, 55, 60, 65, 69, 74, 79, 84, 89, 93
        ],
        city: 'Poznań'
    },
    {
        name: 'Wyższa Szkoła Bankowa w Poznaniu',
        faculties: [
            7, 12, 18, 22, 26, 31, 35, 40, 44, 49, 53, 58, 62, 67, 71, 76, 80, 85, 90, 95
        ],
        city: 'Poznań'
    }

] 

export const science = [
    "matematyka", "fizyka", "chemia", "biologia", "informatyka", "astronomia", "geologia", "mechanika", "elektronika", "robotyka",
    "matematyki", "fizyki", "chemii", "biologii", "informatyki", "astronomii", "geologii", "mechaniki", "elektroniki", "robotyki",
    "matematyce", "fizyce", "chemii", "biologii", "informatyce", "astronomii", "geologii", "mechanice", "elektronice", "robotyce",
    "matematykę", "fizykę", "chemię", "biologię", "informatykę", "astronomię", "geologię", "mechanikę", "elektronikę", "robotykę",
    "matematyką", "fizyką", "chemią", "biologią", "informatyką", "astronomią", "geologią", "mechaniką", "elektroniką", "robotyką",
    "matematyko", "fizyko", "chemio", "biologio", "informatyko", "astronomio", "geologio", "mechaniko", "elektroniko", "robotyko",
    "matematyko", "fizyko", "chemio", "biologio", "informatyko", "astronomio", "geologio", "mechaniko", "elektroniko", "robotyko",
    "matematyki", "fizyki", "chemii", "biologii", "informatyki", "astronomii", "geologii", "mechaniki", "elektroniki", "robotyki"
];

export const human = [
    "literatura", "historia", "filozofia", "sztuka", "muzyka", "teatr", "filologia", "antropologia", "psychologia", "socjologia",
    "literatury", "historii", "filozofii", "sztuki", "muzyki", "teatru", "filologii", "antropologii", "psychologii", "socjologii",
    "literaturze", "historii", "filozofii", "sztuce", "muzyce", "teatrze", "filologii", "antropologii", "psychologii", "socjologii",
    "literaturę", "historię", "filozofię", "sztukę", "muzykę", "teatr", "filologię", "antropologię", "psychologię", "socjologię",
    "literaturą", "historią", "filozofią", "sztuką", "muzyką", "teatrem", "filologią", "antropologią", "psychologią", "socjologią",
    "literaturo", "historio", "filozofio", "sztuko", "muzyko", "teatro", "filologio", "antropologio", "psychologio", "socjologio",
    "literaturo", "historio", "filozofio", "sztuko", "muzyko", "teatro", "filologio", "antropologio", "psychologio", "socjologio",
    "literatury", "historii", "filozofii", "sztuki", "muzyki", "teatru", "filologii", "antropologii", "psychologii", "socjologi"
];

