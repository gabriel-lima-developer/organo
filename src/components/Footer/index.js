import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='redesSociais'>
                <img src='/images/fb.png'/>
                <img src='/images/tw.png'/>
                <img src='/images/ig.png'/>
            </div>
            <div className='logo'>
                <img src='/images/logo.png'/>
            </div>
            <div className='copyright'>
                Desenvolvido por Gabriel.
            </div>
        </footer>
    )
}

export default Footer;