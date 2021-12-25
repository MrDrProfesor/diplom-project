import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../../App";
import './CardDetail.css'


const CardDetail = () => {
    let navigate = useNavigate();
    const {id} = useParams()
    const {cases,setCases} = useContext(AppContext)
    const {isAuth} = useContext(AppContext)


    const currentCase = cases.find((item)=> item.id == id)
    console.log ('cases',currentCase)
    const {title, project, steps, result} = currentCase

    function deleteCase() {
        const newCaseList = cases.filter (item => item.id !== id)
        console.log(newCaseList)
        alert ('Test case удален!')
        setCases(newCaseList)
        return navigate('/')

    }
    return (
        <div className='card__detail'>
            <p className="id__detail">{id}</p>
            <h1 className="title__detail">{title}</h1>
            <p className="project__detail">{project}</p>
            <p className="steps__detail">{steps}</p>
            <p> {result}</p>
            <ul type="none" className='card-detail__ul'>
                <button className="card__buttonToMain" onClick={() => navigate("/Main")}> ↩ На главную</button>
                {isAuth && <button className="card__buttonDelete" onClick={deleteCase} >✖ Удалить</button>}

            </ul>
        </div>

    )

}
    export default CardDetail
