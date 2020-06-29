import React,{useState} from 'react'
import styles from './style'
import { Grid,Typography,Checkbox } from "@material-ui/core";

export default function DiamondRange(props){

    const [state,setState]= useState({
        new:"cut"
    })
    const handleClick=(value)=>{
        setState({
            new:value
        })
    }
    
    const value=props.value

    // const handleClick1=()=>{
    //     return cut
    // }

    const classes=styles();
    return(
        <Grid container className={classes.mainContainer}>
            <Grid item onClick={()=>handleClick('cut')} className={classes.containersBor}  xs={12} lg={3}>
                <Grid item className={classes.numEffect}>
                    4
              </Grid>
                <Typography  className={classes.text}>Select Cut</Typography>
            </Grid>
            <Grid item onClick={()=>handleClick("clarity")} className={classes.containersBor} xs={12} lg={3}>
                <Grid item className={classes.numEffect}>
                    5
              </Grid>
                <Typography className={classes.text}>Select Clarity</Typography>
            </Grid>
            <Grid item onClick={()=>handleClick("colour")} className={classes.containersBor} xs={12} lg={3}>
                <Grid item className={classes.numEffect}>
                    6
              </Grid>
                <Typography className={classes.text}>Select Colour</Typography>
            </Grid>
            <Grid item onClick={()=>handleClick("certifiy")} className={classes.containersBor} xs={12} lg={3}>
                <Grid item className={classes.numEffect}>
                    7
              </Grid>
                <Typography className={classes.text}>Select Certificate</Typography>
            </Grid>
            <Grid container xs={12}>
                {value && value[state.new] && value[state.new].map((val,key)=>
                 <Grid item className={classes.containers} xs={3} lg={2}>
                  <Checkbox
                //   defaultChecked
                  size="small"
                  value="small"
                  inputProps={{ 'aria-label': 'checkbox with small size' }}
                />
                <Typography style={{alignItems:"center",display:"flex"}}>{val.name}</Typography>
                 
             </Grid>
                // <Grid item xs={12} style={{float:"left"}}>
                
                // </Grid>
                )}
            </Grid>
        </Grid>
    )
}