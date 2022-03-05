import { useEffect, useState } from "react";
import Jikan from "../services/Jikan";
import "./AnimeReviews.css"


type AnimeData = {
  title: string;
  score: number;
  year: string;
  description: string;
  images: {
    webp: {
      image_url: string;
    }
  }
}

type Props = {
  fetchUrl: string;
  sub: string;
};

function AnimeReviews({ sub, fetchUrl } : Props ) {

  const [animeReviews, setAnimeReviews] = useState<AnimeData[]>([])

  useEffect(() =>{
    async function FetchData() {
      const request = await Jikan.get(fetchUrl);
      setAnimeReviews(request.data.data);
      return request;
    }
    FetchData();    
  }, [fetchUrl]);
  
  return (
    <section className="anime-reviews"></section>
  )
}

export default AnimeReviews;