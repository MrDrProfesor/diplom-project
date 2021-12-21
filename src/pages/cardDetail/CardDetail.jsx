import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {AppContext} from "../../App";
import './CardDetail.css'


const CardDetail = () => {
    const {cases} = useContext(AppContext)
    const {id} = useParams()

    const currentProduct = cases.find((item)=> item.id === Number(id))
    console.log ('cases',currentProduct)
    const {title, project, steps, result} = currentProduct
    return (
        <div className='card__detail'>
            <p className="id__detail">{id}</p>
            <h1 className="title__detail">{title}</h1>
            <p className="project__detail">{project}</p>
            <p className="steps__detail">{steps}</p>
            <p> {result}</p>
            <ul type="none">
                <li><button>Удалить</button></li>
                <li><button>Редактировать</button></li>
            </ul>
        </div>

    )
}
    export default CardDetail
