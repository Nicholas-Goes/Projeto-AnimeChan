import { useState, useEffect } from "react";
import Jikan from "../../services/jikan";
import "./SeasonAnimeList.css"

interface ResponseSeasonData {
  season: string;
  score: number;
  description: string;
  images: {
    webp: {
      image_url: string;
    }
  }
}

function SeasonAnimeList() {
  const [seasonList, setSeasonList] = useState<ResponseSeasonData[]>([])

  useEffect(() => {
    Jikan
      .get(`/seasons/now`)
      .then(response => {
        setSeasonList(response.data.data)
      })
      .catch((err) => console.log(err))
  }, [])
  
  return (
    <div className="seasonAnime">
      <h1><img src="https://img.icons8.com/ios-glyphs/30/ffffff/spyro.png"/> Animes da Temporada</h1>
      <div className="seasonAnime--listarea">
        <div className="seasonAnime--list" style={{
          width: seasonList.length * 300
        }}>
          {seasonList.length > 0 && seasonList.map(seasonList => {
            return (
              <div className="seasonAnime--listitem">
                <img src={seasonList.images.webp.image_url} alt={seasonList.description}></img>
              </div>
            )
          })
          }
        </div>
      </div> 
    </div>
  )
}

export default SeasonAnimeList;