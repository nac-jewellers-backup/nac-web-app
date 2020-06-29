import React from "react";
import styles from "./style";
import { Grid, Typography, Checkbox } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    [theme.breakpoints.down("md")]: {
      minWidth: "unset !important",
    },
  },
  GridContainer: {
    [theme.breakpoints.down("md")]: {
      overflow: "scroll",
    },
  },
}));
export default function DiamondList(props) {
  const classes = useStyles();

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign: "center",
      border: "1px solid #ddd",
    },
    body: {
      fontSize: 14,
      textAlign: "center",
      border: "1px solid #ddd",
    },
    table: {
      minWidth: 700,
      [theme.breakpoints.down("sm")]: {
        minWidth: "none !important",
      },
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    certificate,
    pricing,
    Details
  ) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      certificate,
      pricing,
      Details,
    };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "NON", " ", "View"),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "GIA", " ", "View"),
    createData("Eclair", 262, 16.0, 24, 6.0, "NON", "", "View"),
    createData("Cupcake", 305, 3.7, 67, 4.3, "NON", "", "View"),
    createData("Gingerbread", 356, 16.0, 49, 3.9, "NON", "", "View"),
  ];

  // const useStyles = makeStyles({
  //   table: {
  //     minWidth: 700,
  //     [theme.breakpoints.down("sm")]: {
  //       minWidth: "none !important",
  //     },
  //   },
  // });

  return (
    <Grid container xs={12}>
      <Grid container className={classes.GridContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Shape</StyledTableCell>
              <StyledTableCell align="right">Carat</StyledTableCell>
              <StyledTableCell align="right">Cut</StyledTableCell>
              <StyledTableCell align="right">Clarity</StyledTableCell>
              <StyledTableCell align="right"> Colour</StyledTableCell>
              <StyledTableCell align="right">Certificate</StyledTableCell>

              <StyledTableCell align="right">Pricing</StyledTableCell>

              <StyledTableCell align="right">Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.certificate}
                </StyledTableCell>
                <StyledTableCell align="right">{row.pricing}</StyledTableCell>{" "}
                <StyledTableCell align="right">
                  <a href="#">{row.Details}</a>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
