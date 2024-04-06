import React, { useState } from "react";
import { Link } from "react-router-dom";
import Instructions from "../../entities/Instructions/Instructions";
import PlayerInput from "../../entities/PlayerInput/PlayerInput";
import PlayerPreview from "../../entities/PlayerPreview/PlayerPreview";

const BattlePage: React.FC = () => {
  const [playerOne, setPlayerOne] = useState<string | null>(null);
  const [playerTwo, setPlayerTwo] = useState<string | null>(null);

  const handleSubmit = (id: string, player: string) => {
    if (id === "playerOne") {
      setPlayerOne(player);
    } else if (id === "playerTwo") {
      setPlayerTwo(player);
    }
  };

  const handleReset = (id: string) => {
    if (id === "playerOne") {
      setPlayerOne(null);
    } else if (id === "playerTwo") {
      setPlayerTwo(null);
    }
  };

  const disabled = !playerOne || !playerTwo;

  return (
    <main className="stack main-stack animate-in">
      <div className="split">
        <h1>Players</h1>
        <Link
          to={{
            pathname: "/results",
            search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
          }}
          className={`btn primary ${disabled ? "disabled" : ""}`}
        >
          Battle
        </Link>
      </div>
      <section className="grid">
        {playerOne === null ? (
          <PlayerInput
            label="Player One"
            onSubmit={(player) => handleSubmit("playerOne", player)}
          />
        ) : (
          <PlayerPreview
            label="Player One"
            username={playerOne}
            onReset={() => handleReset("playerOne")}
          />
        )}
        {playerTwo === null ? (
          <PlayerInput
            label="Player Two"
            onSubmit={(player) => handleSubmit("playerTwo", player)}
          />
        ) : (
          <PlayerPreview
            label="Player Two"
            username={playerTwo}
            onReset={() => handleReset("playerTwo")}
          />
        )}
      </section>
      <Instructions />
    </main>
  );
};

export default BattlePage;
