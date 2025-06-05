import { createBrowserRouter } from "react-router-dom";
import { ContactDetailsPage, HomePage } from "../pages";
import { RootLayout } from "../components/layout";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: `/`,
        element: <HomePage />,
      },
      {
        path: `/contact/:id`,
        element: <ContactDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Not Found</p>,
  },
]);
