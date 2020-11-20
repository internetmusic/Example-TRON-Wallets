import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const StyledButton = withStyles({
    root: {
        margin: 10,
        padding: 10,
        color: "hsl(192, 72%, 50%)",
        borderColor: "hsl(192, 72%, 50%)",
        borderRadius: 20,

        '&:hover': {
            color: "hsl(192, 72%, 65%)",
            borderColor: "hsl(192, 72%, 65%)",
        },

        '&:active': {
            color: "hsl(192, 72%, 80%)",
            borderColor: "hsl(192, 72%, 80%)",
        }
    },
})(Button);