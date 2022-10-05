import './AnimeContent.css';

function AnimeContent() {
  return (
    <div className='content-wrapper'>
      <section className="content">
      <h1 className='title'>Subscribe now to Newslatter</h1>
        <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        <button>Subscribe</button>
      </section>
    </div>

  )
}

export default AnimeContent;
