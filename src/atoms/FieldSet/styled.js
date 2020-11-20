import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircleTwoTone";
import { withStyles } from '@material-ui/core/styles';

export const FieldSetWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const StyledFieldSet = withStyles({
    root: {
        margin: 10,
        width: "100%",

        '& input': {
            color: 'white',
            fontSize: 16,
            display: 'block',
        },

        '& label': {
            color: "gray",
        },

        '& label.Mui-focused': {
            color: 'hsl(297, 34%, 67%)',
        },

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'hsl(297, 34%, 57%)',
                borderRadius: 40,
            },
            '&:hover fieldset': {
                borderColor: 'hsl(297, 34%, 67%)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'hsl(297, 34%, 67%)',
            },
        },
    },
})(TextField);

export const RemoveCircle = withStyles({
    root: {
        color: "red",
    }
})(RemoveCircleIcon);

