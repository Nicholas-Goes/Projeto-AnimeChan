import './App.css'
import AnimeList from '../src/components/AnimeList'
import { Requests } from './services/Requests'

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