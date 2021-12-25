import React, {useContext} from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

const Card = ({card}) => {
    let navigate = useNavigate();
    const {id, title, project} = card
    const {cases,setCases} = useContext(AppContext)
    const {isAuth} = useContext(AppContext)

    


    function deleteCase() {
        const newCaseList = cases.filter (item => item.id !== id)
        console.log(newCaseList)
        return (
        setCases(newCaseList)
        )
    }

    return (
        <div className='card'>
            <p className="card__id">{id}</p>
            <h3 className="card__title">{title}</h3>
            <p className="card__project">{project}</p>
            {isAuth && <button className="card__deleteButton" onClick={deleteCase} >✖ Удалить</button>}
            <button className="card__button" onClick={() => navigate(`/CardDetail/${id}`)}>Просмотр</button>

        </div>

    )
}

export default  Card