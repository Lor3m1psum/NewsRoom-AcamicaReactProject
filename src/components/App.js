import React from "react";
import HeaderCont from "../containers/HeaderCont";
import NewsCont from "../containers/NewsCont";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <HeaderCont />
    <Switch>
      <Route exact path="/" component={NewsCont} />
      <Route exact path="/:num" component={NewsCont} />
      <Route path="/Internacionales" component={NewsCont} />
      <Route path="/Tecnologia" component={NewsCont} />
      <Route path="/Deportes" component={NewsCont} />
      <Route path="/Diseño" component={NewsCont} />
      <Route path="/Gaming" component={NewsCont} />
      <Route path="/search/" component={NewsCont} />
    </Switch>
  </div>
);

export default App;
