import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageSearch from './PageSearch';



function App() {
  return (
    <div className="App">

  <Router>
    <Routes>
      <Route path ="/search" element={<PageSearch />}/>

<Route path='/' element={<Home />
} />

    </Routes>
  </Router>


    </div>
  );
}

export default App;
