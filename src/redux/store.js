import { createStore, applyMiddleware } from "redux";
import Reducers from "./root.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// This library to make our store persist in localStorage
import { persistStore } from "redux-persist";

let middleWares = [logger, thunk];

const store = createStore(Reducers, applyMiddleware(...middleWares));
const persistor = persistStore(store);
export { store, persistor };
