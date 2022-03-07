import { useEffect, useState } from "react";
import Jikan from "../service/Jikan";
import "./AnimeChar.css"

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
  
  const [charList, setCharList] = useState<CharData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Jikan.get(fetchUrl);
      setCharList(request.data.data);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  
   return (
    <div className="char-row">
      <h2>{title}</h2>
      <div className="char-row-area">
        <div className="char-row-list" style={{
          width: charList.length * 265
        }}>
          {charList.map(( charList, key ) => (
            <div className="char-row-item" key={key}>
              <img src={charList.images.jpg.image_url} alt="alt" />              
            </div>
          ))}
        </div>
      </div>
    </div>
   )
}

export default AnimeChar;