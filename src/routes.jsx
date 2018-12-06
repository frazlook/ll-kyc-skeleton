// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import Register from './components/Register';
import Contact from './components/Contact';
import Info from './components/Info';
import FAQ from './components/FAQ';
import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/myinfo" component={Info} exact />
      <Route path="/faq" component={FAQ} exact />
      <Route component={Error404} />
    </Switch>
  </App>

);

export default AppRoutes;