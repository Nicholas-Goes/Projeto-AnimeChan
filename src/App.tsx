import AnimeList from "./components/AnimeList"
import { requests } from "./service/Requests"

function App() {
  return (
    <div className="page">
      <div className="list">
      <AnimeList title="Upcoming" fetchUrl={requests.fetchSeasonUpcoming}/>
      <AnimeList title="Top Rated" fetchUrl={requests.fetchTopAnime}/>
      <AnimeList title="On Air" fetchUrl={requests.fetchSeasonNow}/>
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
