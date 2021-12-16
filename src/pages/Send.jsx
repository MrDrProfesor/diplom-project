import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const Send = () => {
    const {tourId} = useParams()
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    function sendUserData(e) {
        e.preventDefault()
        localStorage.setItem('name', name)
        localStorage.setItem('phone', phone)
        localStorage.setItem('tourId',tourId)
    }

    return (
        <form onSubmit={sendUserData}>
            <h1>Заявка</h1>
            <input type="text"
                   required
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder="phone"/>
            <input type="text"
                   required
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="name"/>
            <button type="submit">Оставить мои данные</button>
        </form>
    );
};

export default Send;