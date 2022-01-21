import { createStore, applyMiddleware } from "redux";
import Reducers from "./root.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

// This library to make our store persist in localStorage
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

let middleWares = [logger, thunk, sagaMiddleware];

const store = createStore(Reducers, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export { store, persistor };
