import AnimeList from './Components/AnimeList'
import Footer from './Components/Footer'
import WaifuHeader from './Components/WaifuHeader'
import { Requests } from './Services/Requests'

function App() {
  return (
    <div className="page">
      <WaifuHeader fetchUrl={Requests.fetchWaifus}/>

      <div>
        <AnimeList title="Season Now" fetchUrl={Requests.fetchSeasonNow} />
        <AnimeList title="Season Upcoming" fetchUrl={Requests.fetchSeasonUpcoming} />
        <AnimeList title="Top Anime" fetchUrl={Requests.fetchTopAnime} />
        <AnimeList title="Action" fetchUrl={Requests.fetchAction} />
        <AnimeList title="Adventure" fetchUrl={Requests.fetchAdventure} />
        <AnimeList title="Sports" fetchUrl={Requests.fetchSports} />
        <AnimeList title="Fantasy" fetchUrl={Requests.fetchFantasy} />
        <AnimeList title="Comedy" fetchUrl={Requests.fetchComedy} />
        <AnimeList title="Drama" fetchUrl={Requests.fetchDrama} />
        <AnimeList title="Romance" fetchUrl={Requests.fetchRomance} />
        <AnimeList title="Harem" fetchUrl={Requests.fetchHarem} />
        <AnimeList title="Ecchi" fetchUrl={Requests.fetchEcchi} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
