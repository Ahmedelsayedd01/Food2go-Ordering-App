import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { newPassReducer, otpCodeReducer, productsDiscountReducer, productsReducer, signUpTypeReducer, userReducer } from "./CreateSlices";
import { combineReducers } from 'redux';
import { thunk } from "redux-thunk";

const reducers = combineReducers({
       user: userReducer,
       signUpType: signUpTypeReducer,
       otp: otpCodeReducer,
       newPass: newPassReducer,

       products: productsReducer,
       productsDiscount: productsDiscountReducer,
});

const persistConfig = {
       key: 'root',
       storage,
       whitelist: ['user', 'email', 'otp', 'newPass'],
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
