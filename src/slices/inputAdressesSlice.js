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
                    validationResult: null,
                    validationMessage: null,
                },
            ],

        validationComplete: false,
    },
    reducers: {
        addAddress: state => {
            const id = state.inputAddresses[state.inputAddresses.length - 1].id + 1;
            state.inputAddresses.push({
                id,
                address: "",
                removable: true,
                validationResult: null,
                validationMessage: null,
            })
        },

        changeAddress: (state, { payload }) => {
            state.inputAddresses.find(address => address.id === payload.id).address = payload.address;
        },

        removeAddress: (state, { payload: id }) => {
            state.inputAddresses = state.inputAddresses.filter(address => address.id !== id);
        },

        resetAddresses: state => {
            state.inputAddresses = [
                {
                    id: 0,
                    address: "",
                    removable: false,
                    validationResult: null,
                    validationMessage: null,
                },
            ];

            state.validationComplete = false;
        },

        validationStart: state => {

        },

        validationMake: (state, { payload }) => {
            state.inputAddresses.find(address => address.id === payload.id).validationResult = payload.validationResult;
            state.inputAddresses.find(address => address.id === payload.id).validationMessage = payload.validationMessage;
        },

        setValidationComplete: state => {
            state.validationComplete = true;
        }
    },
});

export const selectAddressState = state => state.inputAddresses.inputAddresses;
export const selectAddressesValidationComplete = state => state.inputAddresses.validationComplete;

export const { addAddress,
    changeAddress,
    removeAddress,
    validationStart,
    validationMake,
    setValidationComplete,
    resetAddresses } = inputAddressesSlice.actions;

export default inputAddressesSlice.reducer;