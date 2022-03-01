import { useEffect, useState } from 'react';
import Jikan from '../../services/Jikan';
import './TopAnimeList.css';

interface ResponseData{
  title: string;
  score: number;
  description: string;
  images: {
    jpg: {
      image_url: string;
    }
  }  
}

const TopAnimeList = () => {

  const [TopList, setTopList] = useState<ResponseData[]>([]);

  useEffect(()=> {
    Jikan
      .get(`top/anime`)
      .then(response => {
        setTopList(response.data.data)
      })
      .catch(err => console.log(err));
  }, [Jikan])
  return (
    <div className='TopAnime'>
      <section className='TopAnime--listarea'>
        {TopList.map(TopList => {
          return(
            <div className='TopAnime--listitem'>
              <img src={TopList.images.jpg.image_url} alt={TopList.description} />
            </div>
          )
        })}
      </section>      
    </div>
  )
};

export default TopAnimeList;