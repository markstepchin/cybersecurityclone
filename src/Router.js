import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import IntroPage from './components/pages/IntroPage';
import InfoPage from './components/pages/InfoPage';
import OperationsPage from './components/pages/OperationsPage';
import DataPage from './components/pages/DataPage';
import ContactPage from './components/pages/ContactPage';
import QuotesPage from './components/pages/QuotesPage';

const Router = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path="/info" component={InfoPage} />
        <Route path="/operations" component={OperationsPage} />
        <Route path="/data" component={DataPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/quotes" component={QuotesPage} />
        <Route component={IntroPage} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default Router;
