import React from "react";
import CareerPageStyles from "./style";
import Header from "components/SilverComponents/Header";
import Footer from "components/Footer/Footer";

const CareerPage = () => {
  const classes = CareerPageStyles();
  return (
    <div>
      {/* HEADER */}

      <div className={classes.mainTag}>
        <Header />
      </div>

      {/* FOOTER */}

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default CareerPage;
