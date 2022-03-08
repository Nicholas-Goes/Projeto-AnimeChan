import WaifuHeader from './Components/WaifuHeader'
import { Requests } from './Services/Requests'

function App() {
  return (
    <div className="page">
      <WaifuHeader fetchUrl={Requests.fetchWaifus}/>
    </div>
  )
}

export default App
