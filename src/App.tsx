import { useState, useEffect } from 'react';
import AnimeList from './Components/AnimeList'
import Footer from './Components/Footer'
import WaifuHeader from './Components/WaifuHeader'
import { Requests } from './Services/Requests'
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
    }, 2000)
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
