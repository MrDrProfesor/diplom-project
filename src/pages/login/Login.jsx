import React, {useContext, useState} from 'react';
import './login.css'
import {users} from "../../users";
import {AppContext} from "../../App";
import {useNavigate} from "react-router-dom";
import GetOffer from "../getOffer/getOffer";


const Login = () => {
    let navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AppContext)
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()


        if (!isAuth) {
        return (

            <div className="form">
                <form className="form__login" onSubmit={submitLogin}>
                    <h1 className="form__title">Авторизация</h1>
                    <div className="form__inputBlock">
                        <label className="form__label" htmlFor="login">Login</label>
                        <input
                            required
                            className="form__input"
                            type="text"
                            id="login"
                            placeholder="Введите логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />

                    </div>
                    <div className="form__inputBlock">
                        <label className="form__label" htmlFor="password">Пароль</label>
                        <input
                            required
                            className="form__input"
                            type="password"
                            id="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="form__button" type="submit">Войти</button>

                </form>
            </div>

        )
    }
        function submitLogin (e) {
            e.preventDefault()

            const currentUser = users.find(item=>item.login === login)
            if (!currentUser) {
                return alert ('Пользователь не существует')
            }

            if (currentUser.password !== password) {
                return alert ('Неверный пароль')

            }

            alert ('С возвращением!')
            setLogin('')
            setPassword('')
            setIsAuth (true)

            const comment = localStorage.getItem('comment')
            if (!comment) {
                return navigate('/')
            }


        }
        return (
        <GetOffer/>
        )


    }

export default Login
