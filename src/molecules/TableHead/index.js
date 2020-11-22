import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledHeadCell, StyledButton, SortButton, FilterInput, StyledHeadCellWrapper, FilterListButton } from "./styled";
import { selectSortConfig, filterWallets, sortWallets } from "../../slices/outputWalletsSlice"
import { usePrevious } from "./usePrevious";

const TableHead = ({ sortByAddress, sortByBalance, sortByCreateTime, sortByLastOperation }) => {
    //take variables from libraries and state

    const dispatch = useDispatch();
    const sortConfig = useSelector(selectSortConfig);

    //defined of filterConfig state variable which should be use to hold filter configuration parameters
    //filter indicates if filtering is on or off; filterBy indicates by which wallets has been filtering

    const [filterConfig, setFilterConfig] = useState({
        filter: null,
        filterBy: null
    });

    //prevFilterBy give previous value of filterBy from filterConfig

    const prevFilterBy = usePrevious(filterConfig.filterBy);

    //filterConfigHandling - define handlig of filterConfig change, it should toggle filter when we want to
    //turn off or turn on filtering in one TRON table columns, but when we change filtering from one column
    //to another it should set filter to true and in every case filterBy should be set to key by which we
    //want to filter

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

    //filterWalletsHandling - define handlig of filtering, when we put something into filter input.
    //It passes key (by which we filter) and content (what we have in filter input) to filterWallets method
    //in reducer. Moreover if we filter with sorting on - on every filter wallets have been sorted

    const filterWalletsHandling = (key, content) => {
        dispatch(filterWallets({
            key: key,
            content: content
        }))

        if (sortConfig) {
            dispatch(sortWallets(sortConfig))
        }
    };

    //this useEffect handles filter clealning when we turn off filtering or when we change filter column from one to another

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
                            <FilterListButton />
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
                            <FilterListButton />
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
                            <FilterListButton />
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
                            <FilterListButton />
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

