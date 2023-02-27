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

export type FilterValuesType = 'all' | 'onIncrease' | 'salaryBet'



function App() {
    const [employees , setEmployees] = useState([
        {name:"Oleg", salary:800, raising: true, increase: false, id: v1()},
        {name:"Timur", salary:1500, raising: false, increase: false, id: v1()},
        {name:"Sergey", salary:3000, raising: false, increase: false, id: v1()}
    ])
    const [term, setTerm] = useState('')


    const searchEmp = (items : Array<DataType>, term: string) => {
        if(term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
            // if(item.name.toLowerCase() === term.toLowerCase()) {
            //
            // }
        })
    }

    let [filter , setFilter] = useState('all')

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

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    let updateEmpoyee = employees

    if(filter === 'onIncrease') {
        updateEmpoyee = employees.filter(item => item.increase)
    }
    if(filter === 'salaryBet') {
        updateEmpoyee = employees.filter(item => item.salary >= 1000 )
    }

    const visibleData = searchEmp(updateEmpoyee, term)

    return (
        <div className="app">
            <AppInfo data={employees}/>

            <div className="search-panel">
                <SearchPanel setTerm={setTerm} term={term}/>
                <AppFilter changeFilter={changeFilter}/>
            </div>

            <EmployeesList
                data={visibleData}
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