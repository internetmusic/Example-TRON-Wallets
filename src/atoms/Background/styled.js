import styled from "styled-components";

export const BackgroundImage = styled.div`
    min-height: 100vh;
    background: url(${({ backgroundURL }) => backgroundURL});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const BackgroundFilter = styled.div`
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.colors.filter};
    `;
