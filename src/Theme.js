import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {jewelleryTheme} from './jewellery_theme'
import { GlobalContext } from 'context'
let jewellery_theme = createMuiTheme(jewelleryTheme);
let silver_jewellery_theme = createMuiTheme(require('./silver_jewellery_theme.json'));
let jewelleryThemes = responsiveFontSizes(jewellery_theme);
let silverThemes = responsiveFontSizes(silver_jewellery_theme);
// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         // [theme.breakpoints.up('xl')]: {
//         //     zoom: 1.7
//         //   },
//     }
// }));
const Theme = (props) => {
    const { Globalctx } = React.useContext(GlobalContext)
    const theme_func = (props) =>{
        
      
      if(Globalctx && Globalctx.pathName === true ){
        return silverThemes
      }
      else{
        return jewelleryThemes
      }
      
      }
    return (    
                <ThemeProvider theme={theme_func()}>  
                <CssBaseline />     
                        {props.children}
                </ThemeProvider>
        
    )
}
export default Theme;