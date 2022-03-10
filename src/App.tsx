import { useState, useEffect } from 'react';
import AnimeList from './Components/AnimeList'
import Footer from './Components/Footer'
import WaifuHeader from './Components/WaifuHeader'
import { Requests } from './Services/Requests'
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false)
    }, 4000)
  }, [])
  
  return (
    <div className="page">
      {loading ? (
        <div className="loading">
          <ClipLoader size={150} color={"#b86d0b"}loading={loading}/>
        </div>
      ) : (
        <div>
          <div>
            <WaifuHeader fetchUrl={Requests.fetchWaifus} />
          </div>
            <div>
              <AnimeList title="Season Now" fetchUrl={Requests.fetchSeasonNow} />
              <AnimeList title="Season Upcoming" fetchUrl={Requests.fetchSeasonUpcoming} />
              <AnimeList title="Top Anime" fetchUrl={Requests.fetchTopAnime} />
              <AnimeList title="Action" fetchUrl={Requests.fetchAction} />
              <AnimeList title="Adventure" fetchUrl={Requests.fetchAdventure} />
              <AnimeList title="Sports" fetchUrl={Requests.fetchSports} />
              <AnimeList title="Fantasy" fetchUrl={Requests.fetchFantasy} />
              <AnimeList title="Comedy" fetchUrl={Requests.fetchComedy} />
              <AnimeList title="Drama" fetchUrl={Requests.fetchDrama} />
              <AnimeList title="Romance" fetchUrl={Requests.fetchRomance} />
              <AnimeList title="Harem" fetchUrl={Requests.fetchHarem} />
              <AnimeList title="Ecchi" fetchUrl={Requests.fetchEcchi} />
            </div>
          <div>
            <Footer />
          </div>
        </div>
        )
      }
    </div>
  )
}

export default App
