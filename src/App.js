import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects'
import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import HeroCover from './components/HeroCover/HeroCover';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<HeroCover/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>} />
        </Routes> 
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
