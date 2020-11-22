import { takeLatest, select, call, put } from "redux-saga/effects"
import { selectAddressState } from "../slices/inputAdressesSlice";
import { fetchWallets, fetchWalletSuccess } from "../slices/outputWalletsSlice";
import { getWalletDetailsWithAPI } from "../helpers/apiClient";

function* fetchWalletsHandler() {
    const addresses = yield select(selectAddressState);
    for (const address of addresses) {
        const walletDetails = yield call(getWalletDetailsWithAPI, address.address);

        //Get balance 0 if it doesn't exist in fetched wallet
        if (!walletDetails.balance) {
            walletDetails.balance = 0;
        }
        yield put(fetchWalletSuccess(walletDetails));
    };
};

export function* fetchWalletsSaga() {
    yield takeLatest(fetchWallets.type, fetchWalletsHandler);
};



