import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {v1} from "uuid";
import {useState} from "react";

export type DataType = {
    name: string,
    salary: number,
    increase: boolean,
    raising: boolean,
    id: string
}
//
// type PropsType = {
//     name: string,
//     salary: number,
//     increase: boolean,
//     id: string
// }



function App() {
    const [employees , setEmployees] = useState([
        {name:"Oleg", salary:800, raising: true, increase: true, id: v1()},
        {name:"Timur", salary:1500, raising: false, increase: true, id: v1()},
        {name:"Sergey", salary:3000, raising: false, increase: true, id: v1()}
    ])

    const changeIncrease = (id: string ) => {
        let upempl = employees.map((user) => {
            if(user.id === id) {
                user.increase = !user.increase
                return user
            }
            return user
        })
        setEmployees(upempl)
    }
    const upRaising = (id: string) => {
        let upempl = employees.map((user) => {
            if(user.id === id) {
                user.raising = !user.raising
                return user
            }
            return user
        })
        setEmployees(upempl)
    }

    const addEmpoyeer = (name: string, salary: string) => {
        const employee = {
            name,
            salary : +salary,
            raising: false,
            increase: false,
            id: v1()}
        const updateEmpl = [employee, ...employees]
        setEmployees(updateEmpl)
    }

    const removeEmpoyeer = (id: string) => {
        let updateEmpl = employees.filter(item =>
            item.id !== id ? item : null
        )
        // console.log(updateEmpl)
        setEmployees(updateEmpl)
    }

    return (
        <div className="app">
            <AppInfo data={employees}/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList
                data={employees}
                changeIncrease={changeIncrease}
                upRaising={upRaising}
                removeEmpoyeer={removeEmpoyeer}
                />
            <EmployeesAddForm
                addEmpoyeer={addEmpoyeer}/>

        </div>
    );
}

export default App;