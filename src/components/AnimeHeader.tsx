import "./AnimeHeader.css";
import MenuIcon from '@mui/icons-material/Menu';

function AnimeHeader() {
  return (
    <header className="anime-header">
      <nav className="anime-header-nav">
        <ul className="anime-header-nav-ul">
          <li className="anime-header-nav-li">
            <a>Logo</a>
          </li>
          <li className="anime-header-nav-li">
            <a><MenuIcon style={{fontSize: 36}} /></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AnimeHeader;