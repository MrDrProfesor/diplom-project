import React from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    let navigate = useNavigate();
    const {id, title, project} = card
    return (
        <div className='card'>
            <p className="id">{id}</p>
            <p className="title">{title}</p>
            <p className="project">{project}</p>
            <button className="card__button" onClick={() => navigate(`/CardDetail/${id}`)}>Просмотр</button>
            <button className="card__button">Удалить</button>

        </div>

    )
}

export default Card;