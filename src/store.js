import { configureStore } from "@reduxjs/toolkit";
import inputAddressesSlice from "./slices/inputAdressesSlice";
import createSaga from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSaga();

export const store = configureStore({
    reducer: {
        inputAddresses: inputAddressesSlice,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);