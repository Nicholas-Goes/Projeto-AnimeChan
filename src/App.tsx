import './App.css'
import TopAnimeList from './components/TopAnimeList/TopAnimeList'
import AnimeHeader from './components/AnimeHeader/AnimeHeader'
import AnimeFooter from './components/AnimeFooter/AnimeFooter'
import AnimeMenu from './components/AnimeMenu/AnimeMenu'

function App() {

  return (
    <div>
      <div>
        <AnimeMenu />

        <AnimeHeader/>
      </div>
      <div>
        <TopAnimeList />

        <SeasonAnimeList />
      </div>
      <div>
        <AnimeFooter />
      </div>
    </div>
  )
}

export default App;