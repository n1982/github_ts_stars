import React from 'react';
import Grid from "@mui/material/Grid2";
import {Card, CardContent, CardHeader, Skeleton} from "@mui/material";


const LoadingSkeleton = () => {
    const skeletonsCount = Array.from(Array(32).keys())
    return (
        <Grid container spacing={2} alignItems="stretch">
            {skeletonsCount.map((_, id) => <Grid key={id} size={{xs: 6, md: 4, lg: 3}}>

                <Card className='Card-container'>
                    <CardHeader
                        avatar={
                            <Skeleton variant="circular" width={40} height={40}/>
                        }
                        title={<Skeleton variant="text" sx={{fontSize: '1rem'}}/>}
                        subheader={<div className='Card-subheader'>

                            <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                        </div>}
                    />
                    <CardContent className='Card-content-container'>
                        <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                    </CardContent>
                </Card>
            </Grid>)}
        </Grid>

    );
};

export default LoadingSkeleton;