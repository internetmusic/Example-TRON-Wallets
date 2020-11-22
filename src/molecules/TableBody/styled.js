import styled from "styled-components";

export const StyledCell = styled.td`
    border: 1px solid ${({theme})=>theme.colors.tableCell};
    padding: 10px;
    text-align: center;

    @media(max-width: ${({theme})=>theme.breakPoints.tabletBreakPoint}){
        font-size: 10px;
    }
`;