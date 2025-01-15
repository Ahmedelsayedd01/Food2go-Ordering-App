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
  ForgotPasswordPage,
  OtpVerificationPage,
  ProfilePage,
  FavoritesPage,
  ProductDetails,
  DealsPage,
} from "./Pages/page";
import ProtectedLogin from "./ProtectedData/ProtectedLogin";
import { AuthLayout } from "./Layouts/Layouts";

export const router = createBrowserRouter(
  [
    {
      path: '',
      element: <App />,
      children: [
        // Authentication
        {
          path: 'auth',
          element: <ProtectedLogin />,
          children: [{

            path: '',
            element: <AuthLayout />,
            children: [

              {
                path: 'login',
                element: <LoginPage />
              },
              {
                path: 'sign_up',
                element: <SignUpPage />
              },
            ],
          }
          ]
        },
        {
          path: 'profile',
          // element: <ProfilePage />,
          element: <ProtectedLogin />,
          children: [
            {
              path: '',
              element: <ProfilePage />,

            }
          ]
        },
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
          path: 'favorites',
          element: <ProtectedLogin />,
          children: [
            {
              path: '',
              element: <FavoritesPage />,

            }
          ]
        },
        {
          path: 'deals',
          element: <DealsPage />,
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
          path: '/product/:productId',
          element: <ProductDetails />,
        }
      ],
    },
    /* Catch-all for 404 */
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
);
