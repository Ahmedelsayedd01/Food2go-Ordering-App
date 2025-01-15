import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer, newPassReducer, otpCodeReducer, productsCardReducer, productsDiscountFilterReducer, productsDiscountReducer, productsFilterReducer, productsReducer, signUpTypeReducer, userReducer } from "./CreateSlices";
import { combineReducers } from 'redux';
import { thunk } from "redux-thunk";

const reducers = combineReducers({
       user: userReducer,
       signUpType: signUpTypeReducer,
       otp: otpCodeReducer,
       newPass: newPassReducer,

       categories: categoriesReducer,
       products: productsReducer,

       productsCard: productsCardReducer,

       productsFilter: productsFilterReducer,
       productsDiscount: productsDiscountReducer,
       productsDiscountFilter: productsDiscountFilterReducer,
});

const persistConfig = {
       key: 'root',
       storage,
       whitelist: ['user', 'email', 'otp', 'newPass', 'productsCard'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const StoreApp = configureStore({
       reducer: persistedReducer,
       middleware: (getDefaultMiddleware) =>
              getDefaultMiddleware({
                     serializableCheck: false,
                     immutableCheck: false,
              }).concat(thunk), // Add thunk middleware
});

export const persistor = persistStore(StoreApp);
