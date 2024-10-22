import React from 'react';
import type {IRepository} from "../../type";

import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Grid from "@mui/material/Grid2";

import './RepositoryCard.css'

interface ICardProps {
    repository: IRepository;
}

const RepositoryCard = ({repository}: ICardProps) => {
    return (
        <Grid size={{xs: 6, md: 4, lg: 3}}>
            <Card className='Card-container'>
                <CardHeader
                    avatar={
                        <Avatar src={repository.owner.avatar_url}/>
                    }
                    title={repository.full_name}
                    subheader={<div className='Card-subheader'>
                        <StarOutlineIcon sx={{fontSize: '1rem'}}/>
                        {repository.stargazers_count}
                    </div>}
                />
                <CardContent className='Card-content-container'>
                    <Typography className={'Card-content'} >{repository.description}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default RepositoryCard;