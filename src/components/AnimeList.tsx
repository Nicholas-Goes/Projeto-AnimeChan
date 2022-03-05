import { Key, useEffect, useState } from "react";
import Jikan from "../service/Jikan";

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
    <section className="anime-row">
      <h2>{title}</h2>
      <section className="anime-posters" >
        {animeList.length > 0 && animeList.map((animeList, key) => (
          <ul key={key}>
            <li>
              <img src={animeList.images.jpg.large_image_url} alt={animeList.synopsis}></img>
            </li>
          </ul>
        ))}
      </section>
    </section>
  )
}
export default AnimeList;