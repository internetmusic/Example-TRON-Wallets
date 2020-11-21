import { takeLatest, select, call, put } from "redux-saga/effects"
import { validationStart, selectAddressState, validationMake, setValidationComplete } from "../slices/inputAdressesSlice";
import { fetchWallets } from "../slices/outputWalletsSlice";
import { validateWithAPI } from "../helpers/apiClient";

function* validationHandler() {
    const addresses = yield select(selectAddressState);
    for (const address of addresses) {
        const validate = yield call(validateWithAPI, address.address);
        yield put(validationMake({
            id: address.id,
            validationResult: validate.result,
            validationMessage: validate.message,
        }))
    };

    const addressesAfterValidationMake = yield select(selectAddressState);
    const validationCompleteChecker = (adresses) => {
        return adresses.every(address => address.validationResult === true);
    };
    const validationCompleteCheck = yield call(validationCompleteChecker, addressesAfterValidationMake);

    if (validationCompleteCheck) {
        yield put(setValidationComplete());
        yield put(fetchWallets());
    };
};

export function* validationSaga() {
    yield takeLatest(validationStart.type, validationHandler);
};



