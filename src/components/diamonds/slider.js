import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import { Range } from 'rc-slider';
import "rc-slider/assets/index.css";
export default function Sliders(props) {
  
    const [state,setState]=useState({
      value:["100","500"]
    })
    const handleRange=(e)=>{
      
      setState({
        ...state,value:e
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
        
        1000: "1000"
      };
      return (
        
        <Grid xs={12}>
                 
                        <Range
                        {...settings}
               marks={marks}
               className="rangeDotStyle"
               allowCross={false} 
               value={[state.value[0],state.value[1]]}
               onChange={(e)=>handleRange(e)}
               trackStyle={[{ backgroundColor: '#000', height: 10}]}
               handleStyle={[{ backgroundColor: '#64b3e8', height: 20, width: 20 }, { backgroundColor: '#64b3e8', height: 20, width: 20 }]}
               railStyle={{ backgroundColor: "#D3D3D3", height: 10 }}
               />
              
                
        </Grid>
    )
    }