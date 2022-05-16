import logo from "./logoKab.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Insiden Keselamatan Pasien</p>
        <div>RSUD Kab. Aceh Tamiang</div>
      </header>
    </div>
  );
}

export default App;
