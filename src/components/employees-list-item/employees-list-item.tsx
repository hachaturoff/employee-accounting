import './employees-list-item.css';

export type PropsType = {
    name: string,
    salary: number,
    increase: boolean,
    raising: boolean,
    id: string
    changeIncrease: (id: string) => void,
    upRaising: (id: string) => void,
    removeEmpoyeer: (id: string) => void,

}

const EmployeesListItem = (props: PropsType) => {
        const {name, salary, increase, id, raising} = props

        let str: string = 'list-group-item d-flex justify-content-between'

        const onChangeIncrease = () => props.changeIncrease(id)
        const onUpRaising = () => props.upRaising(id)
        const onRemoveEmploee = () => props.removeEmpoyeer(id)

        if (raising) {
            str += ' like'
        }
        if (increase) {
            str += ' increase'
        }


        return (

            <li className={str}>
                <span onClick={onUpRaising} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + " $"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={onChangeIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onRemoveEmploee}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployeesListItem;