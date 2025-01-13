import { createSelector } from "@reduxjs/toolkit";

export const selectSignUpType = createSelector(
  (state) => state.signUpType?.data,
  (data) => {
    console.log("signType selector:", data);
    return { ...data }; // Ensure transformation logic
  }
);

export const selectOtpCode = createSelector(
  (state) => state.otp?.code,
  (code) => {
    console.log("code selector:", code);
    return code ? String(code) : null; // Ensure transformation logic
  }
);

export const selectNewPassState = createSelector(
  (state) => state.newPass,
  (newPass) => {
    console.log("newPassState selector:", newPass);
    return Boolean(newPass); // Ensure transformation logic
  }
);
