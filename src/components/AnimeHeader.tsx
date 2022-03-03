import "./AnimeHeader.css"

function AnimeHeader() {
  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(src/assets/banner-mobile.webp)`,
    }}>
    </section>
  )
}

export default AnimeHeader;