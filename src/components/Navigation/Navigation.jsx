import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import '../../App.css';

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <header className='header'>
            <nav className='links'>
                {!isAuth && <button onClick={() => navigate(`/private`)}>Войти</button>}
                {isAuth && <button onClick={() => setIsAuth(false)}>Выйти</button>}
                <Link to="/">Main</Link>
                <Link to="/tour">tour</Link>
                <Link to="/private">private</Link>
            </nav>
        </header>
    );
};

export default Navigation;