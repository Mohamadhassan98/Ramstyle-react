import React from 'react';
import './App.css';
import mobile from './assets/mobile.png';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import myket from './assets/myket.png';
import googlePlay from './assets/play.png';
import bazaar from './assets/cafe-bazaar.png';
import Button from "@material-ui/core/Button";
import {flexbox} from "@material-ui/system";

function App() {
    const flexBoxProps = flexbox({
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'center'
    });
    flexBoxProps.alignItems = 'center';

    return (
        <Container className="Container">
            <Box display='flex'
                // flexDirection='row' flexWrap='no-wrap' alignItems='center' justifyContent='center'
                 {...flexBoxProps}
            >
                <Box flexBasis={'200%'}>
                    <Box display='flex' flexDirection='column' flexWrap='no-wrap'>
                        <Box flexBasis={'100%'}>
                            <Typography variant="h3">
                                رم استایل همیشه همراه شما
                            </Typography>
                        </Box>
                        <Box flexBasis={'100%'}>
                            <Typography variant="h5">
                                با نصب اپلیکیشن رم استایل بر روی گوشی همراه خود، جدیدترین اخبار را دریافت کنید و از هیچ
                                تخفیفی بی اطلاع نمانید
                            </Typography>
                        </Box>
                        <Box flexBasis={'100%'}>
                            <Box display='flex' flexDirection='row' flexWrap='no-wrap' justifyContent='space-around'>
                                <Box>
                                    <Button>
                                        <img src={googlePlay} className="logo"/>
                                    </Button>
                                </Box>
                                <Box>
                                    <Button>
                                        <img src={myket} className="logo"/>
                                    </Button>
                                </Box>
                                <Box>
                                    <Button>
                                        <img src={bazaar} className="logo"/>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box flexBasis={'100%'}>
                    <Box display='flex' flexDirection='column'>
                        <Box>
                            <img src={mobile} className='img'/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default App;
