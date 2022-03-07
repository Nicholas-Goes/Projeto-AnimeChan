import AnimeList from "./components/AnimeList"
import { requests } from "./service/Requests"
import "./Index.css"

function App() {
  return (
    <div className="page">
      <div className="anime-recommendations">
        
      </div>
      <div className="anime-list">
        <AnimeList title="Upcoming" fetchUrl={requests.fetchSeasonUpcoming}/>
        <AnimeList title="On Air" fetchUrl={requests.fetchSeasonNow}/>
        <AnimeList title="Top Rated" fetchUrl={requests.fetchTopAnime}/>
        <AnimeList title="Action" fetchUrl={requests.fetchActionAnime}/>
        <AnimeList title="Adventure" fetchUrl={requests.fetchAdventureAnime}/>
        <AnimeList title="Romance" fetchUrl={requests.fetchRomanceAnime}/>
        <AnimeList title="Ecchi" fetchUrl={requests.fetchEcchiAnime}/>
        <AnimeList title="Harem" fetchUrl={requests.fetchHaremAnime}/>
        <AnimeList title="Drama" fetchUrl={requests.fetchDramaAnime}/>
        <AnimeList title="Comedy" fetchUrl={requests.fetchComedyAnime}/>
      </div>       
    </div>
  )
}

export default App
