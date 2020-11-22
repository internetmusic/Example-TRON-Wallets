import styled from "styled-components";
import Button from "../../atoms/Button";

export const StyledTable = styled.table`
    max-width: 1200px;
    background-color: rgba(26, 33, 45, 0.8);
    border: 1px solid #23B6DB;
    border-radius: 20px;
    padding: 30px;
    border-collapse: collapse;
    color: white;
    position: relative;
`;

export const Title = styled.caption`
    font-size: 30px;
    margin-bottom: 10px;
    color: white;
`;

export const BackButton = styled(Button)`
    position: absolute;
    top: -20px;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: blue;
`;