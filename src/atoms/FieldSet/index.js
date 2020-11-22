import React from "react";
import { StyledFieldSet, FieldSetWrapper, RemoveCircle } from "./styled";
import IconButton from "@material-ui/core/IconButton";

const FieldSet = ({ labelName, removePossibility, onChange, value, onRemove, error, errorMessage }) => {

    // error and helperText props here are for validation - error indicate error itself and helper text give error message

    // removePossibility props give FieldSet component chance to remove itself from form - first input in form shouldn't 
    // has that functionality 

    return (
        <FieldSetWrapper>
            <StyledFieldSet
                error={error}
                helperText={errorMessage}
                value={value}
                onChange={onChange}
                label={labelName}
                variant="outlined"
                placeholder="enter TRON addres..."
            />
            <IconButton onClick={onRemove} style={{ visibility: `${!removePossibility && 'hidden'}` }}>
                <RemoveCircle />
            </IconButton>
        </FieldSetWrapper>
    );
};

export default FieldSet;