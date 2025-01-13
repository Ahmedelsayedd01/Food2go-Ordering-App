import { createSlice } from "@reduxjs/toolkit";

// Initial states
const initialUserState = {
       data: null
};
const initialSignUpTypeState = { data: null };
const initialOtpCodeState = { code: null };
const initialNewPass = false;

const initialProducts = { data: null }
const initialProductsDiscount = { data: null }

// Auth slices
const userSlice = createSlice({
       name: "user",
       initialState: initialUserState,
       reducers: {
              setUser: (state, action) => {
                     console.log("Setting user:", action.payload);
                     state.data = action.payload;
              },
              removeUser: (state) => {
                     console.log("Removing user");
                     state.data = null;
              },
       },
});
const signUpTypeSlice = createSlice({
       name: "signUpType",
       initialState: initialSignUpTypeState,
       reducers: {
              setSignUpType: (state, action) => {
                     console.log("Setting SignUp Type:", action.payload);
                     state.data = action.payload;
              },
              removeSignUpType: (state) => {
                     console.log("Removing SignUp Type");
                     state.data = null;
              },
       },
});

const otpCodeSlice = createSlice({
       name: "otpCode",
       initialState: initialOtpCodeState,
       reducers: {
              setOtpCode: (state, action) => {
                     console.log("Setting otp Code:", action.payload);
                     state.code = action.payload;
              },
              removeOtpCode: (state) => {
                     console.log("Removing otp Code");
                     state.code = null;
              },
       },
});

const newPassSlice = createSlice({
       name: "newPass",
       initialState: initialNewPass,
       reducers: {
              setNewPass: (state, action) => {
                     console.log("Setting New Pass:", action.payload);
                     return action.payload;
              },
              removeNewPass: () => {
                     console.log("Removing New Pass");
                     return false;
              },
       },
});

/* Products Slice */
const productsSlice = createSlice({
       name: "products",
       initialState: initialProducts,
       reducers: {
              setProducts: (state, action) => {
                     console.log("Setting Products:", action.payload);
                     state.data = action.payload;
              },
              removeProducts: (state) => {
                     console.log("Removing Products");
                     state.data = null;
              },
       },
});

const productsDiscountSlice = createSlice({
       name: "productsDiscount",
       initialState: initialProductsDiscount,
       reducers: {
              setProductsDiscount: (state, action) => {
                     console.log("Setting Products Discount:", action.payload);
                     state.data = action.payload;
              },
              removeProductsDiscount: (state) => {
                     console.log("Removing Products Discount");
                     state.data = null;
              },
       },
});


export const { setUser, removeUser } = userSlice.actions;
export const { setSignUpType, removeSignUpType } = signUpTypeSlice.actions;
export const { setOtpCode, removeOtpCode } = otpCodeSlice.actions;
export const { setNewPass, removeNewPass } = newPassSlice.actions;

export const { setProducts, removeProducts } = productsSlice.actions;
export const { setProductsDiscount, removeProductsDiscount } = productsDiscountSlice.actions;

export const userReducer = userSlice.reducer;
export const signUpTypeReducer = signUpTypeSlice.reducer;
export const otpCodeReducer = otpCodeSlice.reducer;
export const newPassReducer = newPassSlice.reducer;
export const productsReducer = productsSlice.reducer;
export const productsDiscountReducer = productsDiscountSlice.reducer;
