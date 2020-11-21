import { takeLatest, select, call, put } from "redux-saga/effects"
import { selectAddressState } from "../slices/inputAdressesSlice";
import { fetchWallets, fetchWalletSuccess } from "../slices/outputWalletsSlice";
import { getWalletDetailsWithAPI } from "../helpers/apiClient";

function* fetchWalletsHandler() {
    const addresses = yield select(selectAddressState);
    yield console.log(addresses);
    for (const address of addresses) {
        const walletDetails = yield call(getWalletDetailsWithAPI, address.address);
        yield console.log(walletDetails);
        yield put(fetchWalletSuccess(walletDetails));
    };
};

export function* fetchWalletsSaga() {
    yield takeLatest(fetchWallets.type, fetchWalletsHandler);
};



