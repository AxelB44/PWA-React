import React from 'react';
import './App.css';
import Consomation from './views/Consomation';
import Devices from './views/Devices';
import Settings from './views/Settings';
import Dashboard from './views/Dashboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './components/nav_bar/nav_bar';



function App() {
  const [stockage, setstockage] = React.useState({ title: "fefef" });
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Dashboard setstockage={setstockage} stockage={stockage}></Dashboard>}
        />
        <Route
          path="/Consomation"
          element={<Consomation setstockage={setstockage} stockage={stockage}></Consomation>}
        />
        <Route
          path="/Devices"
          element={<Devices setstockage={setstockage} stockage={stockage}></Devices>}
        />
        <Route
          path="/Settings"
          element={<Settings setstockage={setstockage} stockage={stockage}></Settings>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
