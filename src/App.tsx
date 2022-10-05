import './App.css'
import AnimeContent from './Components/AnimeContent'
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

      <div className='divisor--view'>
        <Divisor />
        
      </div>

      <div className='content--view'>
        <AnimeContent />
        
      </div>

      <footer className='footer--view'>
        <div className='footer-menu'>
          <ul>
            <li className='footer-menu-item'>Example</li>
            <li className='footer-menu-item'>Example</li>
            <li className='footer-menu-item'>Example</li>
            <li className='footer-menu-item'>Example</li>
          </ul>
        </div>

        <section className='footer-address'>
          <h1>Anime<span>Chan</span></h1>
          <address className='copyright'>
            Copyright © Nicholas Goes. All Rights Reserved.
          </address>          
        </section>
      </footer>
      
    </div>
  )
}

export default App
