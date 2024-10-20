import React from 'react';
import Card from "../Card/Card";
import {searchResult} from "../../type";

interface ICardListProps {
    reposList?: searchResult
}

const CardsList = ({reposList}:ICardListProps) => {

    return (
        <div>
            {reposList?.items.map((item) => (<p>{item.stargazers_count}</p>))}
            <Card/>
        </div>
    );
};

export default CardsList;