import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";

const Main = () => {
    const {tours} = useContext(AppContext)

    if (!tours.length) {
        return  (
            <div>...Loading</div>
        )
    }
    return (
        <div>
            <h1>Cases</h1>
            {tours.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </div>
    );
};

export default Main;