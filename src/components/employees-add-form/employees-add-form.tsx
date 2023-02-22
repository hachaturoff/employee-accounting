import './employees-add-form.css';
import {ChangeEvent, useState} from "react";

type PropsType = {
    addEmpoyeer: (name: string, salary: string) => void
}

const EmployeesAddForm = (props: PropsType) => {
    const [nameValue, setNameValue] = useState('')
    const [salaryValue, setSalaryValue] = useState('')

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.currentTarget.value)
    }
    const onChangeSalary = (event: ChangeEvent<HTMLInputElement>) => {
        setSalaryValue(event.currentTarget.value)
    }
    const addEmpoyeer = (event: any) => {
        event.preventDefault()
        props.addEmpoyeer(nameValue, salaryValue)
        setNameValue('')
        setSalaryValue('')
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input value={nameValue}
                       onChange={onChangeName}
                       type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?" />
                <input value={salaryValue}
                       onChange={onChangeSalary}
                       type="number"
                       className="form-control new-post-label"
                       placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={addEmpoyeer}>Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;