import React from 'react';
import RepositoryCard from "../Card/RepositoryCard";
import {searchResult} from "../../type";
import Grid from "@mui/material/Grid2";


interface ICardListProps {
    reposList?: searchResult
}

const CardsList = ({reposList}:ICardListProps) => {

    return (
        <Grid container spacing={2} alignItems="stretch">
            {reposList?.items.map((item) => <RepositoryCard repository={item} />)}
        </Grid>
    );
};

export default CardsList;