import { useState, useEffect } from "react";
import Jikan from "../services/Jikan";

type AnimeData = {
  images: {
    jpg: {
      large_image_url: string;
    }
  }
  description: string;
  synopsis: string;
};

type props = {
  title: string;
  fetchUrl: string;
}


function AnimeList({title, fetchUrl}: props) {

    const [anime, setAnimes] = useState<AnimeData[]>([])

    useEffect(() => {
      async function fetchData() {
        const request = await Jikan.get(fetchUrl);
        setAnimes(request.data.data)
        return request;
      }
      fetchData();
    }, [fetchUrl])

    return (
      <div className="anime">
        <div className="anime--category">
          <h2>{title}</h2>
          <a href="#">View More</a>
        </div>
        <div className="anime--listarea">
          <div className="anime--list" style={{
            width: anime.length * 260,
          }}>
            {anime.length > 0 && anime.map(anime => {
              return (
                <div className="anime--listitem">
                  <img src={anime.images.jpg.large_image_url} alt={anime.description} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default AnimeList;