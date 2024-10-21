import React from 'react';
import RepositoryCard from "../Card/RepositoryCard";
import {IRepository} from "../../type";
import Grid from "@mui/material/Grid2";


interface ICardListProps {
    reposList?: IRepository[]
}

const CardsList = ({reposList}:ICardListProps) => {

    return (
        <Grid container spacing={2} alignItems="stretch">
            {reposList?.map((item) => <RepositoryCard key={item.id} repository={item} />)}
        </Grid>

    );
};

export default CardsList;