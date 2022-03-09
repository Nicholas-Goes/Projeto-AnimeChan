import { useEffect, useState } from "react";
import Jikan from "../Services/Jikan";
import './AnimeList.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

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
  
  const [scrollX, setScrollX] = useState(0);

  const [anime, setAnime] = useState<AnimeData[]>([])

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let ListW = anime.length * 200
    if((window.innerWidth - ListW) > x) {
      x = (window.innerWidth - ListW) - 60;
    }
    setScrollX(x);    
  }

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
      <div className='animeRow--left' onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}}/>
      </div>
      <div className='animeRow--right' onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}}/>
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