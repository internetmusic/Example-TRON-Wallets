import React from "react";
import { useSelector } from "react-redux";
import { StyledTable, Title } from "./styled";
import TableHead from "../../molecules/TableHead";
import TableBody from "../../molecules/TableBody";
import { selectWallets } from "../../slices/outputWalletsSlice";

const Table = () => {
    const wallets = useSelector(selectWallets);

    return (
        <StyledTable>
            <Title>TRON Wallets</Title>
            <TableHead />
            <TableBody wallets={wallets} />
        </StyledTable>
    );
};

export default Table;
