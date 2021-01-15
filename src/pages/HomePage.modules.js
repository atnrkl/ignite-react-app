import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameActions";

import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";

export const GameList = () => {
  const dispatch = useDispatch();

  const { newGames, upcomingGames, popularGames } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <>
      <SectionTitle>Popular Games</SectionTitle>
      <SMgameList>
        <SMgames>
          {/* map the popular games and create a game card for each */}
          {popularGames.map((item, index) => (
            <Game game={item} key={index} id={item.id} />
          ))}
        </SMgames>
      </SMgameList>

      <SectionTitle>Upcoming Games</SectionTitle>
      <SMgameList>
        <SMgames>
          {upcomingGames.map((item, index) => (
            <Game game={item} key={index} id={item.id} />
          ))}
        </SMgames>
      </SMgameList>

      <SectionTitle>New Games</SectionTitle>
      <SMgameList>
        <SMgames>
          {newGames.map((item, index) => (
            <Game game={item} key={index} id={item.id} />
          ))}
        </SMgames>
      </SMgameList>
    </>
  );
};
export const SectionTitle = styled.h2`
  margin: 2rem 5rem;
  font-size: 3rem;
  font-family: "Abril Fatface", cursive;
`;

const SMgameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const SMgames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;
