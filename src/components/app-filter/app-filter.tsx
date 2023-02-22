import "./app-filter.css";
import {FilterValuesType} from "../app/app";

type PropsType = {
        changeFilter: (value: FilterValuesType) => void,
}

const AppFilter = (props: PropsType) => {

        const onFilterAll = () => props.changeFilter('all')
        const onFilterIncrease = () => props.changeFilter('onIncrease')
        const onFilterSalaryBetter = () => props.changeFilter('salaryBet')

    return (
        <div className="btn-group">
            <button
                onClick={onFilterAll}
                type="button"
                className="btn btn-light">
                    Все сотрудники
            </button>
            <button
                onClick={onFilterIncrease}
                type="button"
                className="btn btn-outline-light">
                    На повышение
            </button>
            <button
                onClick={onFilterSalaryBetter}
                type="button"
                className="btn btn-outline-light">
                    З/П больше 1000$
            </button>
        </div>
)
}

export default AppFilter;