import './App.css'
import AnimeMenu from './components/AnimeMenu';
import AnimeHeader from './components/AnimeHeader';
import TopAnimeList from './components/TopAnimeList';
import AnimeFooter from './components/AnimeFooter';

function App() {

  return (
    <div>
      <div>
        <AnimeMenu />

        <AnimeHeader/>
      </div>
      <div>
        <TopAnimeList />

        <TopAnimeList />

        <TopAnimeList />
        
      </div>
      <div>
        <AnimeFooter />
      </div>
    </div>
  )
}

export default App;