import './App.css'
import AnimeMenu from './components/AnimeMenu';
import AnimeReviews from './components/AnimeReviews';
import AnimeList from './components/AnimeList';
import AnimeFooter from './components/AnimeFooter';
import { request } from "./services/Requests";

function App() {
  return (
    <div>
      <div>
        <AnimeMenu />
        <AnimeReviews fetchUrl={request.fetchReviews} sub=""/>
      </div>
      <div>
        <AnimeList title="Melhores Animes" fetchUrl={request.fetchTopList}/> 
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