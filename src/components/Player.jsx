import { useRef, useState } from "react";
export default function Player() {
  const [enteredPlayerName, setPLayerName] = useState("");

  const playerName = useRef();

  function handleClick() {
    setPLayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
