import "./styles/App.css";
import "./assets/contacts.svg";
import "./assets/house-solid.svg";
import main from "./components/Home";
import PDF from "./components/downloadPDF";

function App() {
  return (
    <div>
      <div> {PDF} </div>
      <div>{main()}</div>
    </div>
  );
}

export default App;
