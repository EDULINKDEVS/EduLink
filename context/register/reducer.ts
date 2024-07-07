import { School, Action, registerSchoolsActions } from './types';

export const schoolReducer = (state: School[], action: Action): School[] => {
  switch (action.type) {
    case registerSchoolsActions.ADD_SCHOOL:
      return [...state, action.payload];
    case registerSchoolsActions.REMOVE_SCHOOL:
      return state.filter(school => school.id !== action.payload);
    case registerSchoolsActions.EDIT_SCHOOL:
      return state.map(school =>
        school.id === action.payload.id ? action.payload : school
      );
    default:
      return state;
  }
};
