import React from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './App.css';
import ItemsCarousel from 'react-items-carousel';
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import pic from './resources/4958046-sea-wallpapers.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        // height:200,
        marginTop: 5,
        marginBottom: 5,
    },
}));

function App() {
    const classes = useStyles();
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);
    const chevronWidth = 40;
    return (
        <div className="App">
            <Container style={{
                marginTop: 50,
            }}>
                <Grid container direction='column' wrap='nowrap'>
                    <Grid item>
                        <Typography classes={classes.Typography} gutterBottom variant={'subtitle1'}>
                            Brands
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            leftChevron={
                                <ArrowBackIosRoundedIcon/>
                            }
                            rightChevron={
                                <ArrowForwardIosRoundedIcon/>
                            }
                            outsideChevron
                            chevronWidth={chevronWidth}
                            numberOfCards={5}
                            gutter={10}
                            firstAndLastGutter={true}
                            // alwaysShowChevrons
                        >
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={pic}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={pic}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={pic}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={pic}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={pic}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={pic}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </ItemsCarousel>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default App;
