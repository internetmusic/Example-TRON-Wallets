import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTable, Title, TableWrapper } from "./styled";
import TableHead from "../../molecules/TableHead";
import TableBody from "../../molecules/TableBody";
import { sortWallets, selectFilteredWallets, selectSortConfig, resetWallets } from "../../slices/outputWalletsSlice";
import { resetAddresses } from "../../slices/inputAdressesSlice";
import { useHistory } from "react-router-dom";
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import Button from "../../atoms/Button";

const Table = () => {
    //take variables from libraries and state

    const history = useHistory();
    const dispatch = useDispatch();
    const filteredWallets = useSelector(selectFilteredWallets);
    const sortConfig = useSelector(selectSortConfig);

    //requestSort - return key by which we want to sort values in table and also direction, so if we want sort ascending
    //or descending. Start direction of sorting is ascending and every next change is direction toggle

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig !== null) {
            if (sortConfig.key === key && sortConfig.direction === 'ascending') {
                direction = 'descending';
            }
        }
        return ({ key, direction });
    };

    //backToFormHandler handles situation when we want go back from table to form - it first reset input old addresses from form
    //then change URL and when it changed URL then reset also wallets from table

    const backToFormHandler = () => {
        dispatch(resetAddresses());
        history.replace("/form");
        dispatch(resetWallets());
    };

    return (
        <TableWrapper>
            <StyledTable>
                <Title>TRON Wallets</Title>
                <TableHead
                    sortByAddress={() => { dispatch(sortWallets(requestSort("address"))) }}
                    sortByBalance={() => { dispatch(sortWallets(requestSort("balance"))) }}
                    sortByCreateTime={() => { dispatch(sortWallets(requestSort("create_time"))) }}
                    sortByLastOperation={() => { dispatch(sortWallets(requestSort("latest_opration_time"))) }}
                />
                <TableBody wallets={filteredWallets} />
                <Button
                    startIcon={<ArrowBackTwoToneIcon />}
                    style={{
                        position: "absolute",
                        top: "-5px",
                        left: 0,
                        height: "30px",
                        fontSize: "12px",
                    }} onClick={backToFormHandler}
                >
                    Back to form
            </Button>
            </StyledTable>
        </TableWrapper>

    );
};

export default Table;
