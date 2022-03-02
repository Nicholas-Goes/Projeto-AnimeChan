import "./AnimeMenu.css"

function AnimeMenu() {
  return (
    <nav className="AnimeMenu">
      <ul className="AnimeMenu--ul">
        <li className="AnimeMenu--li">
          <img className="AnimeMenu--logo" src="src/assets/anime-icon.png" />
          <a href="#" className="AnimeMenu--a">Anime<span>Chan</span></a>
        </li>

        <li className="AnimeMenu--li">
          <a href="#" className="AnimeMenu--a">Menu</a>
        </li>
      </ul>
    </nav>
  )
}

export default AnimeMenu;