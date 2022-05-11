import { useState, useEffect } from "react";
import Jikan from "../Services/Jikan";
import './AnimeList.css';

type AnimeData = {
    title: string
    synopsis: string
    images: {
        webp: {
            large_image_url: string
        }
    }
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
          width: anime.length * 375,
        }}>
          {anime.length > 0 && anime.map((anime, key) =>(
            <div key={key} className='animeRow--item'>
              <img src={anime.images.webp.large_image_url} alt={anime.synopsis}/>                  
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default AnimeList;