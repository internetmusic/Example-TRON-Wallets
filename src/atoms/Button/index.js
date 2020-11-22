import React from "react";
import { StyledButton } from "./styled";

const Button = ({ children, onClick, startIcon, style }) => {

    // props startIcon here is for Material-UI Icon component usage
    
    return (
        <StyledButton
            style={style}
            variant="outlined"
            startIcon={startIcon ? startIcon : null}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;