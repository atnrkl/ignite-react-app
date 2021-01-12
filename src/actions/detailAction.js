import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (slug) => async (dispatch) => {
  try {
    const detailData = await axios.get(gameDetailsURL(slug));
    const screenshots = await axios.get(gameScreenshotsURL(slug));

    dispatch({
      type: "GET_DETAIL",
      payload: { game: detailData.data, screenshots: screenshots.data.results },
    });
  } catch (error) {}
};
