import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  LoginPage,
  SignUpPage,
  HomePage,
  MenuPage,
  ContactUsPage,
  CartPage,
  CheckOutPage,
  NotFoundPage,
} from "./Pages/page";
import ProtectedLogin from "./ProtectedData/ProtectedLogin";

export const router = createBrowserRouter(
  [
    {
      path: '',
      element: <App />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'menu',
          element: <MenuPage />,
        },
        {
          path: 'contact_us',
          element: <ContactUsPage />,
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          path: 'check_out',
          element: <CheckOutPage />,
        },
        {
          path: 'login',
          element: <ProtectedLogin />,
          children: [
            {
              path: '',
              element: <LoginPage />,
            },
          ],
        },
        {
          path: 'sign_up',
          element: <ProtectedLogin />,
          children: [
            {
              path: '',
              element: <SignUpPage />,
            },
          ],
        },
      ],
    },
    /* Catch-all for 404 */
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
);
