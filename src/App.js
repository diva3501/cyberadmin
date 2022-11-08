import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <>
      <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home/:id" element={<Home />} />

                </Routes>
            </Router>
      </>
    </div>
  );
}

export default App;
