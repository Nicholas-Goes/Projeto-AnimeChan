import './App.css'
import AnimeMenu from './components/AnimeMenu';
import AnimeHeader from './components/AnimeHeader';
import AnimeList from './components/AnimeList';
import AnimeFooter from './components/AnimeFooter';
import { request } from "./services/Requests";

function App() {

  return (
    <div>
      <div>
        <AnimeMenu />

        <AnimeHeader/>
      </div>
      <div>
        <AnimeList title="Melhores Animes" fetchUrl={request.fetchTopRated}/> 
        <AnimeList title="Em Breve" fetchUrl={request.fetchSeasonUpcoming}/>   
        <AnimeList title="Rolando Agora" fetchUrl={request.fetchSeasonNow}/>  
      </div>
      <div>
        <AnimeFooter />
      </div>
    </div>
  )
}

export default App;