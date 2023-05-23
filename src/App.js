import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Layout from './Components/Layout';
import Services from './Components/Services';
import Consult from './Components/Consult';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="Consult" element={<Consult/>} />
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
