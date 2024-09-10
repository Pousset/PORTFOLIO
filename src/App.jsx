import "./styles/Home.css";
import "./assets/contacts.svg";
import "./assets/house-solid.svg";
import main from "./pages/Home";

function App() {
  return (
    <div>
      <div>{main()}</div>
    </div>
  );
}

export default App;
