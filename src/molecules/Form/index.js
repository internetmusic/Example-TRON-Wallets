import React from "react";
import { StyledForm, ButtonsSection } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import AddCircleTwoTon from "@material-ui/icons/AddCircleTwoTone";
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';
import FieldSet from "../../atoms/FieldSet";
import Button from "../../atoms/Button";
import { addAddress, changeAddress, removeAddress, validationStart, selectAddressState } from "../../slices/inputAdressesSlice";


const Form = () => {
    const dispatch = useDispatch();
    const inputAddresses = useSelector(selectAddressState);

    const onInputChange = (id, event) => {
        dispatch(changeAddress({
            id: id,
            address: event.target.value
        }));
    };

    const onInputRemove = id => {
        dispatch(removeAddress(id));
    };

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
                <Button onClick={() => { dispatch(addAddress()) }} startIcon={<AddCircleTwoTon />}>Add new address</Button>
                <Button onClick={() => { dispatch(validationStart()) }} startIcon={<GetAppTwoToneIcon />}>Download TRONs table</Button>
            </ButtonsSection>
        </StyledForm>
    );
};

export default Form;