import './TextField.css'

const TextField = (props) => {

    const onTyping = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <div className="textField">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;