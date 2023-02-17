import { Link } from 'react-router-dom'

export default function nav(){

    //Création d'une cosntante pour la page active (surlignae de celle-ci)
        const currentPage = window.location.pathname;
    
        return (
            <nav>
                <ul>
                    <li className={currentPage === '/home' ? 'link_page_active' : 'link_page' }>
                        <Link to='/home'>
                            Accueil
                        </Link>
                    </li>
                    <li className={currentPage === '/about' ? 'link_page_active' : 'link_page' }>
                        <Link to='/about'>
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }