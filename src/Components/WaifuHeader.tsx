import "./WaifuHeader.css";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import ListIcon from "@mui/icons-material/List";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


type Props = {
  fetchUrl: string;
};

function WaifuHeader({ fetchUrl }: Props) {

  return (
    <div>
      <nav className="waifu-nav">
        <div className="announce">
          <h4>Me Siga nas Redes Sociais 🥰</h4>
        </div>
        <ul className="waifu-navbar">
          <li className="waifu-navtext">
            <a className="waifu-menu">
              <MenuIcon style={{ fontSize: 33 }} />
            </a>
            <a>
              <span className="waifu-logo">ANIMECHAN</span>
            </a>
            <a>
              <span>NOVIDADES</span>
            </a>
            <a>
              <span>PROGRAMAS</span>
            </a>
          </li>
          <li>
            <a>
              <button>TESTE O PREMIUM</button>
            </a>
            <a>
              <SearchIcon style={{ fontSize: 32 }} />
            </a>
          </li>
        </ul>
        <div className="waifu-dropdown-menu">
          <ul className="waifu-dropdown-list">
            <li>
              <a href="#">
                Novidades&nbsp;
                <span>
                  <FiberNewIcon style={{ fontSize: 32 }} />{" "}
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Popular&nbsp;
                <span>
                  <StarIcon style={{ fontSize: 32 }} />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Gêneros&nbsp;
                <span>
                  <ListIcon style={{ fontSize: 32 }} />{" "}
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Sobre&nbsp;
                <span>
                  <InfoIcon style={{ fontSize: 32 }} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="waifu-header">
        <aside className="waifu-aside">
          <h1>LEVANDO O ANIME PARA O PRÓXIMO NIVEL</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias aliquam sit harum, natus excepturi impedit ipsam veniam repellat omnis similique assumenda maiores quam dolore quos, voluptatem praesentium ullam exercitationem?</p>
          <button>VIEW MORE</button>
        </aside>
      </section>
    </div>
  );
}

export default WaifuHeader;
