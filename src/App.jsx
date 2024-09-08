import "./styles/Home.css";
import main from "./pages/Home";
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
