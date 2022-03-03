import "./AnimeMenu.css";

function AnimeMenu() {
  return (
    <nav className="AnimeMenu">
      <ul className="AnimeMenu--ul">
        <li className="AnimeMenu--li">
          <a href="#" className="AnimeMenu--a">Anime<span>Chan</span></a>
        </li>

        <li className="AnimeMenu--li">
          <a href="#" className="AnimeMenu--a">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png"/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default AnimeMenu;