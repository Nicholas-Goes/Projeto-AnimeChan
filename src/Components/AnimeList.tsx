import { useEffect, useState } from "react";
import Jikan from "../Services/Jikan";
import './AnimeList.css'

type AnimeData = {
  images: {
    jpg: {
      large_image_url: string;
    }
  }
  synopsis: string;
};

type props = {
  title: string;
  fetchUrl: string;
}

function AnimeList({title, fetchUrl}: props) {

const [anime, setAnime] = useState<AnimeData[]>([])

useEffect(() => {
  async function fetchData() {
     const request = await Jikan.get(fetchUrl);
     setAnime(request.data.data)
     return request;
  }
  fetchData();
}, [fetchUrl]);

  return (
    <div className="animeRow">
      <div className="animeRow--title">
        <h2>{title}</h2>
        <a href="#">Ver mais</a>
      </div>
      <div className='animeRow--listarea'>
        <div className='animeRow--list' style={{
          marginLeft: scrollX,
          width: anime.length * 250,
        }}>
          {anime.length > 0 && anime.map((anime, key) =>(
            <div key={key} className='animeRow--item'>
              <img src={anime.images.jpg.large_image_url} alt={anime.synopsis}/>                  
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimeList;