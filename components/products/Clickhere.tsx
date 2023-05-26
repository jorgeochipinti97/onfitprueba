import { useState } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, CardMedia, Link, Divider, Box, } from '@mui/material'

import Image from 'next/image';



export const ClickHere = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Grid item
            xs={6}
            sm={4}
        >
            <Card sx={{ mx: 2 }}>
                <Box display='flex' justifyContent='center'>

                    {/* <Link> */}

                    <CardMedia
                        component='div'
                        className='fadeIn'
                        onLoad={() => setIsImageLoaded(true)}>
                        <Image width={400} height={400} alt='royer' src='https://res.cloudinary.com/djk4q3tys/image/upload/v1652040590/uffw9po6ntgqvc0lx7zu.jpg' />
                    </CardMedia>

                    {/* </Link> */}

                </Box>
            </Card>
            <Divider sx={{ my: 2 }} />
        </Grid>
    )
}
