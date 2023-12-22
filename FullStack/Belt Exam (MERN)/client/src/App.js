import './App.css';
import Main from './Views/Main';
import { Routes, Route } from "react-router-dom"
import Update from './Views/Update';
import Details from './Views/Details';
function App() {
  return (
    <div className="App">
     <filedset>
      <h1>Store Finder</h1>
     </filedset>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/update/:Store_id" element={<Update/>}/>
        <Route path="/oneStore/:Store_id" element={<Details/>}/>
        </Routes>
    </div>
  );
}
export default App;
