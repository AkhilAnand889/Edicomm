import './App.css';
import {Routes,Route} from 'react-router-dom'
import Music from './Header/pages/musichead';
import First from './Header/pages/first';
import Videos from './Header/pages/video';
import Header from './Header/header';
import Sound from './Header/pages/soundEffect';
import After from './Header/projects/After';
import Primier from './Header/projects/Primier';
import Alight from './Header/projects/Alight';
import New from './Header/pages/Top/New';
import Backgrounds from './Header/pages/Top/Backgrounds';
import Valentines from './Header/pages/Top/Valentines';
import Lunar from './Header/pages/Top/Lunar';
import Vertical from './Header/pages/Top/Vertical';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<First/>}/>
        <Route exact path='/music' element={<Music/>}/>
        <Route exact path='/video' element={<Videos/>} />
        <Route exact path='/sound' element={<Sound/>}/>
        <Route exact path='/after' element={<After/>}/>
        <Route exact path='/premier' element={<Primier/>}/>
        <Route exact path='/alight' element={<Alight/>} />
        <Route exact path='/new' element={<New/>}></Route>
        <Route exact path='/backgrounds' element={<Backgrounds/>}/>
        <Route exact path='/valentines' element={<Valentines/>}/>
        <Route exact path='lunar' element={<Lunar/>}/>
        <Route exact path='vertical' element={<Vertical/>}/>
      </Routes>
    </div>
  
  );
}

export default App;
