import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import NoMatch from "./no-match";
import ErrorPage from "./pages/error-page";
import Layout from "./components/layout";
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
