import React from "react";
import Header from 'components/SilverComponents/Header';
import { Grid,Hidden, Link} from "@material-ui/core";
import Slideshow from "components/Carousel/carosul";
import {IndexCareerPage} from 'mappers/dummydata/savingNac';
 import currentstyles from 'containers/careers/careerstyle';
import styles from 'containers/savings/savingsstyle';
import SideData from 'components/aboutus/sideData';
import SocialFields from 'components/socialfield/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';







export default function careersPage (props) {
    const classes = styles();
    const clases = currentstyles();
    const next = () => {
        slider.current.slickNext();
      };
      const previous = () => {
        slider.current.slickPrev();
      };
      const slider = React.createRef();

    return(
        <Grid>
        <Grid xs={12} container>
        <Header/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.image}>
         {IndexCareerPage.settingCareer.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        <Slideshow dataCarousel={IndexCareerPage.settingCareer} sliderRef={slider}>
          {IndexCareerPage &&
            IndexCareerPage.carouselDataCareer &&
            IndexCareerPage.carouselDataCareer.map((val, index) => (
              <Grid container key={index} className={classes.headContent}>
                <img src={val.img} className={classes.mainCarosel} />
              </Grid>
            ))}
        </Slideshow>
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}  className={clases.careercontainer} >
      <Grid  item xs={12} sm={12} md={9} lg={9} xl={9}  className={clases.container1}  >
      <Grid item xs={12}sm={12} md={12} lg={12} xl={12} className={clases.head} >
        {IndexCareerPage.header}
      </Grid>
      <Grid item xs={12} className={clases.contents}>
       {IndexCareerPage.content}
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}className={clases.Cards0} >
      {IndexCareerPage.jobrole.map(value=> (
      <Grid item xs={12} sm={4 } md={4} lg={4} xl={4} className={clases.Cards} > 
      <Card className={classes.root} variant="outlined">
      <CardContent>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}className={clases.Cardhead} >
         {value.head}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}className={clases.Cardscontent} >
         {value.content}
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} className={clases.Cardsfooter}  >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={clases.Cardsfooter0}>
     <Link href='/careers/1' className={clases.Cardsfooter}> {value. fullrole}</Link>
     <Button size="small" className={clases.Cardsfooter1} >{value.button}</Button>
     </Grid>
     
        </Grid>
      </CardContent>
    </Card>
      </Grid>
      ) )}
      </Grid>
      </Grid>
      <Grid item xs={12} md={3} lg={3} xl={3} className={clases.rightContent}>
          <Hidden smDown>
      <Grid item xs={12} className={clases.sideContent}>
      <SocialFields/>
      </Grid>
      </Hidden> 
      </Grid>
      </Grid>
      </Grid>
    );
            }
            