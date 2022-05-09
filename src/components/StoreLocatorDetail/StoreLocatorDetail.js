import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import {replaceAllCharacter} from '../../utils/string';
import MapComponent	from './MapComponent.js';
import DescriptionComponent from './StoreDescription.js';
import {  pageComponentSelect } from './fetchQueries';
import {  CHILD_COMPONENT_READY } from '../PageContainer/actions';
import { UPDATE_STATIC, ON_FAILED, ON_LOADING , UPDATE_CURRENT_STORE , SHOW_MORE, UPDATE_REVIEWS , TOGGLE_360_VIEW } from './actions';

const styles =  require('../StoreLocator/StoreLocator.scss')
// const fbImg = require('../StoreLocator/facebook.png');
// const twitImg = require('../StoreLocator/twitter.png');
// const instaImg = require('../StoreLocator/insta.png');

// const mapStateToProps = (state , ownProps) => {
//   return {...state.storeDetailState,
//     storeName: ownProps.params.store,
//     pathname: ownProps.location.pathname
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch: (action) => {
//       return dispatch(action);
//     },
//     onToggle360View: (e) => {
//       e.preventDefault();
//       dispatch({ type: TOGGLE_360_VIEW});
//     },
//     showMoreReviews:(e) => {
//       e.preventDefault();
//       dispatch({type:SHOW_MORE});
//     }
//   };
// };

// const fetchData = (getState, dispatch ,otherProps ,routerProps) => {
//   const promises = [];
//   const targetPage = routerProps.store;
//   const storeName = replaceAllCharacter(routerProps.store, '-', ' ');

//   promises.push(dispatch(makeRequest(pageComponentSelect.url, createFetchOption(pageComponentSelect.query), UPDATE_STATIC, ON_FAILED, ON_LOADING)));
//   // This ensure that if and only-if child component fetch is completed then the parent gets completed
//   // TODO: This is a hack to help with the Server-side Rendering, we need to think of a better way.

//   Promise.all(promises).then((store) => {
//     const storeArray = JSON.parse(store[0][2]['content']) || [] ;
//     const currentStore = [];
//     storeArray.filter((store) => {
//         if(store.name == storeName ){
//           currentStore.push(store)
//         }
//     });
    
//     axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${currentStore[0].placeID}&key=AIzaSyBHtJJ5uHfhX92hxFzHsciwPCayzYB9yCk`).then( response => {
//      let newPromises = [];
//      newPromises.push(dispatch({type:UPDATE_REVIEWS , rating:response.data.result.rating , reviews: response.data.result.reviews}))
//      newPromises.push(dispatch({type:UPDATE_CURRENT_STORE , currentStore:currentStore ,currentStreetViewURL:currentStore ? currentStore[0].streetViewURL : '' }))
//         Promise.all(newPromises).then(() => {
//         dispatch({type: CHILD_COMPONENT_READY})
//       })
//     }).catch(err =>  { dispatch({type:UPDATE_REVIEWS}) })
//   });
//   return null;
// };

// @connectData(fetchData)
// @connect(mapStateToProps, mapDispatchToProps)

export default class StoreLocatorDetail extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired,
    currentMapLocation: PropTypes.object.isRequired,
    currentStreetViewURL: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    storeName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    currentStore:PropTypes.array.isRequired,
    rating:PropTypes.number.isRequired,
    reviews:PropTypes.array.isRequired,
    timings:PropTypes.array.isRequired,
    isStreetView:PropTypes.bool.isRequired,
    onToggle360View:PropTypes.func.isRequired,
    showMoreReviews:PropTypes.func.isRequired,
    isMore:PropTypes.bool.isRequired

  };
	render(){
    const { 
      currentStore , 
      timings ,
      rating, 
      reviews , 
      onToggle360View ,
      isStreetView ,
      currentStreetViewURL,
      isMore ,showMoreReviews,
    } = this.props;
    const currentMapLocation = currentStore ? currentStore[0].map : {}; 
    return(
		<div className={styles.collections_detail_wrapper + ' ' + styles.wd_100}>
	        {/* MapComponent  */}
	        <section className={styles.wd_100}>
             <MapComponent currentMapLocation={currentMapLocation}  isStreetView={isStreetView} currentStreetViewURL={currentStreetViewURL} />
	        </section> 
          <section className={styles.wd_100}>
              <DescriptionComponent currentStore={currentStore} timings={timings} reviews={reviews} rating={rating} onToggle360View={onToggle360View}  showMoreReviews={showMoreReviews} isMore={isMore}/>
          </section>
	  </div>
		);
	}
}

