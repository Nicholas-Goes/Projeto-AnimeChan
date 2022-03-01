import { useEffect } from 'react';
import Jikan from '../../services/Jikan';

import './TopAnimeList.css';

const TopAnimeList = () => {

  useEffect(()=> {
    Jikan
      .get(`top/anime`)
      .then(response => console.log(response.data.data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div className='TopAnime'>
      <section className='TopAnimeList--list'>

      </section>      
    </div>
  )
};

export default TopAnimeList;