import AnimeList from "./components/AnimeList"
import { requests } from "./service/Requests"

function App() {
  return (
    <div className="page">
      <AnimeList title="Lista" fetchUrl={requests.fetchTopAnime}/>      
    </div>
  )
}

export default App
