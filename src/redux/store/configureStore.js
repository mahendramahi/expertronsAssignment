import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = __DEV__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

  const middleware = applyMiddleware(sagaMiddleware);

  const store = createStore(persistedReducer, composeEnhancers(middleware));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}

export default configureStore();
