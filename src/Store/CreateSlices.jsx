import { createSlice } from "@reduxjs/toolkit";

// Initial states
const initialUserState = { data: null };
const initialSignUpTypeState = { data: null };
const initialOtpCodeState = { code: null };
const initialNewPass = false;
const initialCheckOutDetails = { data: null };

const initialTaxType = { data: '', }
const initialProducts = { dat0a: [], }
const initialCategories = { data: [], }
const initialProductsCard = { data: [], }
const initialProductsFilter = { data: [], }
const initialProductsDiscount = { data: [], }
const initialProductsDiscountFilter = { data: [], }

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

const checkOutDetailsSlice = createSlice({
       name: "checkOutDetails",
       initialState: initialCheckOutDetails,
       reducers: {
              setCheckOutDetails: (state, action) => {
                     console.log("Setting CheckOut Details:", action.payload);
                     state.data = action.payload;
              },
       },
});

/* Products Slice */
const taxTypeSlice = createSlice({
       name: "taxType",
       initialState: initialTaxType,
       reducers: {
              setTaxType: (state, action) => {
                     console.log("Setting Tax Type:", action.payload);
                     state.data = action.payload;
              },
              removeTaxType: (state) => {
                     console.log("Removing Tax Type");
                     state.data = '';
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
const productsCardSlice = createSlice({
       name: "productsCard",
       initialState: initialProductsCard, // Use the corrected initial state
       reducers: {
              setProductsCard: (state, action) => {
                     console.log("Setting Products Card:", action.payload);
                     state.data = [...state.data, action.payload]; // Append the new product to the array
              },
              UpdateProductCard: (state, action) => {

                     console.log("Updating Products Card:", action.payload);
                     state.data = state.data.map(product => {
                            if (product.numberId === action.payload.numberId) {
                                   return { ...product, ...action.payload };
                            }
                            return product;
                     });
              },
              removeProductsCard: (state, action) => {
                     console.log("Removing Products Card:", action.payload);
                     state.data = state.data.filter(product => product.numberId !== action.payload); // Remove product by id
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
export const { setCheckOutDetails } = checkOutDetailsSlice.actions;

export const { setTaxType, removeTaxType } = taxTypeSlice.actions;
export const { setProducts, removeProducts } = productsSlice.actions;
export const { setCategories, removeCategories } = categoriesSlice.actions;
export const { setProductsCard, UpdateProductCard, removeProductsCard } = productsCardSlice.actions;
export const { setProductsFilter, removeProductsFilter } = productsFilterSlice.actions;
export const { setProductsDiscount, removeProductsDiscount } = productsDiscountSlice.actions;
export const { setProductsDiscountFilter, removeProductsDiscountFilter } = productsDiscountFilterSlice.actions;

export const userReducer = userSlice.reducer;
export const signUpTypeReducer = signUpTypeSlice.reducer;
export const otpCodeReducer = otpCodeSlice.reducer;
export const newPassReducer = newPassSlice.reducer;
export const checkOutDetailsReducer = checkOutDetailsSlice.reducer;

export const taxTypeReducer = taxTypeSlice.reducer;
export const productsReducer = productsSlice.reducer;
export const categoriesReducer = categoriesSlice.reducer;
export const productsCardReducer = productsCardSlice.reducer;
export const productsFilterReducer = productsFilterSlice.reducer;
export const productsDiscountReducer = productsDiscountSlice.reducer;
export const productsDiscountFilterReducer = productsDiscountFilterSlice.reducer;
