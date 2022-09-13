import React from "react";
import { Grid, Hidden,Card,CardMedia,CardContent,CardActionArea,CardActions,Radio,RadioGroup,ListItemText,Checkbox,MenuItem,Select,Button, Typography, Box, CardHeader,FormControl,FormControlLabel} from "@material-ui/core";
import { Input } from "components/InputComponents/TextField/Input";
import expstyles from "./experienceStyle";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { API_URL } from "config";
import { GET_DETAILS } from "queries/experience";
import { useNetworkRequest } from "hooks/index";
import { UPDATE_DETAILS } from "queries/experience";
import FinishCard from "./finish";

const storelocation=[
    {label:"Gold",name:"Gold"},
    {label:"Diamond",name:"Diamond"},
    {label:"Platinum",name:"Platinum"},
]

export default function Detailpage(props) {
    const classes = expstyles();

    const {values} = props

    const [select,setSelect] = React.useState({
      loaction:[],
      productcategory:[],
      metaltype:[],
      timeSlotes:[]
    });

    const [finish,setFinish] = React.useState(false)

    const { data, error, status, loading, makeFetch  } = useNetworkRequest(
      "/get_appointment_time_slots",
      {},
      false
    );


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };

      React.useEffect(()=>{
        fetch(`${API_URL}/graphql`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: GET_DETAILS,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
              setSelect({
                ...select,
                productcategory:data?.data?.product_category?.nodes,
                metaltype:data?.data?.metal_type?.nodes,
                loaction:data?.data?.loactions?.nodes
              })
          });
      },[])

      React.useEffect(()=>{
        var event = new Date(values.date);
        let dated = JSON.stringify(event)
        dated = dated.slice(1,11);
        let Payload={
          "appointment_date": dated,
          "appointment_type_id": props.type == 'alive' ? 1 : props.type == 'lotus' ? 2 : props.type == 'piercing' ? 3 : props.type == 'stones' ? 4 : '',
        }
        makeFetch(Payload)
      },[values.date])

      React.useEffect(()=>{
       if(data?.appointment_slots?.length > 0){
        const Dates =[];
        data.appointment_slots.map((val)=>{
          let obj= {}
          obj.name = `${val.start_time} - ${val.end_time}`;
          obj.label = val.id
          Dates.push(obj)
        })
        setSelect({...select,timeSlotes:Dates})
       }
       else{
         setSelect({...select,timeSlotes:[]})
       }
      },[data])

      const handleDetails=()=>{
        fetch(`${API_URL}/graphql`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: UPDATE_DETAILS,
            variables: {
              "appointment_id": props?.appointmentId,
              "patch": {
                "slotId": values?.timeslot,
                "isItRequired": values?.isItRequired === 'yes' ? true : false,
                "areMoreMembersJoining": values?.are_more_members_joining === 'yes' ? true : false,
                "metalType": values?.metalType,
                "productCategory": values?.productCategory,
                "specialRequests": values?.specialRequests,
              }
            },
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data,"???")
             if(data?.data?.updateAppointmentById?.appointment?.id){
                setFinish(true)
             }
          });
      }

    
    return (
        <>
          {!finish ? <>
          {/* <Box className={classes.back}>
                  <Button variant='contained' onClick={props.back} style={{background:"#B3821F",color:"#fff"}}>Back</Button>
          </Box> */}
          <Grid item lg={5} xl={5} xs={12} sm={12} className={classes.cardSpace}>        
                <Card className={classes.Cardview}>
                    <CardHeader title='Please provide the following details' subheader='and our Helpdesk will contact you for assistance' className={classes.header}/>
                    <CardContent className={classes.viewContent}>
                      <Grid container justifyContent="center" style={{flexDirection:"column",width:"100%",alignItems:"center"}} spacing={1}>

                        {props.type === 'lotus' || props.type ===  'piercing' || props.type === 'stones' ? <>
                        {/* Date */}
                        <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={6}>
                              <h5 className={`title ${classes.normalfonts2}`}>Date :</h5>
                            </Grid>
                            <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              className={classes.inputField}
                              name="date"
                              placeholder="Select Date"
                              disablePast
                              value={props?.values?.date}
                              fullWidth
                              onChange={(value)=>props.handleChange("date", value)}
                            />
                          </MuiPickersUtilsProvider>
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.date && props.values.error.date}
                            </label>
                         </Grid>
                            
                        </Grid>

                         {/* TimeSlot */}
                         <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={6}>
                              <h5 className={`title ${classes.normalfonts2}`}>Timeslot :</h5>
                            </Grid>
                            <Grid item xs={6}>
                            <Select
                              value={props?.values?.timeslot}
                              color="secondary"
                              onChange={(e) =>
                                props.handleChange("timeslot", e.target.value)
                              }
                              fullWidth
                            >
                              {select?.timeSlotes?.length > 0  ? select?.timeSlotes.map((val) => {
                                return (
                                  <MenuItem value={val?.label}>{val?.name}</MenuItem>
                                );
                              }) : <MenuItem style={{color:"#7f8082",fontSize:"14px"}}>{'No Slot available'}</MenuItem>}
                            </Select>
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.timeslot && props.values.error.timeslot}
                            </label>
                         </Grid>
                            
                         </Grid>
                        </> : <>
                        {/* Date */}
                        <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={6}>
                              <h5 className={`title ${classes.normalfonts2}`}>Date :</h5>
                            </Grid>
                            <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              className={classes.inputField}
                              name="date"
                              placeholder="Select Date"
                              disablePast
                              value={props?.values?.date}
                              fullWidth
                              style={{backgroundColor:"fff"}}
                              onChange={(value)=>props.handleChange("date", value)}
                            />
                          </MuiPickersUtilsProvider>
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.date && props.values.error.date}
                            </label>
                         </Grid>
                            
                        </Grid>

                         {/* TimeSlot */}
                         <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={6}>
                              <h5 className={`title ${classes.normalfonts2}`}>Timeslot :</h5>
                            </Grid>
                            <Grid item xs={6}>
                            <Select
                              value={props?.values?.timeslot}
                              color="secondary"
                              onChange={(e) =>
                                props.handleChange("timeslot", e.target.value)
                              }
                              fullWidth
                              className={classes.select}
                            >
                               {select?.timeSlotes?.length > 0  ? select?.timeSlotes.map((val) => {
                                return (
                                  <MenuItem value={val?.label}>{val?.name}</MenuItem>
                                );
                              }) : <MenuItem style={{color:"#7f8082",fontSize:"14px"}}>{'No Slot available'}</MenuItem>}
                            </Select>
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.timeslot && props.values.error.timeslot}
                            </label>
                         </Grid>
                            
                         </Grid>

                          {/* Metal Type */}
                      
                        <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={6}>
                              <h5 className={`title ${classes.normalfonts2}`}>Metal Type :</h5>
                            </Grid>
                            <Grid item xs={6}>
                            <Select
                              value={props?.values?.metalType}
                              color="secondary"
                              onChange={(e) =>
                                props.handleChange("metalType", e.target.value)
                              }
                              className={classes.select}
                              fullWidth
                              multiple
                              renderValue={(selected) => selected.join(', ')}
                              MenuProps={MenuProps}
                            >
                              {select.metaltype.map((val,index) => {
                                return (
                                  <MenuItem key={index} value={val?.name}>
                                  <Checkbox checked={props?.values?.metalType?.some(x => x === val.name)}/>
                                 <ListItemText primary={val?.name} />
                                </MenuItem>
                                );
                              })}
                            </Select>
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.metalType && props.values.error.metalType}
                            </label>
                         </Grid>
                            
                        </Grid> 
                        

                        {/* Product Category */}
                         <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={6}>
                              <h5 className={`title ${classes.normalfonts2}`}>Product Category :</h5>
                              <Typography className={classes.normalfonts2_sub}>{"(select upto 3 products)"}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                  <Select
                                     value={props?.values?.productCategory}
                                     color="secondary"
                                     onChange={(e) =>
                                     props.handleChange("productCategory", e.target.value)
                                     }
                                     fullWidth
                                     className={classes.select}
                                     multiple
                                  
                                     renderValue={(selected) => selected.join(', ')}
                                     MenuProps={MenuProps}
                                    >
                             {select.productcategory.map((val,index) => (
                                 <MenuItem key={index} value={val?.name}>
                                 <Checkbox checked={props?.values?.productCategory?.some(x => x === val.name)}/>
                                 <ListItemText primary={val?.name} />
                                </MenuItem>
                                ))}
                            </Select>
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.productCategory && props.values.error.productCategory}
                            </label>
                         </Grid>
                            
                        </Grid> 
                        

                        {/* Special Request */}
                         <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={6}>
                              <h5 className={`title ${classes.normalfonts2}`}>Special Requests :</h5>
                            </Grid>
                            <Grid item xs={6}>
                            <Input
                                name="specialrequest"
                                isSide
                                value={props?.values?.specialRequests}
                                onChange={(e) => props.handleChange("specialRequests", e.target.value)}
                               />
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.specialRequests && props.values.error.specialRequests}
                            </label>
                         </Grid>
                            
                        </Grid>
                       
                        {/* It support */}
                         <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={8}>
                              <h5 className={`title ${classes.normalfonts2}`}>Do you need IT support :</h5>
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",justifyContent:"flex-end"}}>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="quiz" value={props?.values?.isItRequired} onChange={(e)=> props.handleChange("isItRequired", e.target.value)} style={{flexDirection:"row"}}>
                               <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                               <FormControlLabel value="no" control={<Radio />} label="No" />
                             </RadioGroup>
                            </FormControl>
                           
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.isItRequired && props.values.error.isItRequired}
                            </label>
                         </Grid>
                            
                        </Grid>
                       
                        {/* other options */}
                        <Grid item container xs={12} style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
                            <Grid item xs={8}>
                              <h5 className={`title ${classes.normalfonts2}`}>Will more members will be joining from other locations :</h5>
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",justifyContent:"flex-end"}}>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="quiz" value={props?.values?.are_more_members_joining} onChange={(e)=> props.handleChange("are_more_members_joining", e.target.value)} style={{flexDirection:"row"}}>
                               <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                               <FormControlLabel value="no" control={<Radio />} label="No" />
                             </RadioGroup>
                            </FormControl>
                           
                             <label className="errtext">
                                   {" "}
                                 {props.values.error.are_more_members_joining && props.values.error.are_more_members_joining}
                            </label>
                         </Grid>
                            
                        </Grid>
                        
                        </>}

                        
                        <Grid item xs={12} style={{width:"100%",paddingTop:"15px"}}>
                           <Button variant='contained' onClick={handleDetails} style={{background:"#2F348B",color:"#fff",width:"inherit"}}>Submit</Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                </Card>
          </Grid>   </> : <> <FinishCard back={props.back} type={props.type}/></>}
          
        </>
    );
  }