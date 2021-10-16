import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {AppRoutes.map((route, key) => {
          const { ...attributes } = route;

          return (
            <Route
              exact
              key={key}
              {...attributes}
            />
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
