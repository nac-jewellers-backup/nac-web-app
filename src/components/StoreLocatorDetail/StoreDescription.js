import React from "react";
import  StarRatings from  'react-star-ratings';
import _ from  'lodash';

const StoreDescription = ({currentStore , timings, reviews, rating ,onToggle360View ,showMoreReviews , isMore}) => {
  const store = currentStore  ? currentStore[0] : []; 
  const styles = require("../StoreLocator/StoreLocator.scss");
  const fbImg = require("../StoreLocator/facebook.png");
  const twitImg = require("../StoreLocator/twitter.png");
  const instaImg = require("../StoreLocator/insta.png");
  const addicon = require("./addicon.png");
  const image360 = require("./360degree.png");
  const direction = require("./direction.png");
  const arrowImg = require('../TestimonialComponent/small_arrow.png');

  const writeReview = ` https://search.google.com/local/writereview?placeid=${store.placeID}`;
  reviews = _.orderBy(reviews ,['rating'], ['desc']);
  const sampleStore = "https://storage.googleapis.com/media.nacjewellers.com/resources/collection_files/young%20ones/Hero-Banner.jpg";
  const timingsContent = [] , reviewContentHtml = [] ,firstReview = [];
  const getDay = new Date().getDay();
  for(var i = 0 ; i < timings.length ; i++ ){  
    timingsContent.push(
        <div key={i} className={styles.timings} style={{ fontWeight: getDay === i ? 'bold': 'normal'}}>
          <p>{timings[i].day}</p>
          <span>{timings[i].startTime} - {timings[i].endTime} </span>
        </div>
    );
  }
  for(var i = 0 ;i < reviews.length ; i++ ){
    if(i === 0){
      firstReview.push(
        <div key={i}>
        <p onClick={showMoreReviews.bind(this)} className={styles.see_more_mob} style={{float:"right"}}> See {reviews.length} More Reviews &nbsp;  <img className={ isMore ? styles.arrow_up : styles.arrow_img} src={arrowImg} alt="..." loading="lazy"/>  </p>
        <span className={styles.author_name}>{reviews[i].author_name}</span> &nbsp;&nbsp; <span>{reviews[i].relative_time_description}</span>&nbsp;&nbsp;
        <div className={styles.star} style={{display:"inline-block"}}>
        <StarRatings
          rating={reviews[i].rating} 
          starRatedColor={"#DAA520"} numberOfStars={5}
          starDimension={"28px"}
          name='rating' />
          </div>
        <p style={{fontSize:"18px"}} className={styles.indiv_description}>{reviews[i].text}</p>
        {isMore && <hr />}
      </div>  
      );
    }else if(i !== 0){
    reviewContentHtml.push(
      <div key={i}>
        <span className={styles.author_name}>{reviews[i].author_name}</span> &nbsp;&nbsp; <span>{reviews[i].relative_time_description}</span>&nbsp;&nbsp;
        <div className={styles.star} style={{display:"inline-block"}}>
        <StarRatings 
          rating={reviews[i].rating} 
          starRatedColor={"#DAA520"} numberOfStars={5}
          starDimension={"28px"}
          name='rating' />
          </div>
        <p style={{fontSize:"18px"}} className={styles.indiv_description}>{reviews[i].text}</p>
        <hr />
      </div>
    );
   }
  }
  return (
    <div>
      <div className={"col-lg-offset-1 col-md-offset-1 col-lg-11 col-md-11 col-sm-11  col-xs-12"}>
        <div className={"col-lg-9 col-md-9 col-sm-12 col-xs-12"+' '+styles.right_border} style={{ borderRight: "1px solid #d8d8d8" }}>
          <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12"} style={{paddingBottom:"25px"}}>
            <div className={"col-lg-5 col-md-5 col-sm-12 col-xs-12"+' '+styles.img_small}>
              <img src={sampleStore} className={styles.store_img} loading="lazy" alt='...'/>
            </div>
            <div className={"col-lg-6 col-md-6 col-sm-9 col-xs-9"} style={{paddingRight:"0px"}}>
              <div className="indiv_collection_heading">
                <h3 style={{marginBottom:"0px"}}>
                  <i style={{paddingRight:"15px"}}>{store.name}</i>
                  <div style={{display:"inline-block" , paddingTop:"9px"}} className={styles.hello}>
                  <StarRatings
                    rating={rating}
                    starRatedColor={"#DAA520"}
                    numberOfStars={5}
                    starDimension={"31px"}
                    name='rating'
                   />
                   </div>
                </h3>
              </div>
              <div  className={styles.indiv_description} dangerouslySetInnerHTML={{__html: store.address}} style={{paddingTop:"3px"}}>
              </div>
              <div  className={styles.indiv_description} style={{paddingTop:"1px"}}>
                {store.phone}
              </div>
            </div>
            <div className={"col-lg-1 col-md-1 col-sm-3 col-xs-3"} style={{paddingTop:"15px"}}>
             <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12"}>
                <img src={image360} loading="lazy" alt='...' onClick={onToggle360View.bind(this)} className={styles.icon_img}  />
             </div>
             <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12"}>
              <a href={store.directions}  target="_blank"  rel="noopener noreferrer" > <img src={direction} className={styles.icon_img} loading="lazy" alt='...'/> </a>
             </div>
            </div>
          </div>
          <hr style={{border:"1px solid #d8d8d8"}} />
          <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12"}>
          {reviews.length > 0 ? (
              <div >
               {firstReview}
               {isMore && <div>{reviewContentHtml}</div>}
              </div>
            ):(
              <div  className={styles.indiv_description} style={{paddingBottom:"45px"}}>
              <h3 style={{textAlign:'center' , color:"#d8d8d8"}}>
              <a href={writeReview}> <img style={{width:"55px"}} src={addicon} loading="lazy" alt='...' /></a>&nbsp;&nbsp;
               <i>Be</i> the first person to review NAC {store.name} </h3>
            </div>
            )}
          </div>
          <hr style={{border:"1px solid #d8d8d8"}} />
          <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12"} >
            {timingsContent}
          </div>
        </div>
        <div
          className={
            "col-lg-3 col-md-3 hidden-sm hidden-xs" +
            " " +
            styles.social_wrapper_details
          }
        >
          <div className={styles.indiv_social_news + " " + styles.wd_100}>
            <h3>
              <i>Stay</i> Social with NAC
            </h3>
            <div className={styles.indiv_social_news_description}>
              Follow us to stay updated on the latest deals, steals and much
              more. We love surprises, so keep an eye out for those!
            </div>
            <div className={styles.img_wrapper}>
              <div className={styles.inline_block + " " + styles.indiv_img}>
                <a href="https://www.facebook.com/NACjewellery">
                  <img src={fbImg} loading="lazy" alt='...'/>
                </a>
              </div>
              <div className={styles.inline_block + " " + styles.indiv_img}>
                <a href="https://www.facebook.com/NACjewellery">
                  <img src={twitImg} loading="lazy" alt='...'/>
                </a>
              </div>
              <div className={styles.inline_block + " " + styles.indiv_img}>
                <img src={instaImg} loading="lazy" alt='...' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDescription;
