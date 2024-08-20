import { Action, School, degreeEnum, degreeLabelEnum, registerSchoolsActions } from "./types";
import { v4 as uuidv4 } from "uuid";

export const handleAddSchool = (
  name: string,
  city: string,
  faculty: string,
  degree: degreeEnum,
  degreeLabel: degreeLabelEnum,
  dispatch: React.Dispatch<Action>
) => {
  if (name && degree) {
    const newSchool: School = {
      id: uuidv4(),
      name,
      degree,
      degreeLabel,
      city,
      faculty,
    };
    dispatch({ type: registerSchoolsActions.ADD_SCHOOL, payload: newSchool });
  }
};

export const handleEditSchool = (
  name: string,
  city: string,
  faculty: string,
  degree: degreeEnum,
  id: string,
  degreeLabel: degreeLabelEnum,
  dispatch: React.Dispatch<Action>
) => {
  const updatedSchool: School = {
    id,
    name,
    city,
    faculty,
    degree,
    degreeLabel,
  };
  dispatch({
    type: registerSchoolsActions.EDIT_SCHOOL,
    payload: updatedSchool,
  });
};

export const handleRemoveSchool = (
  id: string,
  dispatch: React.Dispatch<Action>
) => {
  dispatch({ type: registerSchoolsActions.REMOVE_SCHOOL, payload: id });
};
