
import logo from '../../img/logo.png'
import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <div>
                <a href="http://">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='menu'>
                <a href="">Contato</a>
                <a href="">Sobre</a>
                <a href="">Links</a>
            </div>
        </div>
    )
}

