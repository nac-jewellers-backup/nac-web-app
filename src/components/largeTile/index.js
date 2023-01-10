import React from 'react'
import {Grid } from '@material-ui/core'
import LargeTile from 'components/largeTile/largeTile';
import {YoungOnes} from 'mappers/dummydata/collectionNac';
import styles from './largeTileStyle';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
    
    
// }))

export default function LargeTiles(props){
    const classes = styles();
    return(
        <Grid container xs={12} className={classes.container}>
             {YoungOnes.tile.map(val =>
                      <>
                      <LargeTile img={val.img}
                            heading={val.heading}
                            para={val.para}
                            store={val.store}
                            setting1={YoungOnes.setting1}
                            setting2={YoungOnes.setting2}
                            imgPics={YoungOnes.picImg}
                            tag={val.tag}
                            youtubeImg={val.youtubeImg}
                            url={val.url}
                            /></>
                        )}
                       
            
        </Grid>
    )
}