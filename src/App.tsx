import AnimeList from "./components/AnimeList";
import { requests } from "./service/Requests";
import "./Index.css";

function App() {
  return (
    <div className="page">
      <div className="anime-char">
           
      </div>
      <div className="anime-list">
        <AnimeList title="Upcoming" fetchUrl={requests.fetchSeasonUpcoming} link="/"/>
        <AnimeList title="On Air" fetchUrl={requests.fetchSeasonNow} link="/"/>
        <AnimeList title="Top Rated" fetchUrl={requests.fetchTopAnime} link="/"/>
        <AnimeList title="Action" fetchUrl={requests.fetchActionAnime} link="/"/>
        <AnimeList title="Adventure" fetchUrl={requests.fetchAdventureAnime} link="/"/>
        <AnimeList title="Romance" fetchUrl={requests.fetchRomanceAnime} link="/"/>
        <AnimeList title="Ecchi" fetchUrl={requests.fetchEcchiAnime} link="/"/>
        <AnimeList title="Harem" fetchUrl={requests.fetchHaremAnime} link="/"/>
        <AnimeList title="Drama" fetchUrl={requests.fetchDramaAnime} link="/"/>
        <AnimeList title="Comedy" fetchUrl={requests.fetchComedyAnime} link="/"/>
      </div>       
    </div>
  )
}

export default App
