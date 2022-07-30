import React, { Component, PropTypes } from "react";

import MapComponent from "./MapComponent.js";
import DescriptionComponent from "./StoreDescription.js";

const styles = require("../StoreLocator/StoreLocator.scss");

export default class StoreLocatorDetail extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired,
    currentMapLocation: PropTypes.object.isRequired,
    currentStreetViewURL: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    storeName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    currentStore: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    timings: PropTypes.array.isRequired,
    isStreetView: PropTypes.bool.isRequired,
    onToggle360View: PropTypes.func.isRequired,
    showMoreReviews: PropTypes.func.isRequired,
    isMore: PropTypes.bool.isRequired,
  };
  render() {
    const {
      currentStore,
      timings,
      rating,
      reviews,
      onToggle360View,
      isStreetView,
      currentStreetViewURL,
      isMore,
      showMoreReviews,
    } = this.props;
    const currentMapLocation = currentStore ? currentStore[0].map : {};
    return (
      <div className={styles.collections_detail_wrapper + " " + styles.wd_100}>
        {/* MapComponent  */}
        <section className={styles.wd_100}>
          <MapComponent
            currentMapLocation={currentMapLocation}
            isStreetView={isStreetView}
            currentStreetViewURL={currentStreetViewURL}
          />
        </section>
        <section className={styles.wd_100}>
          <DescriptionComponent
            currentStore={currentStore}
            timings={timings}
            reviews={reviews}
            rating={rating}
            onToggle360View={onToggle360View}
            showMoreReviews={showMoreReviews}
            isMore={isMore}
          />
        </section>
      </div>
    );
  }
}
