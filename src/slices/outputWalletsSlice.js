import { createSlice } from "@reduxjs/toolkit";

const outputWalletsSlice = createSlice({
    name: "outputWallets",
    initialState: {
        wallets: [],
        filteredWallets: [],
        error: false,
        loading: false,
        sortConfig: null,
    },
    reducers: {
        fetchWallets: state => {

        },

        fetchWalletSuccess: (state, { payload: wallet }) => {
            state.wallets.push(wallet);
            state.filteredWallets.push(wallet);
        },

        sortWallets: (state, { payload: sortConfig }) => {
            state.sortConfig = sortConfig;
            if (sortConfig !== null) {
                state.filteredWallets.sort((a, b) => {
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
        },

        filterWallets: (state, { payload: filterConfig }) => {
            const getMyDateString = (myDate) => {
                const date = new Date(myDate);
                return date.toLocaleDateString();
            };

            if (filterConfig.key === "create_time" || filterConfig.key === "latest_opration_time") {
                state.filteredWallets = state.wallets.filter(wallet =>
                    getMyDateString(wallet[filterConfig.key]).includes(filterConfig.content.toString())
                );
            } else {
                state.filteredWallets = state.wallets.filter(wallet =>
                    wallet[filterConfig.key].toString().includes(filterConfig.content)
                );
            };

        },

        resetWallets: state => {
            state.wallets = [];
            state.filteredWallets = [];
        },

    },
});

export const selectWallets = state => state.wallets.wallets;
export const selectSortConfig = state => state.wallets.sortConfig;
export const selectFilteredWallets = state => state.wallets.filteredWallets;
export const { fetchWallets,
    fetchWalletSuccess,
    sortWallets,
    filterWallets,
    resetWallets,
} = outputWalletsSlice.actions;

export default outputWalletsSlice.reducer;