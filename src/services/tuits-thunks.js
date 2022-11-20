//import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";


export const createTuit = async (dispatch, tuit) => {
    const newTuit = await service.createTuit(tuit);
    dispatch({
        type: createTuit,
        newTuit
    });
}


export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type: findAllTuits,
        tuits
    });
}
export const  updateTuit = async (dispatch, tuit) => {
    const status = await service.updateTuit(tuit);
    dispatch({
        type:  updateTuit,
        tuit
    });
}


export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
        type: deleteTuit,
        tuit
    })
}