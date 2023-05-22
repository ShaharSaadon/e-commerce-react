import thunk from 'redux-thunk';
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { productReducer } from './reducers/product.reducer';
import { userReducer } from './reducers/user.reducer';
import { cartReducer } from './reducers/cart.reducer';
import { orderReducer } from './reducers/order.reducer';
import { articleReducer } from './reducers/article.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productModule: productReducer,
  userModule: userReducer,
  cartModule: cartReducer,
  articleModule: articleReducer,
  orderModule: orderReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

window.gStore = store;
