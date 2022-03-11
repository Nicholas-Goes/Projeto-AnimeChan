import { useEffect, useState } from "react";
import Waifu from "../Services/Waifu";
import "./WaifuHeader.css";

import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import ListIcon from "@mui/icons-material/List";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

type WaifuData = {
  object: {
    url: string;
  };
};

type Props = {
  fetchUrl: string;
};

function WaifuHeader({ fetchUrl }: Props) {
  const [background, setBackground] = useState<WaifuData[]>([]);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    let componentMounted = true;
    async function FetchWaifu() {
      const request = await Waifu.get(fetchUrl);
      if (componentMounted) {
        setBackground(request.data.url);
      }
    }
    FetchWaifu();
    return () => {
      componentMounted = false;
    };
  }, [fetchUrl]);

  return (
    <div>
      <nav className="waifu-nav">
        <ul className="waifu-navbar">
          <li className="waifu-navtext">
            <a>
              Anime<span>Chan</span>
            </a>
          </li>
          <li>
            <a className="hamburguer">
              <MenuOutlinedIcon style={{ fontSize: 32 }} onClick={onClick} />
            </a>
          </li>
        </ul>
        <div className="waifu-dropdown-menu">
          <ul className="waifu-dropdown-list">
            <li>
              <a href="#">
                Novelty&nbsp;
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
                Genres&nbsp;
                <span>
                  <ListIcon style={{ fontSize: 32 }} />{" "}
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                About&nbsp;
                <span>
                  <InfoIcon style={{ fontSize: 32 }} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="waifu-header" style={{
        backgroundImage: `url('${background}')`,
        backgroundPosition: 'initial',
        backgroundSize: 'cover',
      }}>
      </section>
    </div>
  );
}

export default WaifuHeader;
