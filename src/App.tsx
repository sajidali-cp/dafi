import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./store/reducers/Index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "./components/_common/AlertTemplate";
export const store = createStore(rootReducer, applyMiddleware(thunk));
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}
const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app" component={Dashboard} />
          </Switch>
        </>
      </Router>
      </AlertProvider>
    </Provider>
  );
};

export default App;
