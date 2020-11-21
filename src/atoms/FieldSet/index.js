import React from "react";
import { StyledFieldSet, FieldSetWrapper, RemoveCircle } from "./styled";
import IconButton from "@material-ui/core/IconButton";

const FieldSet = ({ labelName, removePossibility, isOnlyOne, onChange, value, onRemove }) => {
    return (
        <FieldSetWrapper>
            <StyledFieldSet value={value} onChange={onChange} label={labelName} variant="outlined" placeholder="enter TRON addres..." />
            <IconButton onClick={onRemove} style={{ visibility: `${!removePossibility && 'hidden'}`}}>
                <RemoveCircle />
            </IconButton>
        </FieldSetWrapper>
    );
};

export default FieldSet;