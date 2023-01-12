import { Grid } from "@material-ui/core";
import React from "react";
import Cards from "./card";


export default function CardsIndex(props) {
  return (
    <Grid container xs={12}>
      {props.value && (
       
        <>
          <Cards
            data={props.value}

            // page={props.value.title.titlePage}
            // content1={props.value.title.content1}
            // content2={props.value.title.content2}
            // imgIcon={props.value.title.imgIcon}
            // contact={props.value.title.contact}
            // img={val.img}
            // heading={val.heading}
            // adType={val.adType}
            // typeOfCollection={val.typeOfCollection}
            // name={val.name}
            // model={val.model}
            // typeOfMetal={val.typeOfMetal}
            // location={val.location}
          />
        </>
      )}
    </Grid>
  );
}
