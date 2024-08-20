import { TableDescription, TablePhoto, TableSlider, TableTitle } from "./exampleDat";

export enum profileTableStateActions {
    ADD_OBJ = "ADD_OBJ",
    REMOVE_OBJ = "REMOVE_OBJ",
    EDIT_OBJ = "EDIT_OBJ"
}

export type Action = 
{
    type: profileTableStateActions.ADD_OBJ; payload: TableSlider | TableTitle | TableDescription | TablePhoto
}
|
{
    type: profileTableStateActions.EDIT_OBJ; payload: {id: string, obj: TableSlider | TableTitle | TableDescription | TablePhoto }
}
|
{
    type: profileTableStateActions.REMOVE_OBJ; payload: string
};