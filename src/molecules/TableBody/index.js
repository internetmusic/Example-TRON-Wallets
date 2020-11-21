import React from "react";
import { StyledCell } from "./styled";

const TableBody = ({ wallets }) => {

    const getMyDateString = (myDate) => {
        const date = new Date(myDate);
        return date.toLocaleDateString();
    }

    return (
        <tbody>
            {wallets ? (
                wallets.map((wallet, index) => (
                    <tr>
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