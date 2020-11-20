import styled from "styled-components";

export const BackgroundImage = styled.div`
    position:absolute;
    min-width:100%;
    min-height: 100%;
    background: url(${({ backgroundURL }) => backgroundURL});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const BackgroundFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.colors.filter};
    `;
