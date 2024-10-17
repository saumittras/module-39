import { useEffect } from "react";
import { useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  // Style the component
  const friendStyle = {
    border: "2px solid green",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div style={friendStyle}>
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
