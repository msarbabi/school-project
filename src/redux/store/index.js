import { createStore, compose, applyMiddleware } from "redux";
import thunk from "thunk";
import { reducers } from "../reducer";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
