import { useState } from "react";

interface PlayerInputProps {
  label: string;
  onSubmit: (player: string) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({ label, onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label htmlFor="username" className="player-label">
        {label}
      </label>
      <div className="input-row">
        <input
          type="text"
          id="username"
          placeholder="github username"
          autoComplete="off"
          value={username}
          onChange={handleChange}
        />
        <button className="btn link" type="submit" disabled={!username}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default PlayerInput;
