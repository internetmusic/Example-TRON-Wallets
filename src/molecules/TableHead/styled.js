import styled, { css } from "styled-components";
import ascendingIcon from "../../assets/images/ascendingIcon.png";
import descendingIcon from "../../assets/images/descendingIcon.png";

export const StyledHeadCell = styled.th`
    border: 1px solid #23B6DB;
    padding: 10px;
    text-align: center;
`;

export const SortButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: unset;
    border: none;
    color: white;
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

export const StyledButton = styled.button`
    border: none;
    background-color: unset;
    cursor: pointer;
    font-size: 20px;

    &:hover ${SortButton}{
        opacity: 1;
    }
`;