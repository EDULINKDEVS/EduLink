
export type mainData = {
    id:string;
    label: "employee" | "employer";
    email: string;
    is_active: boolean;
    first_loggin: boolean;
};

export type employeeData = {
    id:string;
    f_name: string;
    l_name: string;
    phone: string;
    birth: string;
    status: "student" | "pupil";
    city: string;
}

export type universieties = {
    id:string;
    schoolName:string;
    profileName:string;
    city:string;
    stat: "DURING" | "GRADUATE";
    label: "BACHELOR" | "ENGINEER" | "MASTER" | "DOCTOR";
}

export type school = {
    id:string;
    schoolName:string;
    lev: "voc" | "high" | "tech";
    city:string;
    stat: "DURING" | "GRADUATE";
    profileName: string;
}

export type user_skills = {
    assignID:string;
    id:string;
    name:string;
}

export type userProfileAssign = {
    id: string;
    profile_photo: string;
    bg_photo:string;
    table_structure:string;
}

