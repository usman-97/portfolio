import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
