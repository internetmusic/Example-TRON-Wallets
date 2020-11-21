import { all } from "redux-saga/effects";
import { validationSaga } from "./validationSaga";
import { fetchWalletsSaga } from "./fetchWalletsSaga";

export default function* rootSaga() {
    yield all([
        validationSaga(),
        fetchWalletsSaga(),
    ]);
};