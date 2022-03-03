import { useState, useEffect } from "react";
import Jikan from "../services/jikan";
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

  useEffect(() =>{
    async function FetchData() {
      const request = await Jikan.get(fetchUrl);
      setAnimeList(request.data.data);
      return console.log(request);;
    }
    FetchData();    
  }, [fetchUrl]);

  return (
    <section className="anime-list">
      <section className="title">
        <h1>{title}</h1>
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

function fetchUrl(fetchUrl: any) {
  throw new Error("Function not implemented.");
}
