import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../App";

const Tour = () => {
    const {tours} = useContext(AppContext)
    let navigate = useNavigate();
    let {id} = useParams();

    const tour = tours.find((item) => item.id === Number(id))

    if (!tour) {
        return (
            <div>
                Кейс не найден!
            </div>
        )
    }

    return (
        <div>

            <div className="card">
                <h2>{tour.title}</h2>
                <p>{tour.description}</p>
                <span>{tour.step}</span>
                <button onClick={() => navigate(`/send/${id}`)}>Оставить заявку</button>
            </div>
        </div>
    );
};

export default Tour;