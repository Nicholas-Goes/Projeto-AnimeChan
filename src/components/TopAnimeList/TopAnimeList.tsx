import { useEffect, useState } from 'react';
import Jikan from '../../services/Jikan';
import './TopAnimeList.css';

interface ResponseData{
  title: string;
  score: number;
  description: string;
  images: {
    webp: {
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
      <div className='TopAnime--listarea'>
        <div className='TopAnime--list' style={{
          width: TopList.length * 260,
        }}>
          {TopList.length > 0 && TopList.map(TopList => {
            return(
              <div className='TopAnime--listitem'>
                <img src={TopList.images.webp.image_url} alt={TopList.description} />
              </div>
          )
          })}
        </div>   
      </div>   
    </div>
  )
};

export default TopAnimeList;