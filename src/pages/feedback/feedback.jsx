import React, {useContext, useState} from 'react';
import {AppContext} from "../../App";
import {useNavigate} from "react-router-dom";
import GetOffer from "../getOffer/getOffer";

const Feedback = () => {
    const {isAuth} = useContext(AppContext)
    let navigate = useNavigate();
    const [feedback, setFeedback] = useState('')
    const [email, setEmail] = useState('')

    function submitFeedback(e) {
        e.preventDefault()
        const comment = {
            email: email,
            feedback: feedback,
        }
        localStorage.setItem('comment', JSON.stringify(comment));
        alert('Спасибо за обращение!')
        setEmail('')
        setFeedback('')
        return navigate('/')
    }
    if (!isAuth) {
        return (
            <div className='form'>
                <form className="form__login" onSubmit={submitFeedback}>
                    <h1 className="form__title">Ваше предложение</h1>
                    <div className="form__inputBlock">
                        <label htmlFor="input-email" className="form__label">Email</label>
                        <input required
                               type="text" id="input-email" className="form__input"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder="Укажите ваш email"/>
                    </div>
                    <div className="form__inputBlock">
                        <label htmlFor="input-feedback" className="form__label">Ваше предложение</label>
                        <textarea required
                                  type="text" id="input-feedback" className="form__input"
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                                  placeholder="Опишите ваше предложение"/>
                    </div>
                    <button type="submit" className="form__button">Отправить</button>
                </form>
            </div>
        );
    }
    return (
        <GetOffer/>
    )
};

export default Feedback;