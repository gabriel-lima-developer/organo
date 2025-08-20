import './DropdownList.css';

const DropdownList = (props) => {
    return (
        <div className='dropdownList'>
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={e => props.onChange(e.target.value)}>
                {/* {props.itens.map(item => <option>{item}</option>)}; */}
                {/* {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>;
                })} */}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    )
}

export default DropdownList;