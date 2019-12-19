import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import {blue} from "@material-ui/core/colors";
//import { Route  , BrowserRouter as Router} from 'react-router-dom' ;

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },

    title: {
        fontSize: 20,
        color :"green"
    },
    pos: {
        marginBottom: 20,
    },
});


function App(){
//class App extends React.Component {
   // handleClick =() => {
    //    this.props.history.push('/user')
    //}
  // render() {

       const classes = useStyles();


    return (

            <Container maxWidth="md">
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   اطلاعات رسید
                </Typography>

                <Typography  variant="body2" component="p">
                   کاربر گرامی برداشت از کارت شما با موفقیت انجام شد
                    <br />
                  جهت تکمیل فرایند خرید و انتقال به صفحه اصلی روی دکمه کلید کنید
                </Typography>
            </CardContent>

            <CardActions>

                <Button   variant="contained" color="secondary" size="small">تکمیل خرید و انتقال به صفحه اصلی</Button>


               // initiateTimer = () => {
             //   const timeLeftVar = this.secondsToTime(60);
              //  this.setState({ timeLeft: timeLeftVar })
          //  };

              //  startTimer = () => {
              //  const interval = setInterval(this.timer, 1000);
              //  this.setState({ interval: interval });
          //  };

             //   timer = () => {
             //   if (this.state.timeLeft >0){
              //  this.setState({ timeLeft: this.state.timeLeft -1 });
          //  }
             //   else {
             //   clearInterval(this.state.interval);
                //this.postToSlack();
            }
            };
            </CardActions>

        </Card>
            </Container>

    );
//}
}
export default App