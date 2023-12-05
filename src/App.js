
import './App.css';
import {Route, Routes, Switch, BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'
import About from './components/AboutUs'
import Contact from './components/Contact'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
    <Navigation />
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />} ></Route >
      <Route path='/about' element={<About />} ></Route >
      <Route path='/contact' element={<Contact/>} ></Route >
      <Route path='/terms' element={<Terms/>} ></Route >
      <Route path='/privacy' element={<Privacy/>} ></Route >
    </Routes>
    </BrowserRouter>
    
    </>

    
  );
}

export default App;
