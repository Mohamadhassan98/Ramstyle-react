import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import pic from "./pic/3.jpg";
import pico from "./pic/2.jpg";
import Container from "@material-ui/core/Container";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, کد, زمان, نحوه, هزینه) {
    return { name, کد, زمان, نحوه,هزینه };
}

const rows = [
    createData('', "RSC-123456", "بعد از ظهر", "پست پیشتاز", "رایگان"),

];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



 const use = makeStyles(theme => ({

  paper: {
        padding: theme.spacing(1),
        marginTop: 10,

        // maxWidth: 1000,


    },
    image: {
    width: 300,
        height: 300,
    },
   img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


const style= makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));
const botn = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const text = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function Complex() {
    useStyles();
    const classes = use();
    style();
    botn();
    text();


    return (



        <Container maxWidth='md' >


            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="right">کد پیگیری</StyledTableCell>
                            <StyledTableCell align="right">زمان تحویل</StyledTableCell>
                            <StyledTableCell align="right">نحوه ارسال سفارش</StyledTableCell>
                            <StyledTableCell align="right">هزینه ارسال</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right" >{row.کد}</StyledTableCell>
                                <StyledTableCell align="right">{row.زمان}</StyledTableCell>
                                <StyledTableCell align="right">{row.نحوه}</StyledTableCell>
                                <StyledTableCell align="right">{row.هزینه}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>








            <Paper className={classes.paper}>
                <Grid container   spacing={1}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="1" src={pic} />
                        </ButtonBase>
                    </Grid>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="2" src={pico} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                            </Grid>
                                <Grid >
                                <Typography  variant="body2" style={{ cursor: 'pointer' }}>
                                 <h2>  مبلغ قابل پرداخت</h2>
                                    <h2>520000 تومان</h2>
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>

                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper>



        </Container>
    );
}