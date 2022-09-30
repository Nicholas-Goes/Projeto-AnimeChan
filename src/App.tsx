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
        <div>
          <ul>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
          </ul>
        </div>

        <section className='title'>
          <h1>Anime<span>Chan</span></h1>          
        </section>

        <address>
          Copyright © Nicholas Goes. All Rights Reserved.
        </address>

      </footer>
      
    </div>
  )
}

export default App
