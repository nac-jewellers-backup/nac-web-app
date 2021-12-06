import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    paddingsss:{
        padding:"40px 0px",
        width:"100%",
        [theme.breakpoints.only('xs')]:{
            padding:"10px 0px",

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
            width:"95%",
        },
        [theme.breakpoints.only('md')]:{
            width:"970px",
        },
        [theme.breakpoints.only('sm')]:{
            width:"750px",
        },

    },
    subWidth:{
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto",
        [theme.breakpoints.only('xs')]:{
            width:"90%",
        },

    },
    subWidths:{
        width:"25%",
        float:"left",
        // position:"fixed"
    },
    rightContent:{
        width:"100%",
        // padding:"0px 20px",
    },
    mainContent:{
    
    },
    sideContent:{
        paddingLeft:"20px",
        marginBottom:"10px",
        paddingRight:"20px",
        [theme.breakpoints.only('md')]:{
        paddingLeft:"0px",
            
        },
    },



}))
export default styles;