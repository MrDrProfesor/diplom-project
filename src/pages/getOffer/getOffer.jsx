import React from "react";

const GetOffer = () => {

    const comment = localStorage.getItem('comment')

    if (!comment) {
        return (
            <div className="form">
                <h1 className="form__title">Проблем нет!</h1>
            </div>
        )
    }

    const {email, feedback} = JSON.parse(comment)
    return (
        <div>
            <div className="form">
                <form className="form__login">
                    <h1 className="form__title">Сообщение от пользователя</h1>
                    <p className="form__input">{email}</p>
                    <p className="form__input">{feedback}</p>
                </form>
            </div>
        </div>
    )
}

export default GetOffer