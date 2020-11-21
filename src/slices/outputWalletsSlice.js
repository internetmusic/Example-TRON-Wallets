import { createSlice } from "@reduxjs/toolkit";

const outputWalletsSlice = createSlice({
    name: "outputWallets",
    initialState: {
        wallets: [
            {
                account_name: 'MyLegnica',
                address: 'TGmcz6UMqeTUoNryw4LcPeTWmo1DWrxRUK',
                balance: 29994599,
                net_usage: 842,
                create_time: 1563273885000,
                latest_opration_time: 1605932712000,
                latest_withdraw_time: 1598218971000,
                latest_consume_time: 1605932712000,
                latest_consume_free_time: 1603817010000,
                account_resource: {
                    energy_usage: 69777,
                    latest_consume_time_for_energy: 1605932529000,
                    acquired_delegated_frozen_balance_for_energy: 4200000000
                },
                owner_permission: {
                    permission_name: 'owner',
                    threshold: 1,
                    keys: [
                        {
                            address: 'TGmcz6UMqeTUoNryw4LcPeTWmo1DWrxRUK',
                            weight: 1
                        }
                    ]
                },
                active_permission: [
                    {
                        type: 'Active',
                        id: 2,
                        permission_name: 'active',
                        threshold: 1,
                        operations: '7fff1fc0033e0100000000000000000000000000000000000000000000000000',
                        keys: [
                            {
                                address: 'TGmcz6UMqeTUoNryw4LcPeTWmo1DWrxRUK',
                                weight: 1
                            }
                        ]
                    }
                ],
                acquired_delegated_frozen_balance_for_bandwidth: 2200000000,
                assetV2: [
                    {
                        key: '1002544',
                        value: 0
                    },
                    {
                        key: '1002517',
                        value: 0
                    },
                    {
                        key: '1002573',
                        value: 0
                    },
                    {
                        key: '1002000',
                        value: 6128
                    },
                    {
                        key: '1002597',
                        value: 0
                    },
                    {
                        key: '1002636',
                        value: 0
                    },
                    {
                        key: '1002672',
                        value: 0
                    },
                    {
                        key: '1002721',
                        value: 0
                    },
                    {
                        key: '1002413',
                        value: 0
                    },
                    {
                        key: '1002736',
                        value: 0
                    },
                    {
                        key: '1002742',
                        value: 0
                    },
                    {
                        key: '1002757',
                        value: 0
                    },
                    {
                        key: '1002670',
                        value: 0
                    },
                    {
                        key: '1002775',
                        value: 0
                    },
                    {
                        key: '1002798',
                        value: 0
                    },
                    {
                        key: '1002814',
                        value: 0
                    },
                    {
                        key: '1000226',
                        value: 0
                    },
                    {
                        key: '1002830',
                        value: 0
                    },
                    {
                        key: '1002845',
                        value: 0
                    },
                    {
                        key: '1002858',
                        value: 0
                    },
                    {
                        key: '1002876',
                        value: 0
                    },
                    {
                        key: '1002881',
                        value: 0
                    },
                    {
                        key: '1002897',
                        value: 0
                    },
                    {
                        key: '1002907',
                        value: 0
                    },
                    {
                        key: '1002926',
                        value: 0
                    },
                    {
                        key: '1002927',
                        value: 0
                    },
                    {
                        key: '1002962',
                        value: 0
                    },
                    {
                        key: '1002999',
                        value: 0
                    },
                    {
                        key: '1000001',
                        value: 0
                    },
                    {
                        key: '1003049',
                        value: 0
                    },
                    {
                        key: '1001854',
                        value: 0
                    },
                    {
                        key: '1002939',
                        value: 0
                    },
                    {
                        key: '1003288',
                        value: 0
                    },
                    {
                        key: '1003282',
                        value: 0
                    },
                    {
                        key: '1003406',
                        value: 1
                    }
                ],
                free_asset_net_usageV2: [
                    {
                        key: '1002544',
                        value: 0
                    },
                    {
                        key: '1002517',
                        value: 0
                    },
                    {
                        key: '1002573',
                        value: 0
                    },
                    {
                        key: '1002000',
                        value: 0
                    },
                    {
                        key: '1002597',
                        value: 0
                    },
                    {
                        key: '1002636',
                        value: 0
                    },
                    {
                        key: '1002672',
                        value: 0
                    },
                    {
                        key: '1002721',
                        value: 0
                    },
                    {
                        key: '1002413',
                        value: 0
                    },
                    {
                        key: '1002736',
                        value: 0
                    },
                    {
                        key: '1002742',
                        value: 0
                    },
                    {
                        key: '1002757',
                        value: 0
                    },
                    {
                        key: '1002670',
                        value: 0
                    },
                    {
                        key: '1002775',
                        value: 0
                    },
                    {
                        key: '1002798',
                        value: 0
                    },
                    {
                        key: '1002814',
                        value: 0
                    },
                    {
                        key: '1000226',
                        value: 0
                    },
                    {
                        key: '1002830',
                        value: 0
                    },
                    {
                        key: '1002845',
                        value: 0
                    },
                    {
                        key: '1002858',
                        value: 0
                    },
                    {
                        key: '1002876',
                        value: 0
                    },
                    {
                        key: '1002881',
                        value: 0
                    },
                    {
                        key: '1002897',
                        value: 0
                    },
                    {
                        key: '1002907',
                        value: 0
                    },
                    {
                        key: '1002926',
                        value: 0
                    },
                    {
                        key: '1002927',
                        value: 0
                    },
                    {
                        key: '1002962',
                        value: 0
                    },
                    {
                        key: '1002999',
                        value: 0
                    },
                    {
                        key: '1000001',
                        value: 0
                    },
                    {
                        key: '1003049',
                        value: 0
                    },
                    {
                        key: '1001854',
                        value: 0
                    },
                    {
                        key: '1002939',
                        value: 0
                    },
                    {
                        key: '1003288',
                        value: 0
                    },
                    {
                        key: '1003282',
                        value: 0
                    },
                    {
                        key: '1003406',
                        value: 0
                    }
                ]
            },
            {
                address: 'TSFKJsiJrt6bUTmxS1F1Fmv6UUYdGVB9Ws',
                create_time: 1600371882000,
                latest_opration_time: 1602833946000,
                latest_consume_free_time: 1602833946000,
                account_resource: {},
                owner_permission: {
                    permission_name: 'owner',
                    threshold: 1,
                    keys: [
                        {
                            address: 'TSFKJsiJrt6bUTmxS1F1Fmv6UUYdGVB9Ws',
                            weight: 1
                        }
                    ]
                },
                active_permission: [
                    {
                        type: 'Active',
                        id: 2,
                        permission_name: 'active',
                        threshold: 1,
                        operations: '7fff1fc0033e0300000000000000000000000000000000000000000000000000',
                        keys: [
                            {
                                address: 'TSFKJsiJrt6bUTmxS1F1Fmv6UUYdGVB9Ws',
                                weight: 1
                            }
                        ]
                    }
                ]
            }
        ],
        error: false,
        loading: false,
        sortConfig: null,
    },
    reducers: {
        fetchWallets: state => {

        },

        fetchWalletSuccess: (state, { payload: wallet }) => {
            state.wallets.push(wallet);
        },

        sortWallets: (state, { payload: sortConfig }) => {
            state.sortConfig = sortConfig;
            if (sortConfig !== null) {
                state.wallets.sort((a, b) => {
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

    },
});

export const selectWallets = state => state.wallets.wallets;
export const selectSortConfig = state => state.wallets.sortConfig;
// export const selectAddressesValidationComplete = state => state.inputAddresses.validationComplete;

export const { fetchWallets,
    fetchWalletSuccess,
    sortWallets,
} = outputWalletsSlice.actions;

export default outputWalletsSlice.reducer;