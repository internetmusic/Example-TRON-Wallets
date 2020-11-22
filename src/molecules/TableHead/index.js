import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledHeadCell, StyledButton, SortButton, FilterInput, StyledHeadCellWrapper } from "./styled";
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from "@material-ui/core/IconButton";
import { selectSortConfig, filterWallets, sortWallets } from "../../slices/outputWalletsSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { usePrevious } from "./usePrevious";

const TableHead = ({ sortByAddress, sortByBalance, sortByCreateTime, sortByLastOperation }) => {

    const dispatch = useDispatch();

    const sortConfig = useSelector(selectSortConfig);
    const [filterConfig, setFilterConfig] = useState({
        filter: null,
        filterBy: null
    });

    const filterConfigHandling = key => {
        setFilterConfig(prevState => {
            if (prevState.filterBy === key) {
                return ({
                    filter: !prevState.filter,
                    filterBy: key,
                })
            } else {
                return ({
                    filter: true,
                    filterBy: key,
                })
            }
        });
    }



    const filterWalletsHandling = (key, content) => {
        dispatch(filterWallets({
            key: key,
            content: content
        }))

        if (sortConfig) {
            dispatch(sortWallets(sortConfig))
        }
    };

    const prevFilterBy = usePrevious(filterConfig.filterBy);

    useEffect(() => {
        if ((!filterConfig.filter && filterConfig.filter !== null)) {
            filterWalletsHandling(prevFilterBy, "")
        }

        if (prevFilterBy !== filterConfig.filterBy && (prevFilterBy !== null && prevFilterBy !== undefined)) {
            filterWalletsHandling(prevFilterBy, "")
        }

    }, [filterConfig.filter, filterConfig.filterBy, prevFilterBy])

    return (
        <thead>
            <tr>
                <StyledHeadCell>
                    Pos.
                </StyledHeadCell>

                <StyledHeadCell>
                    <StyledHeadCellWrapper>
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
                        <IconButton onClick={() => { filterConfigHandling("address") }}>
                            <FilterListIcon />
                        </IconButton>
                    </StyledHeadCellWrapper>
                    {(filterConfig.filter && filterConfig.filterBy === "address")
                        ? <FilterInput onChange={(event) => filterWalletsHandling("address", event.target.value)} />
                        : null}
                </StyledHeadCell>

                <StyledHeadCell>
                    <StyledHeadCellWrapper>
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
                        <IconButton onClick={() => { filterConfigHandling("balance") }}>
                            <FilterListIcon />
                        </IconButton >
                    </StyledHeadCellWrapper>
                    {(filterConfig.filter && filterConfig.filterBy === "balance")
                        ? <FilterInput onChange={(event) => filterWalletsHandling("balance", event.target.value)} />
                        : null}
                </StyledHeadCell>

                <StyledHeadCell>
                    <StyledHeadCellWrapper>
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
                        <IconButton onClick={() => { filterConfigHandling("create_time") }}>
                            <FilterListIcon />
                        </IconButton>
                    </StyledHeadCellWrapper>
                    {(filterConfig.filter && filterConfig.filterBy === "create_time")
                        ? <FilterInput onChange={(event) => filterWalletsHandling("create_time", event.target.value)} />
                        : null}
                </StyledHeadCell>

                <StyledHeadCell>
                    <StyledHeadCellWrapper>
                        <StyledButton onClick={sortByLastOperation}>
                            Latest Operation Time
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
                        <IconButton onClick={() => { filterConfigHandling("latest_opration_time") }}>
                            <FilterListIcon />
                        </IconButton>
                    </StyledHeadCellWrapper>
                    {(filterConfig.filter && filterConfig.filterBy === "latest_opration_time")
                        ? <FilterInput onChange={(event) => filterWalletsHandling("latest_opration_time", event.target.value)} />
                        : null}
                </StyledHeadCell>
            </tr>
        </thead>
    );
};

export default TableHead;

