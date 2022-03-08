import "./AnimeHeader.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import Waifu from "../service/Waifu";

type WaifuData = {
  url: string;
  dominant_color: string;
}

type props = {
  fetchUrl: string;
}

function AnimeHeader({ fetchUrl }: props) {

  const [waifuHeader, setWaifuHeader] = useState<WaifuData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Waifu.get(fetchUrl);
      setWaifuHeader(request.data.images);
      return console.log(request.data);
    }
    fetchData();
  }, [fetchUrl])

  return (
    <div className="page-header">
        {waifuHeader.map((waifuHeader) => (
          <header className="anime-header" style={{
            backgroundImage: `url("${waifuHeader.url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'initial',
          }}>
            <nav className="anime-header-nav">
              <ul className="anime-header-nav-ul">
                <li className="anime-header-nav-text"><a href="#">Anime<span style={{color: `${waifuHeader.dominant_color}`}}>Chan</span></a></li>
                <li><a href="#"><MenuIcon style={{fontSize: 48, color: '#000'}}/></a></li>
              </ul>
            </nav>
          </header>
        ))}
    </div>
  )
}

export default AnimeHeader;