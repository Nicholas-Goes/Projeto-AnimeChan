import { useEffect, useState } from "react";
import Jikan from "../service/Jikan";
import './AnimeList.css'

type ResponseData = {
  synopsis: string
  images: {
    jpg: {
      large_image_url: string;
    }
  } 
}

type props = {
  title: string;
  fetchUrl: string;
}

function AnimeList( { title, fetchUrl}: props ) {

  const [animeList, setAnimeList] = useState<ResponseData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Jikan.get(fetchUrl);
      setAnimeList(request.data.data);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  return (
    <div className="anime-row">
      <h2>{title}</h2>
      <div className="anime-poster-area">
        <div className="anime-poster-list" style={{
          width: animeList.length * 275
        }}>
          {animeList.length > 0 && animeList.map((animeList, key) => (
            <div className="anime-poster-item" key={key}>
                <img src={animeList.images.jpg.large_image_url} alt={animeList.synopsis}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default AnimeList;