import { useState, useEffect } from "react";
import Jikan from "../../services/jikan";
import "./TopAnimeList.css"

interface ResponseData {
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
  
  const [topList, setTopList] = useState<ResponseData[]>([]);

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
      <h1>Melhores Animes</h1>
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