import "./AnimeMenu.css";
import MenuIcon from '@mui/icons-material/Menu';

function AnimeMenu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-list-item"><a href="">Anime<span>Chan</span></a></li>
        <li className="menu-list-item"><a href=""><MenuIcon /></a></li>
      </ul>
    </nav>
  )
}

export default AnimeMenu;