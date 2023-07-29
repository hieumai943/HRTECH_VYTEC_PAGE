import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Thele } from './components/thele';
import { Timeline } from './components/Timeline';
import { GiaiThuong } from './components/GiaiThuong';
import { AboutMe } from './components/AboutMe';
import { LienHe } from './components/LienHe';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Thele />
      <Timeline />
      <GiaiThuong/>
      <AboutMe />
      <LienHe/>
    </div>
  );
}

export default App;
