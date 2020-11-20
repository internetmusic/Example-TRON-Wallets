import React from "react";
import { StyledFieldSet, FieldSetWrapper, RemoveCircle } from "./styled";
import IconButton from "@material-ui/core/IconButton";

const FieldSet = ({ labelName, removePossibility, isOnlyOne }) => {
    return (
        <FieldSetWrapper>
            <StyledFieldSet label={labelName} variant="outlined" placeholder="enter TRON addres..." />
            <IconButton style={{ visibility: `${!removePossibility && 'hidden'}`, display: `${isOnlyOne && 'none'}` }}>
                <RemoveCircle />
            </IconButton>
        </FieldSetWrapper>
    );
};

export default FieldSet;