import './DropdownList.css';

const DropdownList = (props) => {
    return (
        <div className='dropdownList'>
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={e => props.onChange(e.target.value)}>
                <option value="">...</option>
                {props.itens.map(x => { 
                    return <option key={x}>{x}</option>;
                })}
            </select>
        </div>
    )
}

export default DropdownList;