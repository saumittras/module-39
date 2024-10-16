import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./User";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const clickHandle2 = () => {
    alert("Button Clicked 2");
  };

  const addToFive = (num) => {
    alert(num + 3);
  };
  return (
    <>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <h3>React Core Concept 2</h3>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={clickHandle2}>Click Me2!</button>
      <button onClick={() => alert("Button 3 Clicked")}>Click Me3!</button>
      <button onClick={() => addToFive(3)}>Vajilla Button</button>
    </>
  );
}

export default App;
