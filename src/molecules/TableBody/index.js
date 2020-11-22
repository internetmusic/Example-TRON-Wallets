import React from "react";
import { StyledCell } from "./styled";

const TableBody = ({ wallets }) => {

    //getMyDateString is function which change format of miliseconds from 1970 (it goes from API) to LocalDateString form

    const getMyDateString = (myDate) => {
        const date = new Date(myDate);
        return date.toLocaleDateString();
    }

    return (
        <tbody>
            {wallets ? (
                wallets.map((wallet, index) => (
                    <tr key={wallet.address}>
                        <StyledCell>{index + 1}</StyledCell>
                        <StyledCell>{wallet.address}</StyledCell>
                        <StyledCell>{wallet.balance}</StyledCell>
                        <StyledCell>{getMyDateString(wallet.create_time)}</StyledCell>
                        <StyledCell>{getMyDateString(wallet.latest_opration_time)}</StyledCell>
                    </tr>
                ))
            ) : null}

        </tbody>
    );
};

export default TableBody;