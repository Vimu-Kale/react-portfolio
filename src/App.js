import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import HeroCover from './components/HeroCover/HeroCover';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<HeroCover/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
        </Routes> 
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
