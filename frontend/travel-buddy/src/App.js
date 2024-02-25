import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hotels from './pages/Hotels';
import Flights from "./pages/Flights";
import Cars from "./pages/Cars";
import NavBar from "./components/NavBar";
import InputBar from "./components/InputBar";
import './components/styles/InputBar.css';


function App() {
  return (

    <div className="App">
        <NavBar />
        <InputBar />
        <Router>
            <Routes>
                <Route path="/" element={<Hotels />}/>
                <Route path="/flights" element={<Flights />}/>
                <Route path="/cars" element={<Cars />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
