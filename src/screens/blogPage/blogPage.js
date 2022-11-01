import { Button } from "@material-ui/core";
import BlogImageCard from "components/blogImageCard/blogImageCard";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { blogPage } from "mappers/dummydata/blogPageData";
import React from "react";
import BlogPageStyles from "./style";

const BlogPage = () => {
  const classes = BlogPageStyles();
  return (
    <div>
      {/* Header Tag */}
      <Header />

      <BlogImageCard data={blogPage} />

      <div className={classes.viewMore}>
        <Button variant="outlined">View More</Button>
      </div>

      {/* Fotter Tag */}
      <Footer />
    </div>
  );
};

export default BlogPage;
