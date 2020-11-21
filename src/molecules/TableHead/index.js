import React from "react";
import { StyledHeadCell } from "./styled";
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from "@material-ui/core/IconButton";

const TableHead = () => {
    return (
        <thead>
            <tr>
                <StyledHeadCell>
                    Pos.
                </StyledHeadCell>
                <StyledHeadCell>
                    Address
                    <div>
                        <IconButton>
                            <SortIcon />
                        </IconButton>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </div>
                </StyledHeadCell>
                <StyledHeadCell>
                    Balance
                    <div>
                        <IconButton>
                            <SortIcon />
                        </IconButton>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </div>
                </StyledHeadCell>
                <StyledHeadCell>
                    Create Time
                    <div>
                        <IconButton>
                            <SortIcon />
                        </IconButton>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </div>
                </StyledHeadCell>
                <StyledHeadCell>
                    Last Operation Time
                    <div>
                        <IconButton>
                            <SortIcon />
                        </IconButton>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </div>
                </StyledHeadCell>
            </tr>
        </thead>
    );
};

export default TableHead;

