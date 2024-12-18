import { createSlice } from "@reduxjs/toolkit";

// Initial states
const initialUserState = null;

// User slice
const userSlice = createSlice({
       name: "user",
       initialState: initialUserState,
       reducers: {
              setUser: (state, action) => {
                     console.log("Setting user:", action.payload);
                     return { ...state, ...action.payload };
              },
              removeUser: () => {
                     console.log("Removing user");
                     return null;
              },
       },
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
