import './Menu.css'
import MenuIcon from '@mui/icons-material/Menu';

function Menu() {
    return(
        <nav>
            <div>
                <h1>Anime<span>Chan</span></h1>
            </div>
            <ul>
                <li>
                    <MenuIcon />
                </li>
            </ul>
        </nav>
    )
}

export default Menu;