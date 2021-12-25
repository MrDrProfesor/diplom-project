import React, {useContext} from 'react';
import Card from "./Card/Card";
import {AppContext} from "../App";
import {useNavigate} from "react-router-dom";





const Main = () => {
    const navigate = useNavigate()
    const {cases} = useContext(AppContext)
    const {isAuth} = useContext(AppContext)


    return (
        <div className='wrapper'>
            <main className='main'>
            <h1 className="main__title">Test cases</h1>
            {isAuth && <button className="create__button" onClick={() => navigate(`/Create/`)}>✚ Добавить ТК</button>}
                        {cases.map((card) => {
                return (
                    <Card key= {card.id} card = {card}/>
                )

            } )}
            </main>
            <footer/>
        </div>
    );
};

export default Main;