import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTable, Title } from "./styled";
import TableHead from "../../molecules/TableHead";
import TableBody from "../../molecules/TableBody";
import { selectWallets, sortWallets, selectSortConfig } from "../../slices/outputWalletsSlice";

const Table = () => {
    const dispatch = useDispatch();
    const wallets = useSelector(selectWallets);
    const sortConfig = useSelector(selectSortConfig);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig !== null) {
            if (sortConfig.key === key && sortConfig.direction === 'ascending') {
                direction = 'descending';
            }
        }
        return ({ key, direction });
    }

    return (
        <StyledTable>
            <Title>TRON Wallets</Title>
            <TableHead
                sortByAddress={() => { dispatch(sortWallets(requestSort("address"))) }}
                sortByBalance={() => { dispatch(sortWallets(requestSort("balance"))) }}
                sortByCreateTime={() => { dispatch(sortWallets(requestSort("create_time"))) }}
                sortByLastOperation={() => { dispatch(sortWallets(requestSort("latest_opration_time"))) }}
            />
            <TableBody wallets={wallets} />
        </StyledTable>
    );
};

export default Table;
