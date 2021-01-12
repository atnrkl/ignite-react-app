const baseUrl = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) return `0${month}`;
  else return month;
};

const getCurrentDate = () => {
  const day = new Date().getDate();

  if (day < 10) return `0${day}`;
  else return day;
};

const currentYear = new Date().getFullYear();

//band the dates together
const day = getCurrentDate();
const month = getCurrentMonth();
const year = currentYear;

const currentDate = `${year}-${month}-${day}`;
const nextYear = `${year + 1}-${month}-${day}`;
const lastYear = `${year - 1}-${month}-${day}`;

const popular_games = `games?dates=${lastYear},${nextYear}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const popularGamesURL = () => `${baseUrl}${popular_games}`;
const upcomingGamesURL = () => `${baseUrl}${upcoming_games}`;
const newGamesURL = () => `${baseUrl}${new_games}`;

//game details url
const gameDetailsURL = (slug) => `${baseUrl}games/${slug}`;
const gameScreenshotsURL = (slug) => `${baseUrl}games/${slug}/screenshots`;

export {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  gameDetailsURL,
  gameScreenshotsURL,
};
