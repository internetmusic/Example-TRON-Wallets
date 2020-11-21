import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/form">
          <FormPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route>
          <Redirect to="/form" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
