import { configureStore } from "@reduxjs/toolkit";
import inputAddressesSlice from "./slices/inputAdressesSlice";

export const store = configureStore({
    reducer: {
        inputAddresses: inputAddressesSlice,
    },
});