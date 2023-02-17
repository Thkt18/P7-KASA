import Logo from '../../assets/logo.png'
import Nav from '../nav/nav'

export default function Header() {
    return (
        <header>
            <h1>
                <img src={Logo} alt="KASA, logo du site"/>
            </h1>
            <Nav />
        </header>
    )
}