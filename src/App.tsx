import './App.css'
import AnimeHeader from './Components/AnimeHeader'
import AnimeList from './Components/AnimeList'
import Footer from './Components/Footer'
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
        <Footer />
        
      </div>
      
    </div>
  )
}

export default App
