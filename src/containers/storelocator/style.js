import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({

    sideContent:{
        paddingLeft:"30px",
        marginBottom:"10px",
        [theme.breakpoints.only('md')]:{
        paddingLeft:"0px",
            
        },
    },
    mainWidths:{
        // width:"1170px",
        paddingRight:"15px",
        paddingLeft:"15px",
        marginLeft:"auto",
        marginRight:"auto",

        padding:"0px 15px",
        [theme.breakpoints.up('lg')]:{
            width:"90%",
        },
        [theme.breakpoints.only('md')]:{
            width:"970px",
        },
        [theme.breakpoints.only('sm')]:{
            width:"750px",
        },

    },
    topPadding:{
        padding:"40px 0px",

    }
}))
export default styles;