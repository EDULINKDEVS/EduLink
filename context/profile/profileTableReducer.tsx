import { TableDescription, TablePhoto, TableSlider, TableTitle } from "./exampleDat";
import { profileTableStateActions, Action } from "./actions";

export type TableState = Array<TableSlider | TableTitle | TableDescription | TablePhoto>;

export const initialState: TableState = [];

const profileTableReducer = (state: TableState = initialState, action: Action): TableState => {
    switch (action.type) {
        case profileTableStateActions.ADD_OBJ:
            return [...state, action.payload];
        
        case profileTableStateActions.REMOVE_OBJ:
            return state.filter(obj => obj.id !== action.payload);
        
        case profileTableStateActions.EDIT_OBJ:
            return state.map(obj => obj.id === action.payload.id ? action.payload.obj : obj);
        
        default:
            return state;
    }
};

export default profileTableReducer;
