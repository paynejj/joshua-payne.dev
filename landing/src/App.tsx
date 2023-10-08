import { ErrorPage, Home, NoMatch } from "pages";
import { Layout } from "components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader } from "@mantine/core";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Loader type="oval" />} />
  );
}

export default App;
