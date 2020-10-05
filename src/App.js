import React from "react";
import { Provider } from "react-redux";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from 'components/pages/Main/index.jsx';
import ExtendedCharacter from 'components/pages/ExtendedCharacter';
import EmptyPage from 'components/pages/EmptyPage';
import store from 'store/store';

function App() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/character/:id" component={ExtendedCharacter} />
          <Route exact path="/rick-morty" component={Main} />
          <Route component={EmptyPage} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
