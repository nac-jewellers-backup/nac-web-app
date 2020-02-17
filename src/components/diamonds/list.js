import React from 'react'
import styles from './style'
import { Grid, Typography, Checkbox } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default function DiamondList(props) {
    const StyledTableCell = withStyles(theme => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          textAlign:"center",
          border:"1px solid #ddd",
    
        },
        body: {
          fontSize: 14,
          textAlign:"center",
          border:"1px solid #ddd",
    
        },
      }))(TableCell);
    
      const StyledTableRow = withStyles(theme => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
          },
        },
      }))(TableRow);
    
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
    
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    
      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });
      const classes = useStyles();    

    return (
        <Grid container xs={12}>

            <Grid container>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Shape</StyledTableCell>
                            <StyledTableCell align="right">Carat</StyledTableCell>
                            <StyledTableCell align="right">Cut</StyledTableCell>
                            <StyledTableCell align="right">Clarity</StyledTableCell>
                            <StyledTableCell align="right">	Colour</StyledTableCell>
                            <StyledTableCell align="right">Certificate</StyledTableCell>

                            <StyledTableCell align="right">Pricing</StyledTableCell>

                            <StyledTableCell align="right">Details</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}
                </Table>
            </Grid>
        </Grid>
    )
}