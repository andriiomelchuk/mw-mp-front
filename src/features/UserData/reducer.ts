import { T_AppThunk } from "../../store/types";
import { I_UserData } from './types'
import {createAction, createReducer} from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";

const initialState: I_UserData = {
    id: null,
    login: null,
    email: null,
    phone: null,
    nameFirst: null,
    nameLast: null,
    namePatronymic: null,
    displayName: null,
    birthDate: null,
    gender: null,
}



const setUserDataAction = createAction<I_UserData>('USER_DATA/set')

const userDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        setUserDataAction,
        (_, action) => action.payload
    )
})


export const setUserData = (userData: I_UserData): AnyAction => (
    setUserDataAction(userData)
)


export default userDataReducer