import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import AddEngagement from './components/AddEngagement';
import EditEngagement from './components/EditEngagement';
import explore from './components/explore';
import print from './components/Print';
import addPayment from './components/payments /Add';
import paymentsList from './components/payments /PaymentsList';
import EditPayment from './components/payments /EditPayment';
import printPayment from './components/payments /PrintPayment';
import { Provider } from 'react-redux';
import store, { history } from './store';
import 'semantic-ui-css/semantic.min.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path='/'>
        <IndexRoute component={Home}></IndexRoute>
        <Route component={AddEngagement} path='/engagements/add'></Route>
        <Route path='/engagements/edit/:id' component={EditEngagement}></Route>
        <Route path='/engagement/explore' component={explore}></Route>
        <Route
          path='/engagement/print/:currentPage/:postsPerPage'
          component={print}
        ></Route>
        <Route path='/payments/add/:id' component={addPayment}></Route>
        <Route path='/payments' component={paymentsList}></Route>
        <Route path='/payments/:response' component={paymentsList}></Route>
        <Route path='/payments/edit/:id' component={EditPayment}></Route>
        <Route
          path='/payment/print/:currentPage/:postsPerPage'
          component={printPayment}
        ></Route>
      </Route>
    </Router>
  </Provider>
);
ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
