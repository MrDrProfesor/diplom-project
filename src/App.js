import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import CardDetail from "./pages/cardDetail/CardDetail";
import Login from "./pages/login/Login";
import {cards} from "./database";
import {createContext, useEffect, useState} from "react";

export const AppContext= createContext(null);

function App() {
    const [cases, setCases] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    useEffect(()=>{
        const response = cards
        setCases(response)
    },[])

    if (cases.length === 0) {
        return (
        <div>
            ...Loading
        </div>
        )
    }

    return (
        <AppContext.Provider value={{cases, setCases,isAuth, setIsAuth}}>
            <Navigation/>
            <main>

                    <Routes>
                        <Route path = "/" element = {<Main/>}/>
                        <Route path = "/cardDetail/:id" element = {<CardDetail/>}/>
                        <Route path = "/Login" element = {<Login/>}/>
                        <Route path = "*" element = {<Navigate to='/' />}/>
                    </Routes>
            </main>
        </AppContext.Provider>
    )
}

export default App;