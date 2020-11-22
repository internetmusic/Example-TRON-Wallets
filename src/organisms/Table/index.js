import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTable, Title, BackButton } from "./styled";
import TableHead from "../../molecules/TableHead";
import TableBody from "../../molecules/TableBody";
import { sortWallets, selectFilteredWallets, selectSortConfig } from "../../slices/outputWalletsSlice";
import { resetAddresses } from "../../slices/inputAdressesSlice";
import { useHistory } from "react-router-dom";
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';

const Table = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const filteredWallets = useSelector(selectFilteredWallets);
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

    const backToFormHandler = () => {
        dispatch(resetAddresses());
        history.replace("/form");
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
            <TableBody wallets={filteredWallets} />
            <BackButton
                startIcon={<ArrowBackTwoToneIcon/>}
                style={{
                    position: "absolute",
                    top: "-20px",
                    left: 0,
                    height: "40px",
                }} onClick={backToFormHandler}
            >
                Back to form
            </BackButton>
        </StyledTable>

    );
};

export default Table;
