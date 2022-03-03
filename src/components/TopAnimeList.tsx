import { useState, useEffect } from "react";
import Jikan from "../services/jikan";
import "./AnimeList.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ResponseTopData {
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

function TopAnimeList() {
  
  const [topList, setTopList] = useState<ResponseTopData[]>([]);

  useEffect(() =>{
    Jikan
      .get(`/top/anime`)
      .then(response => {
        setTopList(response.data.data)
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <section className="anime-list">
      <section className="title">
        <h1>
          Melhores Animes
        </h1>
      </section>
      <section className="button-container">
        <div className='button--left'>
            <NavigateBeforeIcon style={{fontSize: 50, color: 'white'}}/>
        </div>
        <div className='button--right'>
            <NavigateNextIcon style={{fontSize: 50, color: 'white'}}/>
        </div>        
      </section>
      <ul className="anime-list-area">
        <li className="anime-list-item" style={{
          width: topList.length * 275
        }}>
          {topList.length > 0 && topList.map(topList => {
            return (
              <a>
                <img src={topList.images.webp.image_url} alt={topList.description} />
              </a>
            )
          })
          }
        </li>
      </ul> 
    </section>   
  )
}

export default TopAnimeList;