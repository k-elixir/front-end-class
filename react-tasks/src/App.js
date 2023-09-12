import Counter from "./Counter";
import RandomNum from "./RandomNum";
import Person from "./Person";
import "./App.css";

function App() {
  let person = {
    name: "Kimia",
    familyName: "Rafi",
    age: 23,
    city: "Rasht",
  };
  return (
    <div className="App">
      <Counter />
      <RandomNum />
      <Person value={person} />
    </div>
  );
}

export default App;
