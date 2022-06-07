import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewares = thunk;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;