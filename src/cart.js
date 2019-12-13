import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import im from './shoes.jpeg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 100,
    },
    card: {
        display: 'flex',
        direction: 'rtl'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    button: {
        marginRight: 100,
        marginTop: 200
    }
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={im}
                title="cart"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        کفش مدل nike air
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        گارانتی اصالت و سلامت فیزیکی
                    </Typography>
                    <TextField
                        id="standard-read-only-input"
                        label="قیمت"
                        defaultValue="1200000"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="filled-number"
                        label="تعداد"
                        type="number"
                        defaultValue="1"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="filled"
                    />
                    <Button variant="contained" color="secondary">
                        پرداخت
                    </Button>
                </CardContent>
            </div>

        </Card>
    );
}


