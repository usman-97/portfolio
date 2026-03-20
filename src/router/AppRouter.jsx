import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<BaseLayout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
