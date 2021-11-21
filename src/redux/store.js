import { createStore, applyMiddleware } from "redux";
import Reducers from "./root.reducer";
import logger from "redux-logger";

let middleWares = [logger];

const store = createStore(Reducers, applyMiddleware(...middleWares));
export default store;
