import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  try {
    const popularData = await axios.get(popularGamesURL());
    const newData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());

    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popularGames: popularData.data.results,
        newGames: newData.data.results,
        upcomingGames: upcomingData.data.results,
      },
    });
  } catch (error) {
    alert(error);
  }
};
