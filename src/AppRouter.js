import { ErrorBoundary } from "react-error-boundary";

import { Route, Routes } from "react-router-dom";
import Search from "pages/Search";
import Layout from "components/Layout";
import Error from "pages/Error";
import Genre from "pages/Genre";
import Home from "pages/Home";

function AppRouter() {
  return (
    <ErrorBoundary fallback={<Error isErrorPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="genres/:genreId" element={<Genre />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRouter;
