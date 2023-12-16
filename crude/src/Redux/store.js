import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
 import thunk from "redux-thunk";
 import { reducer as authReducer } from "./Authentication/reducer";
 import { reducer as productsReducer } from "./Products/reducer";

const rootReducer = combineReducers({
authReducer,
productsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
