import AnimeList from "./components/AnimeList"
import { requests } from "./service/Requests"

function App() {
  return (
    <div className="page">
      <div className="list">
      <AnimeList title="Lista" fetchUrl={requests.fetchTopAnime}/>
      <AnimeList title="Ação" fetchUrl={requests.fetchActionAnime}/>   
      <AnimeList title="Romance" fetchUrl={requests.fetchRomanceAnime}/>   
      <AnimeList title="Comedia" fetchUrl={requests.fetchComedyAnime}/>
      </div>       
    </div>
  )
}

export default App
