import { useState, useEffect } from "react";
import Jikan from "../services/Jikan";

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

    const [anime, setAnimes] = useState<AnimeData[]>([])

    useEffect(() => {
      async function fetchData() {
        const request = await Jikan.get(fetchUrl);
        setAnimes(request.data.data)
        return request;
      }
      fetchData();
    }, [fetchUrl])
}

export default AnimeList;