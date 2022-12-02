import {
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import ReadMoreStyles from "./style";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const ReadMore = () => {
  const classes = ReadMoreStyles();
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                auctor, enim vel eleifend fermentum, sem mi euismod lorem, ut
                consectetur ipsum metus sed neque. Sed a placerat velit. Duis
                elementum quam congue, sagittis arcu vitae, commodo odio.
                Integer aliquet volutpat lacus, sed posuere metus gravida sed.
                Mauris et nisi eget enim aliquet imperdiet at elementum lectus.
                Nulla facilisi.
              </Typography>
            </div>
            <div className={classes.text2}>
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
            <div className={classes.text3}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                auctor, enim vel eleifend fermentum, sem mi euismod lorem, ut
                consectetur ipsum metus sed neque. Sed a placerat velit. Duis
                elementum quam congue, sagittis arcu vitae, commodo odio.
                Integer aliquet volutpat lacus, sed posuere metus gravida sed.
                Mauris et nisi eget enim aliquet imperdiet at elementum lectus.
                Nulla facilisi.
              </Typography>
            </div>
            <div className={classes.text2}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                auctor, enim vel eleifend fermentum, sem mi euismod lorem, ut
                consectetur ipsum metus sed neque. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean auctor, enim vel eleifend
                fermentum, sem mi euismod lorem, ut consectetur ipsum metus sed
                neque. Sed a placerat velit. Duis elementum quam congue,
                sagittis arcu vitae, commodo odio. Integer aliquet volutpat
                lacus, sed posuere metus gravida sed. Mauris et nisi eget enim
                aliquet imperdiet at elementum lectus. Nulla facilisi. Duis
                accumsan diam ac velit ullamcorper eleifend. Etiam nisi mi,
                semper pharetra massa non, tincidunt accumsan nisi. Sed
                sagittis, lectus at rutrum elementum, urna enim auctor mauris,
                eget laoreet tellus est malesuada justo.
              </Typography>
            </div>
            <div className={classes.textContent2}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                auctor, enim vel eleifend fermentum, sem mi euismod lorem, ut
                consectetur ipsum metus sed neque. Sed a placerat velit. Duis
                elementum quam congue, sagittis arcu vitae, commodo odio.
                Integer aliquet volutpat lacus, sed posuere metus gravida sed.
                Mauris et nisi eget enim aliquet imperdiet at elementum lectus.
                Nulla facilisi. Mauris et nisi eget enim aliquet imperdiet at
                elementum lectus. Nulla facilisi. Duis accumsan diam ac velit
                ullamcorper eleifend. Etiam nisi mi, semper pharetra massa non,
                tincidunt accumsan nisi. Sed sagittis, lectus at rutrum
                elementum, urna enim auctor mauris, eget laoreet tellus est
                malesuada justo.
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
              elementum quam congue, sagittis arcu vitae, commodo odio. Integer
              aliquet volutpat lacus, sed posuere metus gravida sed. Mauris et
              nisi eget enim aliquet imperdiet at elementum lectus. Nulla
              facilisi. Duis accumsan diam ac velit ullamcorper eleifend. Etiam
              nisi mi, semper pharetra massa non, tincidunt accumsan nisi.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReadMore;
