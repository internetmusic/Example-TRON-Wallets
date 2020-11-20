import React from "react";
import { StyledForm, ButtonsSection } from "./styled";
import FieldSet from "../../atoms/FieldSet";
import Button from "../../atoms/Button";
import AddCircleTwoTon from "@material-ui/icons/AddCircleTwoTone";
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';


const Form = () => {

    return (
        <StyledForm className="example" noValidate autoComplete="off">
            <FieldSet placeholder="placeholder" name="name" isOnlyOne />
            {/* <FieldSet  removePossibility/> */}
            <ButtonsSection>
                <Button startIcon={<AddCircleTwoTon />}>Add new address</Button>
                <Button startIcon={<GetAppTwoToneIcon />}>Download TRONs table</Button>
            </ButtonsSection>
        </StyledForm>
    );
};

export default Form;