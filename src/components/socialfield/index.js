import React from 'react'
import styles from './style'
import { Grid } from '@material-ui/core'
import Social from 'components/nacsocial/social'
import News from 'components/nacnews/news'
import {SocialNews,Socials} from 'mappers/dummydata/social'



export default function SocialFields(props){
const classes=styles()
    return(
        <Grid container>
            <Grid item className={classes.box}>
            <Social value={SocialNews}/>
            <News value={Socials}/>
            </Grid>
        </Grid>
    )
}