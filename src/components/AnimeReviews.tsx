import { useState } from "react";
import "./AnimeReviews.css"

function AnimeReviews() {

  const [animeReviews, setAnimeReviews] = useState([])
  
  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url()`,
    }}>
    </section>
  )
}

export default AnimeReviews;