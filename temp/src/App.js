import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Home from './pages/home/Home';
import Join from './pages/join/Join';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/join' element={<Join/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
