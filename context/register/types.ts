export enum registerSchoolsActions {
    ADD_SCHOOL = "ADD_SCHOOL",
    REMOVE_SCHOOL = "REMOVE_SCHOOL",
    EDIT_SCHOOL = "EDIT_SCHOOL"
  }
  export enum degreeLabelEnum {
    DURING = "DURING",
    GRADUATE = "GRADUATE"
  }
  export enum degreeEnum {
    BACHELOR = "BACHELOR",
    ENGINEER = "ENGINEER",
    MASTER = "MASTER",
    DOCTOR = "DOCTOR"
  }
  
  export interface School {
    id: string;
    name: string;
    degree: degreeEnum;
    city:string;
    faculty:string;
    degreeLabel: degreeLabelEnum;
  }
  
  export type Action =
    | { type: registerSchoolsActions.ADD_SCHOOL; payload: School }
    | { type: registerSchoolsActions.REMOVE_SCHOOL; payload: string }
    | { type: registerSchoolsActions.EDIT_SCHOOL; payload: School };
  