// import { createStore, applyMiddleware, compose } from "redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension"
// import rootReducer from "./reducers";
// import rootSaga from "./sagas";


// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(rootSaga);

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware))
// );
sagaMiddleware.run(rootSaga);

export default store;