import { useState, useEffect } from "react";
import Jikan from "../Services/Jikan";
import AnimeHeader from "./AnimeHeader";
import './AnimeList.css';

type AnimeData = {
    title_english: string
    synopsis: string
    images: {
        webp: {
            large_image_url: string
        }
    }
    rating: string
    episodes: number
    type: string
    status: string
    season: string
    score: string
}

type props = {
    title: string
    endpoint: string
}

function AnimeList({title, endpoint}: props) {

const [anime, setAnime] = useState<AnimeData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const req = await Jikan.get(endpoint);  
            setAnime(req.data.data);
            return console.log(req.data.data);       
        }
        fetchData();
    }, [endpoint])

  return (
    <div className="animeRow">
      <div className="animeRow--title">
          <h2>{title}</h2>
          <a href="#">Ver mais</a>
      </div>
      <div className='animeRow--listarea'>
        <div className='animeRow--list' style={{
          marginLeft: scrollX,
          width: anime.length * 275,
        }}>
          {anime.length > 0 && anime.map((anime, key) =>(
            <div key={key} className='animeRow--item'>
              <div className="animeRow--view">

              <img src={anime.images.webp.large_image_url} alt={anime.synopsis}/>
              </div>
              <div className="animeRow--info">
                <h4>{anime.title_english}</h4>
                <p>Format: {anime.type}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Season: {anime.season}</p>
                <p>Status: {anime.status}</p>
                <p>Score: {anime.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default AnimeList;