import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({

    box:{
        [theme.breakpoints.only('md')]:{
            padding:"0px 10px"
        },
    }
}))

export default styles;
