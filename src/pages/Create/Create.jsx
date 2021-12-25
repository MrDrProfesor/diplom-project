import React, {useContext, useState} from 'react';
import {AppContext} from "../../App";
import './Create.css'
import {useNavigate} from "react-router-dom";



const Create = () => {
    const [idInput, setIdInput] = useState('')
    const [titleInput, setTitleInput] = useState('')
    const [stepsInput, setStepsInput] = useState('')
    const [projectInput, setProjectInput] = useState('')
    const [resultInput, setResultInput] = useState('')
    const navigate = useNavigate()


    const {setCases} = useContext(AppContext)

    function submitCreate(e) {
        e.preventDefault()
        const newCase = {
            id: idInput,
            title: titleInput,
            project: projectInput,
            steps: stepsInput,
            result: resultInput

        }
        console.log('submitCreate', newCase)
        setCases(prevState => [...prevState, newCase])
        alert('ТК успешно добавлен')
        return navigate('/')

    }

    return (
        <form className="form-create" onSubmit={submitCreate}>
            <h1 className='form-create__title'>Добавление тесткейса</h1>
            <ul type='none'>
                <li><input required className='form-create__input' placeholder="Номер"
                           onChange={(e) => setIdInput(e.target.value)}/></li>
                <li><input required className='form-create__input' placeholder="Тема"
                           onChange={(e) => setTitleInput(e.target.value)}/></li>
                <li><input required className='form-create__input' placeholder="Проект"
                           onChange={(e) => setProjectInput(e.target.value)}/></li>
                <li><textarea className='form-create__inputDescription ' placeholder="Шаги воспроизведения"
                              onChange={(e) => setStepsInput(e.target.value)}/></li>
                <li><input  required className='form-create__input' placeholder="Ожидаемый результат"
                           onChange={(e) => setResultInput(e.target.value)}/></li>
            </ul>
            <ul type='none' className='form-create__buttonList'>
                <li><button type="submit" className='form-create__buttonReturn' onClick={() => navigate("/")}>Отменить</button></li>
                <li><button type="submit" className='form-create__button'>✔ Добавить</button></li>
            </ul>
        </form>

    )
}
export default Create