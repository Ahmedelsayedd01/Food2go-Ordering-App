import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeProductsCard, removeUser, setUser } from "../Store/CreateSlices";

// Create a context
const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);

  const [user, setUserState] = useState(() => userData || null);

  const login = (userData) => {
    setUserState(userData); // Update local state
    dispatch(setUser(userData)); // Dispatch to Redux
    toast.success(`Welcome ${userData?.user?.name || '-'}`);
  };

  const logout = () => {
    setUserState(null);
    dispatch(removeUser()); // Remove from Redux
    dispatch(removeProductsCard()); // Remove from Redux
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        toastSuccess: (text) => toast.success(text),
        toastError: (text) => toast.error(text),
      }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a ContextProvider");
  }
  return context;
};