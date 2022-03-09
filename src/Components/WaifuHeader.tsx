import { useEffect, useState } from "react";
import Waifu from "../Services/Waifu";
import "./WaifuHeader.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

type WaifuData = {
  object: {
    url: string;
  }
}

type Props = {
  fetchUrl: string;
}

function WaifuHeader({fetchUrl}: Props) {

  const [background, setBackground] = useState<WaifuData[]>([]);

  useEffect(() => {
    async function FetchWaifu() {
      const request = await Waifu.get(fetchUrl);
      setBackground(request.data.url);
      return request;
    }
    FetchWaifu();
  }, [fetchUrl])
  

  return (
    <div>
        <header className="waifu-header" style={{
          backgroundImage: `url('${background}')`,
          backgroundPosition: 'initial',
          backgroundSize: 'cover',
        }}>
          <nav className="waifu-header-nav">
            <ul className="waifu-header-nav-ul" >
              <li className="waifu-header-nav-text"><a>Anime<span>Chan</span></a></li>
              <li><a><MenuOutlinedIcon style={{fontSize: 32}} /></a></li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default WaifuHeader;