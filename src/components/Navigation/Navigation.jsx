import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
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


                <ul  className="ul" type='none'>
                    <button className="ul__button" onClick={() => navigate("/Main")}>На главную</button>
                    {!isAuth && <button className="ul__button" onClick={() => navigate("/Login")}>Войти</button>}
                    {isAuth && <button className="ul__button" onClick={() => setIsAuth(false)}>Выйти</button>}
                </ul>

            </nav>
        </header>
    );
};

export default Navigation;