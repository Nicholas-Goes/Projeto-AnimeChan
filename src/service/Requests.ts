export const requests = {
  fetchTopAnime: `/top/anime`,
  fetchSeasonNow: `/seasons/now`,
  fetchSeasonUpcoming: `/seasons/upcoming`,
  fetchActionAnime: `/anime?genres=1&min_score=7`,
  fetchAdventureAnime: `/anime?genres=2&order_by=rank&min_score=7`,
  fetchComedyAnime: `/anime?genres=4&order_by=rank&min_score=7&page=2`,
  fetchDramaAnime: `/anime?genres=8&order_by=rank&min_score=8&page=2`,
  fetchRomanceAnime: `/anime?genres=22&order_by=rank&min_score=6&rating=pg`,
  fetchEcchiAnime: `/anime?genres=9&order_by=rank&min_score=7&rating=r`,
  fetchHaremAnime: `/anime?genres=35&order_by=rank&min_score=7&rating=r`,
}