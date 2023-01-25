import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

export const clientSlice = createSlice({
    name: 'client',
    initialState: initialState,

    reducers: {
        createUser: (state, action) => {
            return state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { firstName,
                sureName,
                email,
                phoneNumber,
                zipCode,
                taxIdNumber
            } = action.payload;
            return {
                ...state,
                firstName: firstName,
                sureName: sureName,
                email: email,
                phoneNumber: phoneNumber,
                zipCode: zipCode,
                taxIdNumber: taxIdNumber,
            };
        },
        deleteUser: (state) => {
            return (state = initialState);
        },
    },
});

export const {
    createUser,
    updateUser,
    deleteUser } = clientSlice.actions;

export default clientSlice.reducer;

