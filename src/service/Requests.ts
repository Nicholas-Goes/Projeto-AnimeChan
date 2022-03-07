export const requests = {
  fetchTopAnime: `/top/anime`,
  fetchSeasonNow: `/seasons/now`,
  fetchSeasonUpcoming: `/seasons/upcoming`,
  fetchActionAnime: `/anime?genres=1&min_score=7&limit=20`,
  fetchAdventureAnime: `/anime?genres=2&order_by=rank&min_score=7&limit=20`,
  fetchComedyAnime: `/anime?genres=4&order_by=rank&min_score=7&page=2&limit=20`,
  fetchDramaAnime: `/anime?genres=8&order_by=rank&min_score=8&page=2&limit=20`,
  fetchRomanceAnime: `/anime?genres=22&order_by=rank&min_score=6&rating=pg&limit=20`,
  fetchEcchiAnime: `/anime?genres=9&order_by=rank&min_score=7&rating=r&limit=20`,
  fetchHaremAnime: `/anime?genres=35&order_by=rank&min_score=7&rating=r&limit=20`,
  fetchCharacters: `/characters?order_by=favorites&sort=desc`
}