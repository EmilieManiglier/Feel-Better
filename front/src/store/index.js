/* eslint-disable import/no-unresolved */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import authMiddleware from 'src/middlewares/authMiddleware';
import moodMiddleware from 'src/middlewares/moodMiddleware';

// Combine reduxDevTools with middleware
const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    moodMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
