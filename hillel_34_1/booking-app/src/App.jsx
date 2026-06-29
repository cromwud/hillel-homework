import React from 'react';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { reduxHistory } from './store';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';

const App = () => (
  <Router history={reduxHistory}>
    <Header />
    <AppRoutes />
  </Router>
);

export default App;