import React, { useState } from "react";
import Level from "./Level";
import "./Game.css"; // Import the CSS file
import Classifier from "./classifier";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

var levels = [
  {
    image: "/images/level1.jpg",
    description: "Level 1 description",
    options: ["😄", "😄", "😄", "😄"],
    answer: "😄",
  },
  {
    image: "/images/level2.jpg",
    description: "Level 2 description",
    options: ["😄", "😄", "😄", "😄"],
    answer: "Option Y",
  },
  // Add more levels here
];
const GameFour = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (chosenOption) => {
    const currentAnswer = levels[currentLevel].answer;

    if (chosenOption === currentAnswer) {
      setScore(score + 1);
      toast.success("Well done", {
        icon: "🌟🌟🌟",
        duration: 800,
        style: {
          fontSize: "1.5rem",
          borderRadius: "10px",
          background: "#1e2025",
          color: "#fff",
        },
      });
    }

    if (currentLevel === levels.length - 1) {
      setGameOver(true);
    } else {
      setCurrentLevel(currentLevel + 1);
    }
  };

  if (gameOver) {
    // return (class)
    return (
      <div className="App" style={{ maxHeight: "100vh" }}>
        <div>
          <Toaster
            containerStyle={{
              top: "50%",
            }}
          />
        </div>
        <Classifier />
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <Toaster
          containerStyle={{
            top: "50%",
          }}
        />
      </div>
      <h1 className="title">React Game</h1>
      <div className="level-container">
        <Level
          image={levels[currentLevel].image}
          description={levels[currentLevel].description}
          options={levels[currentLevel].options}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
};

export default GameFour;
