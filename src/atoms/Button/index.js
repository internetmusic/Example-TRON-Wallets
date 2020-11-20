import React from "react";
import { StyledButton } from "./styled";

const Button = ({ children, onClick, startIcon }) => {
    return (
        <StyledButton variant="outlined" startIcon={startIcon ? startIcon : null} onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;