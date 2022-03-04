import { useState, useEffect } from "react";
import Jikan from "../services/Jikan";
import "./AnimeList.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  title: string;
};

function AnimeList({ title, fetchUrl } : Props ) {
  
  const [animeList, setAnimeList] = useState<AnimeData[]>([]);

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

  useEffect(() =>{
    async function FetchData() {
      const request = await Jikan.get(fetchUrl);
      setAnimeList(request.data.data);
      return request;
    }
    FetchData();    
  }, [fetchUrl]);

  return (
    <section className="anime-list">
      <section className="title">
        <h1>{title}</h1>
      </section>
      <section className="button-container">
        <div className='button-left' onClick={handleLeftArrow}>
            <NavigateBeforeIcon style={{fontSize: 50, color: 'white'}}/>
        </div>
        <div className='button-right' onClick={handleRightArrow}>
            <NavigateNextIcon style={{fontSize: 50, color: 'white'}}/>
        </div>        
      </section>
      <ul className="anime-list-area">
        <li className="anime-list-item" style={{
          marginLeft: scrollX,
          width: animeList.length * 275
        }}>
          {animeList.length > 0 && animeList.map(animeList => {
            return (
              <a>
                <img src={animeList.images.webp.image_url} alt={animeList.description} />
              </a>
            )
          })
          }
        </li>
      </ul> 
    </section>   
  )
}

export default AnimeList;