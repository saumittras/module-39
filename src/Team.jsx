import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    setTeam(team + 1);
  };

  const handleRemove = () => {
    const newMember = team - 1;
    setTeam(newMember);
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h2>Players: {team} </h2>
      <button onClick={handleAdd}>Add Member</button>
      <button onClick={handleRemove}>Remove Member</button>
    </div>
  );
}
