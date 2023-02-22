import "./app-info.css";
import {DataType} from "../app/app";

type PropType = {
    data: Array<DataType>
}


const AppInfo = (props: PropType ) => {
    const {data} = props
    const increaseLenght = data.filter(item => item.increase)

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {increaseLenght.length}</h2>
        </div>
    )
}

export default AppInfo;