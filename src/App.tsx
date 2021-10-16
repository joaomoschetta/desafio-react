import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AppRoutes from "./routes"

const App = () => {
  return (
    <Router>
      <Switch>

        {AppRoutes.map((route, key) => {
        const { ...attributes } = route;

        return (
          <Route
            exact
            {...attributes}
          />
        )
      })}
      </Switch>
    </Router>
  )
}

export default App;
