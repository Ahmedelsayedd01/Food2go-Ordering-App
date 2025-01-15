import { createSlice } from "@reduxjs/toolkit";

// Initial states
const initialUserState = {
       data: null
};
const initialSignUpTypeState = { data: null };
const initialOtpCodeState = { code: null };
const initialNewPass = false;

const initialCategories = { data: [] }
const initialProducts = { data: [] }
const initialProductsCard = { data: [] }
const initialProductsFilter = { data: [] }
const initialProductsDiscount = { data: [] }
const initialProductsDiscountFilter = { data: [] }

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
const categoriesSlice = createSlice({
       name: "categories",
       initialState: initialCategories,
       reducers: {
              setCategories: (state, action) => {
                     console.log("Setting Categories:", action.payload);
                     state.data = action.payload;
              },
              removeCategories: (state) => {
                     console.log("Removing Categories");
                     state.data = [];
              },
       },
});
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
                     state.data = [];
              },
       },
});
const productsCardSlice = createSlice({
       name: "productsCard",
       initialState: initialProductsCard,
       reducers: {
              setProductsCard: (state, action) => {
                     console.log("Setting Products Card:", action.payload);
                     state.data = action.payload;
              },
              removeProductsCard: (state) => {
                     console.log("Removing Products Card");
                     state.data = [];
              },
       },
});
const productsFilterSlice = createSlice({
       name: "productsFilter",
       initialState: initialProductsFilter,
       reducers: {
              setProductsFilter: (state, action) => {
                     console.log("Setting Products Filter:", action.payload);
                     state.data = action.payload;
              },
              removeProductsFilter: (state) => {
                     console.log("Removing Products Filter");
                     state.data = [];
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
                     state.data = [];
              },
       },
});
const productsDiscountFilterSlice = createSlice({
       name: "productsDiscountFilter",
       initialState: initialProductsDiscountFilter,
       reducers: {
              setProductsDiscountFilter: (state, action) => {
                     console.log("Setting Products Discount Filter:", action.payload);
                     state.data = action.payload;
              },
              removeProductsDiscountFilter: (state) => {
                     console.log("Removing Products Discount Filter");
                     state.data = [];
              },
       },
});


export const { setUser, removeUser } = userSlice.actions;
export const { setSignUpType, removeSignUpType } = signUpTypeSlice.actions;
export const { setOtpCode, removeOtpCode } = otpCodeSlice.actions;
export const { setNewPass, removeNewPass } = newPassSlice.actions;

export const { setCategories, removeCategories } = categoriesSlice.actions;
export const { setProducts, removeProducts } = productsSlice.actions;
export const { setProductsCard, removeProductsCard } = productsCardSlice.actions;
export const { setProductsFilter, removeProductsFilter } = productsFilterSlice.actions;
export const { setProductsDiscount, removeProductsDiscount } = productsDiscountSlice.actions;
export const { setProductsDiscountFilter, removeProductsDiscountFilter } = productsDiscountFilterSlice.actions;

export const userReducer = userSlice.reducer;
export const signUpTypeReducer = signUpTypeSlice.reducer;
export const otpCodeReducer = otpCodeSlice.reducer;
export const newPassReducer = newPassSlice.reducer;

export const categoriesReducer = categoriesSlice.reducer;
export const productsReducer = productsSlice.reducer;
export const productsCardReducer = productsCardSlice.reducer;
export const productsFilterReducer = productsFilterSlice.reducer;
export const productsDiscountReducer = productsDiscountSlice.reducer;
export const productsDiscountFilterReducer = productsDiscountFilterSlice.reducer;
