import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import React from "react";
import ReadMoreStyles from "./style";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const ReadMore = () => {
  const classes = ReadMoreStyles();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      {/* Header Tag */}
      <Header />

      <div className={classes.mainTitle}>
        <Grid container>
          <Grid item xs={12}>
            <div className="topImage">
              <img
                className={classes.jewellImg}
                src="https://pbs.twimg.com/media/EiArtW0U8AARzHl.jpg"
                alt="Nac Jewell"
              />
            </div>
            <div className={classes.heading}>
              <div className={classes.title}>
                <Typography>LORUM IPSUM</Typography>
              </div>
              <div className={classes.subText}>
                <Typography>
                  Posted at 17:35 in{" "}
                  <span className={classes.colorText}>Jewellery Edit</span> by{" "}
                  <span className={classes.colorText}>admin</span>
                  <FiberManualRecordIcon className={classes.dot} />
                  <span className={classes.colorText}>
                    0 Comments 0 Likes 0 Shares
                  </span>
                </Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.text1}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                  lorem, ut consectetur ipsum metus sed neque. Sed a placerat
                  velit. Duis elementum quam congue, sagittis arcu vitae,
                  commodo odio. Integer aliquet volutpat lacus, sed posuere
                  metus gravida sed. Mauris et nisi eget enim aliquet imperdiet
                  at elementum lectus. Nulla facilisi.
                </Typography>
              </div>
              <div className={classes.text2}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                  lorem, ut consectetur ipsum metus sed neque. Sed a placerat
                  velit. Duis elementum quam congue, sagittis arcu vitae,
                  commodo odio. Integer aliquet volutpat lacus, sed posuere
                  metus gravida sed. Mauris et nisi eget enim aliquet imperdiet
                  at elementum lectus. Nulla facilisi. Duis accumsan diam ac
                  velit ullamcorper eleifend. Etiam nisi mi, semper pharetra
                  massa non, tincidunt accumsan nisi.
                </Typography>
              </div>
              <div className={classes.text3}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                  lorem, ut consectetur ipsum metus sed neque. Sed a placerat
                  velit. Duis elementum quam congue, sagittis arcu vitae,
                  commodo odio. Integer aliquet volutpat lacus, sed posuere
                  metus gravida sed. Mauris et nisi eget enim aliquet imperdiet
                  at elementum lectus. Nulla facilisi. Duis accumsan diam ac
                  velit ullamcorper eleifend. Etiam nisi mi, semper pharetra
                  massa non, tincidunt accumsan nisi.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="centerImage">
              <img
                className={classes.jewellImg2}
                src="https://pbs.twimg.com/media/EiArtW0U8AARzHl.jpg"
                alt="Nac Jewell"
              />
            </div>
            <div className={classes.content2}>
              <div className={classes.text1}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                  lorem, ut consectetur ipsum metus sed neque. Sed a placerat
                  velit. Duis elementum quam congue, sagittis arcu vitae,
                  commodo odio. Integer aliquet volutpat lacus, sed posuere
                  metus gravida sed. Mauris et nisi eget enim aliquet imperdiet
                  at elementum lectus. Nulla facilisi.
                </Typography>
              </div>
              <div className={classes.text2}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                  lorem, ut consectetur ipsum metus sed neque. Sed a placerat
                  velit. Duis elementum quam congue, sagittis arcu vitae,
                  commodo odio. Integer aliquet volutpat lacus, sed posuere
                  metus gravida sed. Mauris et nisi eget enim aliquet imperdiet
                  at elementum lectus. Nulla facilisi. Duis accumsan diam ac
                  velit ullamcorper eleifend. Etiam nisi mi, semper pharetra
                  massa non, tincidunt accumsan nisi.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4} style={{ marginTop: "30px" }}>
          <Grid item xs={12} sm={12} md={6}>
            <div>
              <img
                style={{ width: "100%" }}
                className={classes.leftImg}
                src="https://imgmedia.lbb.in/media/2019/08/5d4e38a8de22e35fd497babb_1565407400197.jpg"
                alt="jewell"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.rightContent}>
              <div className={classes.textContent1}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                  lorem, ut consectetur ipsum metus sed neque. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Aenean auctor, enim vel
                  eleifend fermentum, sem mi euismod lorem, ut consectetur ipsum
                  metus sed neque. Sed a placerat velit. Duis elementum quam
                  congue, sagittis arcu vitae, commodo odio. Integer aliquet
                  volutpat lacus, sed posuere metus gravida sed. Mauris et nisi
                  eget enim aliquet imperdiet at elementum lectus. Nulla
                  facilisi. Duis accumsan diam ac velit ullamcorper eleifend.
                  Etiam nisi mi, semper pharetra massa non, tincidunt accumsan
                  nisi. Sed sagittis, lectus at rutrum elementum, urna enim
                  auctor mauris, eget laoreet tellus est malesuada justo.
                </Typography>
              </div>
              <div className={classes.textContent2}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                  lorem, ut consectetur ipsum metus sed neque. Sed a placerat
                  velit. Duis elementum quam congue, sagittis arcu vitae,
                  commodo odio. Integer aliquet volutpat lacus, sed posuere
                  metus gravida sed. Mauris et nisi eget enim aliquet imperdiet
                  at elementum lectus. Nulla facilisi. Mauris et nisi eget enim
                  aliquet imperdiet at elementum lectus. Nulla facilisi. Duis
                  accumsan diam ac velit ullamcorper eleifend. Etiam nisi mi,
                  semper pharetra massa non, tincidunt accumsan nisi. Sed
                  sagittis, lectus at rutrum elementum, urna enim auctor mauris,
                  eget laoreet tellus est malesuada justo.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.bottomText}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                auctor, enim vel eleifend fermentum, sem mi euismod lorem, ut
                consectetur ipsum metus sed neque. Sed a placerat velit. Duis
                elementum quam congue, sagittis arcu vitae, commodo odio.
                Integer aliquet volutpat lacus, sed posuere metus gravida sed.
                Mauris et nisi eget enim aliquet imperdiet at elementum lectus.
                Nulla facilisi. Duis accumsan diam ac velit ullamcorper
                eleifend. Etiam nisi mi, semper pharetra massa non, tincidunt
                accumsan nisi.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.tagName}
          style={{ marginTop: "50px" }}
          spacing={4}
        >
          <Grid item xs={6} sm={6} md={2} className={classes.end}>
            <div className={classes.tags}>
              <Typography>Tags</Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2} className={classes.end1}>
            <div className={classes.tag}>
              <Typography>Tags 1</Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2} className={classes.end2}>
            <div className={classes.tag}>
              <Typography>Tag 2</Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2} className={classes.end3}>
            <div className={classes.tag}>
              <Typography>Tag 3</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "30px" }}>
          <Grid item xs={12}>
            <div className={classes.comment}>
              <Typography>No Comments</Typography>
            </div>
            <div className={classes.post}>
              <Typography>Post a Comment</Typography>
            </div>
            <div className={classes.fullTextField}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={4} md={4} className={classes.smallTextField}>
            <TextField
              id="outlined-basic"
              placeholder="Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.smallTextField}>
            <TextField
              id="outlined-basic"
              placeholder="E-mail"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.smallTextField}>
            <TextField
              id="outlined-basic"
              placeholder="Website"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={10}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className={classes.checkGroup}>
              <div className={classes.checkBox}>
                <Checkbox {...label} />
              </div>
              <div className={classes.checkText}>
                <Typography>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <div className={classes.submitBtn}>
              <Button fullWidth>Submit</Button>
            </div>
          </Grid>
        </Grid>
        <div className={classes.bottomBox} style={{ marginTop: "40px" }}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} className={classes.leftBox}>
              <div className={classes.latest}>
                <Typography>Latest Posts</Typography>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <div className={classes.leftImage}>
                    <img
                      className={classes.leftImageBox}
                      src="https://pbs.twimg.com/media/EiArtW0U8AARzHl.jpg"
                      alt="jewelly"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.rightText}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean auctor, enim vel eleifend fermentum
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={classes.leftImage}>
                    <img
                      className={classes.leftImageBox}
                      src="https://pbs.twimg.com/media/EiArtW0U8AARzHl.jpg"
                      alt="jewelly"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.rightText}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean auctor, enim vel eleifend fermentum
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.rightBox}>
              <div className={classes.about}>
                <Typography>About</Typography>
              </div>
              <Grid container>
                <Grid xs={12}>
                  <div className={classes.rightText}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean auctor, enim vel eleifend fermentum, sem mi euismod
                      lorem, ut consectetur ipsum metus sed neque
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Footer Tag */}
      <Footer />
    </div>
  );
};

export default ReadMore;
