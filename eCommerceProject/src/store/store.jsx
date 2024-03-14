import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import globalReducer from "./reducers/globalReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import storeReducer from "./reducers/storeReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

// eğer bir componente state datası çekmek istiyorsak store içerisinden reducer içersisinden değeri çekmeliyiz
//örneğin store içerisinden categories çekmek için store.global.categories den almalıyız.
//signUpPage ->const roleOptions = useSelector((store) => store.global.roles);
export const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  store: storeReducer,
  shoppingCart: shoppingCartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
