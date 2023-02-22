import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';
import {DataType} from "../app/app";

type PropsType = {
    data: Array<DataType>
    changeIncrease: (id: string) => void,
    upRaising: (id: string) => void,
    removeEmpoyeer: (id: string) => void,
}

const EmployeesList = (props: PropsType ) => {

    const arrEmployee = props.data.map((item: any) => {
        // console.log(item)
        return <EmployeesListItem key={item.id} changeIncrease={props.changeIncrease} removeEmpoyeer={props.removeEmpoyeer} upRaising={props.upRaising} {...item}/>
    })


    return (
        <ul className="app-list list-group">
            {arrEmployee}
        </ul>
    )
}

export default EmployeesList;