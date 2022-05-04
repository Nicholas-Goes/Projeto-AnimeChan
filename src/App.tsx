import "./App.css"
import AnimeList from "./Components/AnimeList"
import { Requests } from "./Services/Requests"

function App() {

  return (
    <div className="App">
      <div className='list' id='animeList'>
        <AnimeList title='Season Now' fetchUrl={Requests.fetchSeasonNow} />

        <AnimeList title='Season Upcoming' fetchUrl={Requests.fetchSeasonUpcoming} />

        <AnimeList title='Best rated' fetchUrl={Requests.fetchTopAnime} />
      </div> 
    </div>
  )
}

export default App;