import './App.css';
import Dashborad  from './Dashboard/Dashboard';
import {Link, Routes, Route} from 'react-router-dom';
import PlantDetail from './PlantDetail/PlantDetail';
import Consumption from './Consumption/Consumption';
import System from './System/System';
import FooterBar from './FooterBar/FooterBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashborad/>}></Route>
      </Routes>
      <Routes>
        <Route path="/plantdetail" element={<PlantDetail/>}></Route>
      </Routes>
      <Routes>
        <Route path="/consumption" element={<Consumption/>}></Route>
      </Routes>
      <Routes>
        <Route path="/system" element={<System/>}></Route>
      </Routes>
      <FooterBar/>
    </div>
  );
}

export default App;
