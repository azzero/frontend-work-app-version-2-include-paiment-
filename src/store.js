import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import Reducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore } from 'react-router-redux';
import feathers from 'feathers-client';
import mySaga from './sagas/saga';
import { composeWithDevTools } from 'redux-devtools-extension';
const defaultStore = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  Reducer,
  defaultStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
let port = process.env.PORT;
// eslint-disable-next-line
if (port == null || port == '') {
  port = 3030;
}
const host = `http://localhost:${port}`;
export const app = feathers();
var restClient = feathers.rest(host);
app.configure(restClient.fetch(window.fetch));
sagaMiddleware.run(mySaga, app);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
