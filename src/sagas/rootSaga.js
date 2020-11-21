import { all } from "redux-saga/effects";
import { validationSaga } from "./validationSaga";

export default function* rootSaga() {
    yield all([
        validationSaga(),
    ])
}