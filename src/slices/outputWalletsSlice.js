import { createSlice } from "@reduxjs/toolkit";

const outputWalletsSlice = createSlice({
    name: "outputWallets",
    initialState: {
        wallets: [],
        error: false,
        loading: false,
    },
    reducers: {
        fetchWallets: state => {

        },

        fetchWalletSuccess: (state, { payload: wallet }) => {
            state.wallets.push(wallet);
        }
    },
});

export const selectWallets = state => state.wallets.wallets;
// export const selectAddressesValidationComplete = state => state.inputAddresses.validationComplete;

export const { fetchWallets, fetchWalletSuccess } = outputWalletsSlice.actions;

export default outputWalletsSlice.reducer;