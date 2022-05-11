import './Menu.css'
import MenuIcon from '@mui/icons-material/Menu';

function Menu() {
    return (
        <div className='menu'>
            <div className='add'>
            Maked with ❤ by &nbsp;<a className='github'>Nicholas Goes</a>!!!
            </div>
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
        </div>
    )
}

export default Menu;