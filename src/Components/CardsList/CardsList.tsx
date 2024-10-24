import React from 'react';
import type {IRepository} from "../../type";

import Grid from "@mui/material/Grid2";
import RepositoryCard from "../Card/RepositoryCard";


interface ICardListProps {
    reposList?: IRepository[]
}

const CardsList = ({reposList}: ICardListProps) => {

    return (
        <Grid container spacing={2} alignItems="stretch">
            {reposList?.map((item) => <RepositoryCard key={item.id} repository={item}/>)}
        </Grid>

    );
};

export default CardsList;