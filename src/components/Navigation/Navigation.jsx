import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../App.css';
import Logo from '../logo.png'
import {AppContext} from "../../App";


const Navigation = () => {
    let navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AppContext)
    return (
        <header className="header">
            <div className="header__title">
                <img className="header__logo" alt="logo" src={Logo}/>
                <h1>TestCaser</h1>
            </div>
            <nav className="navigate">
                <Link to = 'Feedback' className='navigate__link' >Свяжитесь с нами</Link>
                <ul  className="navigate__ul" type='none'>
                    <button className="navigate__button" onClick={() => navigate("/")}>На главную</button>
                    {!isAuth && <button className="navigate__button" onClick={() => navigate("/Login")}>Войти</button>}
                    {isAuth && <button className="navigate__button" onClick={() => setIsAuth(false)}>Выйти</button>}
                </ul>

            </nav>
        </header>
    );
};

export default Navigation;