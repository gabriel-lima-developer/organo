import './Button.css';

const Button = (props) => {
    return (
        <button className='button'>
            {/* {props.texto} */}
            {props.children}
        </button>
    )
}

export default Button;