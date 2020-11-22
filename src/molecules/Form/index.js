import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AddCircleTwoTon from "@material-ui/icons/AddCircleTwoTone";
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';
import { StyledForm, ButtonsSection } from "./styled";
import FieldSet from "../../atoms/FieldSet";
import Button from "../../atoms/Button";
import {
    addAddress,
    changeAddress,
    removeAddress,
    validationStart,
    selectAddressState,
    selectAddressesValidationComplete,
} from "../../slices/inputAdressesSlice";


const Form = () => {
    //take variables from libraries and state

    const dispatch = useDispatch();
    const inputAddresses = useSelector(selectAddressState);
    const validationComplete = useSelector(selectAddressesValidationComplete);

    // onInputChange dispatch every change of one of inputs to state 

    const onInputChange = (id, event) => {
        dispatch(changeAddress({
            id: id,
            address: event.target.value
        }));
    };

    // onInputRemove dispatch every remove of input itself to state 

    const onInputRemove = id => {
        dispatch(removeAddress(id));
    };

    // goToTronTable starts validation of form and when validation is complete it change validationComplete in state to true
    // which redner Redirect in component below to page with table

    const goToTronTable = () => {
        dispatch(validationStart());
    }

    return (
        <StyledForm className="example" noValidate autoComplete="off">
            {inputAddresses.map(address => (
                <FieldSet
                    error={address.validationResult === null ? false : !address.validationResult}
                    errorMessage={address.validationResult === false ? address.validationMessage : null}
                    labelName="TRON Address"
                    onChange={event => { onInputChange(address.id, event) }}
                    onRemove={() => onInputRemove(address.id)}
                    key={address.id}
                    placeholder="placeholder"
                    name="name"
                    removePossibility={address.removable}
                />
            ))}
            <ButtonsSection>
                <Button
                    onClick={() => { dispatch(addAddress()) }}
                    startIcon={<AddCircleTwoTon />}
                >
                    Add new address
                    </Button>
                <Button
                    onClick={goToTronTable}
                    startIcon={<GetAppTwoToneIcon />}
                >
                    Download TRONs table
                    </Button>
            </ButtonsSection>
            {validationComplete && <Redirect to="/table" />}
        </StyledForm>
    );
};

export default Form;