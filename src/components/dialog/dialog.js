import React from "react";
import { Typography, Grid, Select, Input } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import styles from "./styledialog";
import { selectPage, selectPages, para } from '../../mappers/dummydata/savingNac';
export default function DialogBox(props) {
 
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    props.openDialog_CLOSE({
      dialog: false
    })
  };
  return (
    <form>
      <div>
        <Dialog
          fullWidth={true}
          maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.dialog}>
          <Grid container className={classes.grid_1} xs={12} sm={12} md={12} xl={12}>
            <Grid item xs={12} sm={6} md={6} xl={6}>
              <img width="100%" height="100%" src={props.img} loading="lazy" alt='...' />
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={6} className={classes.grid_2}>
              <Grid item xs={12} sm={12} md={6} xl={6} className={classes.grid_3} >
                {props.heading}
              </Grid>
              <Grid item xs={12} className={classes.grid_4}>
                Brides & their families
            </Grid>
              <Grid container xs={12} lg={12} md={12} xl={12} className={classes.grid_5}>
                {selectPage && selectPage.data_all && selectPage.data_all.map(data =>
                  <Grid item xs={6} sm={6} lg={3} md={3} className={classes.grid_6}>
                   
                      <Select
                       className={classes.grid_5} value={data.main}
                        native
                      >
                        {data && data.list1 && data.list1.map((val,key) => (
                          <>
                           className={classes.grid_5} <option value={val}>
                              {val}
                            </option>
                          </>
                        ))}
                      </Select>
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12} className={classes.grid_7}>
                <Input placeholder="Full name" className={classes.grid_8} inputProps={{ 'aria-label': 'description' }} />
              </Grid>
              <Grid item xs={12} className={classes.grid_7}>
                <Input placeholder="Email" className={classes.grid_8} inputProps={{ 'aria-label': 'description' }} />
              </Grid>
              <Grid item xs={12} className={classes.grid_7}>
                <Input placeholder="Mobile Number" className={classes.grid_8} inputProps={{ 'aria-label': 'description' }} />
              </Grid>
              <Grid container xs={12} lg={12} md={12} xl={12} className={classes.grid_5}>
                {selectPages && selectPages.data_all && selectPages.data_all.map(data =>
                  <Grid item xs={12} sm={12} lg={12} md={12} className={classes.grid_6}>
                    <Select
                     className={classes.grid_5} value={data.main}
                      native
                    >
                      {data && data.list1 && data.list1.map(val => (
                        <>
                           className={classes.grid_5}<option value={val} >
                            {val}
                          </option  >
                        </>
                      ))}
                    </Select>

                  </Grid>
                )}
              </Grid>
              <Grid container xs={12} sm={12} md={12} lg={12} xl={12} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.grid_9}>
                  <Typography>
                    <a
                      className={classes.grid_9}
                    >
                      Send Authentication&nbsp;{""}
                      <img  loading="lazy" alt='...' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
                    </a>
                  </Typography>{" "}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.grid_10}>
                  <Input placeholder="Confirm OTP" className={classes.grid_10} inputProps={{ 'aria-label': 'description' }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12} className={classes.grid_11} >
              <div className={classes.grid_11} >
                {para.content}
              </div>
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12} className={classes.grid_12} >
              <div className={classes.grid_13} >

                <Button variant="" color="#4cae4c" className={classes.grid_14}>
                  Confirm and Book in Store
        </Button>
              </div>
            </Grid>

          </Grid>
        </Dialog>
      </div>
    </form>
  );
}
