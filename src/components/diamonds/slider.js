import React, { useState } from 'react'
import styles from './style'
import { Grid, Typography } from "@material-ui/core";
import Slider, { Range } from 'rc-slider';
import "rc-slider/assets/index.css";
export default function Sliders(props) {
    const classes = styles();
  const value=[]
    const [state,setState]=useState({
      value:["100","500"]
    })
    const handleRange=(e)=>{
      setState({
        e:value
      })
    }
    const settings = {
        max: 1000,
        min: 0,
        defaultValue: 0,
        handleStyle: {
          borderColor: "#B2D2CE",
          height: 15,
          width: 15,
          marginTop: -3,
          backgroundColor: "#00695C"
        }
      };
      const marks = {
        0: " 0",
        // 5: "0-5",
        // 20: "6-20",
        // 30: "21-30",
        1000: "1000"
      };
      // alert(JSON.stringify(state.e[0]))
      return (
        
        <Grid xs={12}>
                    {/* <div className={classes.slider_wrapper}> */}
                        {/* <div className={classes.classesslider_range}></div> */}
                        {/* <div style={{ paddingRight: '15px' }}> */}
                        <Range
                        {...settings}
               marks={marks}
               className="rangeDotStyle"
               allowCross={false} 
               value={[state.value[0],state.value[1]]}
               onChange={(e)=>handleRange(state.e)}
               trackStyle={[{ backgroundColor: '#000', height: 10}]}
               handleStyle={[{ backgroundColor: '#64b3e8', height: 20, width: 20 }, { backgroundColor: '#64b3e8', height: 20, width: 20 }]}
               railStyle={{ backgroundColor: "#D3D3D3", height: 10 }}
               />
               {/* <p style={{fontSize: "16px", color: "#000", fontWeight: "600"}}>{props.range.toString().replace("," , " - ")}</p> */}
                        {/* </div> */}
                    {/* </div> */}
                
        </Grid>
    )
    }