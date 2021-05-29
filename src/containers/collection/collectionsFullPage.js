import React from "react";
import Header from "components/SilverComponents/Header";
// import Header from "components/SilverComponents/Header";
import { Grid, Hidden, Typography,Button } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import {header,contentData} from "../../mappers/dummydata/collectionFulldata";
import "./collection.css";

function CollectionFullPage() {
    return (
        <Grid
      container
      xs={12}
      lg={12}
      md={12}
      sm={12}
      spacing={12}
      style={{ width: "100%", display: "block" }}
    >
      <Grid xs={12}>
        <Header />
      </Grid>
      <Grid xs={12} className="root">
        <div style={{textAlign:"center"}}>
        <div style={{display:"flex",justifyContent:"center",paddingBottom:"10px"}}>
        <img className="logoEdit" src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(1).png" />
        <Typography className="heading">COLLECTIONS</Typography>
        <img className="logoEdit" src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(2).png" />
        </div>
          {header.map((val)=>(
            <Typography className="titleContent">{val.title}</Typography>
          ))}  
        </div>
       
        {contentData.map((val,i) => !( i % 2 ) ?
        <Grid container direction="row" justify="flex-start" alignItems="center" className="mediaContents">
          <Grid item xs={7}>
              <div style={{width:"100%", height:"75%"}}>
                 <img src={val.img} width="100%" style={{maxHeight:"460px"}} />
             </div>
            </Grid> 
          <Grid item xs={5}>
            <div className="rightSidecontent">
             <Typography className="imgContent">{val.data}</Typography>
             <Button variant="contained" className="buttonEdit">{val.btn}</Button>
            </div>
          </Grid>
        </Grid> 
        :
        <Grid container direction="row" justify="flex-start" alignItems="center" className="mediaContents">
            <Grid item xs={5}>
                 <div className="leftSidecontent">
                     <Typography className="imgContent">{val.data}</Typography>
                     <Button variant="contained" className="buttonEdit">{val.btn}</Button>
                 </div>
            </Grid>
            <Grid item xs={7}>
              <div style={{width:"100%", height:"75%"}}>
                 <img src={val.img} width="100%" style={{maxHeight:"460px"}} />
             </div>
            </Grid> 
        </Grid>
        )}
      </Grid>
      <Grid>
          <Footer/>
      </Grid>
    </Grid>
    )
}

export default CollectionFullPage;