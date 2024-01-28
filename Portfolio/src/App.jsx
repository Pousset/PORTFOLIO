import "./App.css";
import "./assets/contacts.svg";
import "./assets/house-solid.svg";
import card from "./components/card";
import main from "./components/main";

function App() {
  return (
    <div>
      <div>{main()}</div>
      <div>{card()}</div>
    </div>
  );
}

export default App;
