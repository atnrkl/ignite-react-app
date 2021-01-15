import React from "react";
//? styling and motion
import styled from "styled-components";
import { motion } from "framer-motion";
//? redux
import { useSelector } from "react-redux";

const GameDetails = () => {
  const { game, screenshots } = useSelector((state) => state.detail);

  console.log(game);
  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((plt) => (
                <h3>{plt}</h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
