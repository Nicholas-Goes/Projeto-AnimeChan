import { useEffect, useState } from "react";
import Jikan from "../service/Jikan";

type CharData = {
  name: string;
  about: string;
  favorites: number;
  images: {
    jpg: {
      image_url: string;
    }
  }
}

type props = {
  title: string;
  fetchUrl: string;
}

function AnimeChar({ title, fetchUrl }: props) {
  
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Jikan.get(fetchUrl);
      setCharList(request.data.data);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  
   return (
     <div>hello world</div>
   )
}

export default AnimeChar;