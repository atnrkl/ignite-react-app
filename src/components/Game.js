import React from "react";
//? styling and motion
import styled from "styled-components";
import { motion } from "framer-motion";

//? redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ game }) => {
  //* load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(game.slug));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h1>{game.name}</h1>
      <p>{game.released}</p>
      <img src={game.background_image} alt={game.name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
