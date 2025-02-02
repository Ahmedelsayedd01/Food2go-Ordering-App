import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer, checkOutDetailsReducer, newPassReducer, orderReducer, ordersReducer, otpCodeReducer, productsCardReducer, productsDiscountFilterReducer, productsDiscountReducer, productsFilterReducer, productsReducer, signUpTypeReducer, taxTypeReducer, totalPriceReducer, userReducer } from "./CreateSlices";
import { combineReducers } from 'redux';
import { thunk } from "redux-thunk";

const reducers = combineReducers({
       user: userReducer,
       signUpType: signUpTypeReducer,
       otp: otpCodeReducer,
       newPass: newPassReducer,
       checkOutDetails: checkOutDetailsReducer,

       taxType: taxTypeReducer,
       products: productsReducer,
       categories: categoriesReducer,

       productsCard: productsCardReducer,

       order: orderReducer,
       totalPrice: totalPriceReducer,
       ordes: ordersReducer,

       productsFilter: productsFilterReducer,
       productsDiscount: productsDiscountReducer,
       productsDiscountFilter: productsDiscountFilterReducer,
});

const persistConfig = {
       key: 'root',
       storage,
       whitelist: JSON.parse(localStorage.getItem('whitelist') || '["user", "email", "otp", "newPass", "productsCard", "orderReducer", "totalPrice"]'),
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
