import styled, { css } from "styled-components";
import FilterListIcon from '@material-ui/icons/FilterList';
import { withStyles } from '@material-ui/core/styles';

export const StyledHeadCell = styled.th`
    border: 1px solid ${({theme})=>theme.colors.tableHeadCell};
    padding: 10px;
    text-align: center;
`;

export const StyledHeadCellWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SortButton = styled.button`
    background-color: unset;
    border: none;
    color: ${({theme})=>theme.colors.tableHeadText};
    opacity: 0;
    transition: all 0.15s ease-in-out;
    cursor: pointer;

    &:active, &:link, &:visited, &:enabled{
        outline: none;
    }

   
    ${({ sorted }) => sorted && css`
        opacity: 1;
    `} 
`;

export const StyledButton = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 20px;
    color: ${({theme})=>theme.colors.tableHeadText};

    &:hover ${SortButton}{
        opacity: 1;
    }

    @media(max-width: ${({theme})=>theme.breakPoints.tabletBreakPoint}){
        font-size: 12px;
    }
`;

export const FilterInput = styled.input`
    display: block;
    margin: 0 auto;
`;

export const FilterListButton = withStyles({
    root: {
        color: "white",
    }
})(FilterListIcon);