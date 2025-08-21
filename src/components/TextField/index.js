import './TextField.css'

const TextField = ({onChange, label, value, required, placeholder, type, min, max}) => {

    const onTyping = (e) => {
        onChange(e.target.value)
    }

    const extraProps = {}
    if (min !== undefined) extraProps.min = min
    if (max !== undefined) extraProps.max = max

    return (
        <div className="textField">
            <label>{label}</label>
            <input value={value} onChange={onTyping} required={required} placeholder={placeholder} type={type ?? "text"} {...extraProps}/>
        </div>
    )
}

export default TextField;