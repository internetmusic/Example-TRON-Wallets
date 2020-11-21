import React from "react";
import { useSelector } from "react-redux";
import { StyledHeadCell, StyledButton, SortButton } from "./styled";
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from "@material-ui/core/IconButton";
import { selectSortConfig } from "../../slices/outputWalletsSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const TableHead = ({ sortByAddress, sortByBalance, sortByCreateTime, sortByLastOperation }) => {

    const sortConfig = useSelector(selectSortConfig);

    return (
        <thead>
            <tr>
                <StyledHeadCell>
                    Pos.
                </StyledHeadCell>

                <StyledHeadCell>
                    <StyledButton onClick={sortByAddress}>
                        Address
                        <SortButton
                            sorted={sortConfig?.key === "address"}
                        >
                            <FontAwesomeIcon
                                icon={sortConfig?.key === "address" && sortConfig?.direction === "descending"
                                    ? faSortDown
                                    : faSortUp}
                            />
                        </SortButton>
                    </StyledButton>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </StyledHeadCell>

                <StyledHeadCell>
                    <StyledButton onClick={sortByBalance}>
                        Balance
                        <SortButton
                            sorted={sortConfig?.key === "balance"}
                        >
                            <FontAwesomeIcon
                                icon={sortConfig?.key === "balance" && sortConfig?.direction === "descending"
                                    ? faSortDown
                                    : faSortUp}
                            />
                        </SortButton>
                    </StyledButton>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </StyledHeadCell>

                <StyledHeadCell>
                    <StyledButton onClick={sortByCreateTime}>
                        Create Time
                        <SortButton
                            sorted={sortConfig?.key === "create_time"}
                        >
                            <FontAwesomeIcon
                                icon={sortConfig?.key === "create_time" && sortConfig?.direction === "descending"
                                    ? faSortDown
                                    : faSortUp}
                            />
                        </SortButton>
                    </StyledButton>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </StyledHeadCell>
                
                <StyledHeadCell>
                    <StyledButton onClick={sortByLastOperation}>
                        Create Time
                        <SortButton
                            sorted={sortConfig?.key === "latest_opration_time"}
                        >
                            <FontAwesomeIcon
                                icon={sortConfig?.key === "latest_opration_time" && sortConfig?.direction === "descending"
                                    ? faSortDown
                                    : faSortUp}
                            />
                        </SortButton>
                    </StyledButton>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </StyledHeadCell>
            </tr>
        </thead>
    );
};

export default TableHead;

