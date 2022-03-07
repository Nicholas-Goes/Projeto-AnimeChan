import { useEffect, useState } from "react";
import Jikan from "../service/Jikan";
import './AnimeList.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  link: string;
}

function AnimeList( { title, fetchUrl, link }: props ) {

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let ListW = animeList.length * 200
    if((window.innerWidth - ListW) > x) {
      x = (window.innerWidth - ListW) - 60;
    }
    setScrollX(x);    
  }

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
      <div className="anime-row-text">
        <h2>{title}</h2>
        <a href={link}>View more</a>
      </div>

      <div className="anime-button-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>

      <div className="anime-button-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>

      <div className="anime-poster-area">
        <div className="anime-poster-list" style={{
          marginLeft: scrollX,
          width: animeList.length * 265
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