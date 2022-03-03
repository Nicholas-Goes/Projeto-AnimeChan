import { useState, useEffect } from "react";
import Jikan from "../../services/jikan";
import "./TopAnimeList.css"

interface ResponseTopData {
  slug: `Melhores Animes`;
  title: string;
  description: string;
  score: number;
  images: {
    webp: {
      image_url: string;
    }
  }
}

function TopAnimeList() {
  
  const [topList, setTopList] = useState<ResponseTopData[]>([]);

  useEffect(() =>{
    Jikan
      .get(`/top/anime`)
      .then(response => {
        setTopList(response.data.data)
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="TopAnime">
      <h1><img src="https://img.icons8.com/ios-glyphs/30/ffffff/fire-element--v1.png"></img> Melhores Animes</h1>
      <div className="TopAnime--listarea">
        <div className="TopAnime--list" style={{
          width: topList.length * 300
        }}>
          {topList.length > 0 && topList.map(topList => {
            return (
              <div className="TopAnime--listitem">
                <img src={topList.images.webp.image_url} alt={topList.description}></img>
              </div>
            )
          })
          }
        </div>
      </div> 
    </div>   
  )
}

export default TopAnimeList;