import './App.css'
import TopAnimeList from './components/TopAnimeList/TopAnimeList'
import SeasonAnimeList from './components/SeasonAnimeList/SeasonAnimeList'
import AnimeHeader from './components/AnimeHeader/AnimeHeader'
import AnimeFooter from './components/AnimeFooter/AnimeFooter'
import AnimeMenu from './components/AnimeMenu/AnimeMenu'

function App() {

  return (
    <div className="page">
      <div className="header">
        <AnimeMenu />
        <AnimeHeader/>
      </div>
      <div className="content--lists">
        <TopAnimeList />

        <SeasonAnimeList />
      </div>
      <div className="footer">
        <AnimeFooter />
      </div>
    </div>
  )
}

export default App;