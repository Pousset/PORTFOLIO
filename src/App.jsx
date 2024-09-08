import "./styles/App.css";
import "./assets/contacts.svg";
import "./assets/house-solid.svg";
import main from "./components/Home";

function App() {
  return (
    <div>
      <div>{main()}</div>
    </div>
  );
}

export default App;
