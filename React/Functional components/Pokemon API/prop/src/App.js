

import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Hero from './components/Hero';
import Display from './components/Display';
import Error from './components/Error';

const App = () => {



  return (
    <div className='App'>
      <h1>Routing</h1>
      <hr></hr>
      <img src='https://pbs.twimg.com/media/Ei8rGfjX0AAWtAA.jpg'height="200"/>
      <hr></hr>
      {/* <Link to={'/Home'}>Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/"}>Path</Link> */}
      <Routes>
        <Route path='/Home'element={<Home/>}/>
        <Route path='/Home/Hero/:urlVar'element={<Hero/>}/>
        <Route path='/home/Hero/Display'element={<Display/>}/>
        <Route path='/error'element={<Error/>}/>
      </Routes>
     
    </div>
  )
}

export default App
