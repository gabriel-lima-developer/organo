import './Field.css'

const Field = ({ type = "text", onChange, label, value, required, placeholder, min, max }) => {

    const onTyping = (e) => {
        onChange(e.target.value)
    }

    const extraProps = {}
    if (min !== undefined) extraProps.min = min
    if (max !== undefined) extraProps.max = max

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onTyping} 
                required={required} 
                placeholder={placeholder} 
                {...extraProps}
            />
        </div>
    )
}

export default Field;