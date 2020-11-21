import { createSlice } from "@reduxjs/toolkit";

const inputAddressesSlice = createSlice({
    name: "inputAddresses",
    initialState: {
        inputAddresses:
            [
                {
                    id: 0,
                    address: "",
                    removable: false,
                },
            ],
    },
    reducers: {
        addAddress: state => {
            const id = state.inputAddresses[state.inputAddresses.length - 1].id + 1;
            state.inputAddresses.push({
                id,
                address: "",
                removable: true,
            })
        },

        changeAddress: (state, { payload }) => {
            state.inputAddresses.find(address => address.id === payload.id).address = payload.address;
        },

        removeAddress: (state, { payload: id }) => {
            state.inputAddresses = state.inputAddresses.filter(address => address.id !== id);
        },
    },
});

export const selectAddressState = state => state.inputAddresses.inputAddresses;

export const { addAddress, changeAddress, removeAddress } = inputAddressesSlice.actions;

export default inputAddressesSlice.reducer;