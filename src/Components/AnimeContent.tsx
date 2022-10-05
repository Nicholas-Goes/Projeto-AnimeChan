import './AnimeContent.css';

function AnimeContent() {
  return (
    <section className="content">
      <h1 className='title'>Subscribe to Newslatter</h1>
        <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        <button>Inscrever-se</button>
    </section>
  )
}

export default AnimeContent;
