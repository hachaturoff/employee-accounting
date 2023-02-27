import './search-panel.css';
import {ChangeEvent} from "react";

type PropsType = {
    term: string
    setTerm: (value: string) => void,
}

const SearchPanel = (props: PropsType) => {

    const onsetTerm = (event: ChangeEvent<HTMLInputElement>) =>  props.setTerm(event.target.value)

    return (
        <input type="text"
               className="form-control search-input"
               placeholder="Найти сотрудника"
                onChange={(event ) => onsetTerm(event)}
               value={props.term}
               style={{fontSize: '20px'}}
        />
    )
}

export default SearchPanel;