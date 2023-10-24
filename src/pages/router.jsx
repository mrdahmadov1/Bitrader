import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const renderRoutes = (routes) => {
  return routes.map(({ path, title, element, children = [] }) => {
    return (
      <Route key={title} exact path={path} element={element}>
        {children.length > 0 && <Route>{renderRoutes(children)}</Route>}
      </Route>
    );
  });
};

const Router = () => {
  const pageRoutes = renderRoutes(pagesData);
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
