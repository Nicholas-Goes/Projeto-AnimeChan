import { useEffect, useState } from "react";
import Waifu from "../Services/Waifu";
import "./WaifuHeader.css"

type WaifuData = {
  url: string;
}

type Props = {
  fetchUrl: string;
}

function WaifuHeader({fetchUrl}: Props) {

  const [background, setBackground] = useState<WaifuData[]>([]);

  useEffect(() => {
    async function FetchWaifu() {
      const request = await Waifu.get(fetchUrl);
      setBackground(request.data.images);
      return request;
    }
    FetchWaifu();
  }, [fetchUrl])
  

  return (
    <div>
      {background.map((background, key) => (
        <header key={key} className="waifu-header" style={{
          backgroundImage: `url('${background.url}')`,
          backgroundPosition: 'initial',
          backgroundSize: 'cover'
        }}>
          <nav className="waifu-header-nav">
            <ul className="waifu-header-nav-ul">
              <li><a>teste<span>TESTE</span></a></li>
              <li><a>teste</a></li>
            </ul>
          </nav>
        </header>
      ))}
    </div>
  
  )
}

export default WaifuHeader;