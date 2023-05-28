import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Layout from './Components/Layout';
import Services from './Components/Services';
import Consult from './Components/Consult';
import TermsOfUse from './Components/TermsOfUse';
import Privacy from './Components/Privacy';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="Consult" element={<Consult/>} />
          <Route path="TermsOfUse" element={<TermsOfUse/>} />
          <Route path="Privacy" element={<Privacy/>} />
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
