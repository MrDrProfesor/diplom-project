import React, {useContext} from 'react';
import Card from "./Card/Card";
import {AppContext} from "../App";



const Main = () => {
    const {cases} = useContext(AppContext)

    return (
        <div>
            <h1>Cases</h1>
            {cases.map((card) => {
                return (
                    <Card key= {card.id} card = {card}/>
                )

            } )}

        </div>
    );
};

export default Main;