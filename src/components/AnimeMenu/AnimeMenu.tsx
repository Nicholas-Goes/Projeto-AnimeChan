import "./AnimeMenu.css";

function AnimeMenu() {
  return (
    <nav className="AnimeMenu">
      <ul className="AnimeMenu--ul">
        <li className="AnimeMenu--li">
          <img className="AnimeMenu--logo" src="https://img.icons8.com/fluency/48/000000/water.png"/>
          <a href="#" className="AnimeMenu--a">Anime<span>Element</span></a>
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