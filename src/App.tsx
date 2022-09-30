import './App.css'
import AnimeHeader from './Components/AnimeHeader'
import AnimeList from './Components/AnimeList'
import Divisor from './Components/Divisor'
import Menu from './Components/Menu'
import { Requests } from './Services/Requests'

function App() {

  return (
    <div className="App">
      <div className='menu--view'>
        <Menu />
      </div>
      <div className='header--view'>
        <AnimeHeader />
      </div>
      <div className='list--view'>
        <AnimeList title="Season Now" endpoint={Requests.fetchSeasonNow} />

        <AnimeList title="Season Upcoming" endpoint={Requests.fetchSeasonUpcoming} />
        
        <AnimeList title="Best Rated" endpoint={Requests.fetchTopAnime} />
      </div>

      <div className='footer--view'>
        <Divisor />
        
      </div>
      
    </div>
  )
}

export default App
