import "./assets/css/App.css";
import NavBar1 from "./components/NavBar1";
import WeatherPanel from "./components/WeatherPanel";


function App() {
  return (
    <div className="App">
      <NavBar1 />
      <WeatherPanel/>
    </div>
  );
}

export default App;
