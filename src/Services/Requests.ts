export const Requests = {
  fetchTopAnime: `/top/anime`,
  fetchSeasonNow: `/seasons/now`,
  fetchSeasonUpcoming: `/seasons/upcoming`,
  fetchFantasy: `/anime?sfw=false&genres=10&order_by=rank&sort=desc&min_score=8`,
  fetchAction: `/anime?sfw=false&genres=1&order_by=rank&sort=desc&min_score=8`,
  fetchAdventure: `/anime?sfw=false&genres=2&order_by=rank&sort=desc&min_score=8`,
  fetchComedy: `/anime?sfw=false&genres=4&order_by=rank&sort=desc&min_score=8,5`,
  fetchSports: `/anime?sfw=false&genres=30&order_by=rank&sort=desc&min_score=8`,
  fetchDrama: `/anime?sfw=false&genres=8&order_by=rank&sort=desc&min_score=8`,
  fetchHarem: `/anime?sfw=false&genres=35&order_by=rank&sort=desc&min_score=8`,
  fetchRomance: `/anime?sfw=false&genres=22&order_by=rank&sort=desc&min_score=8`,
  fetchEcchi: `/anime?sfw=false&genres=9&order_by=rank&sort=desc&min_score=8`,
}