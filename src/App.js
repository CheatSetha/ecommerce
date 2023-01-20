
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/detail/Detail';
import ProductDetail from './components/detail/ProductDetail';
import NavBar from './components/nav/NavBar';
import Home from './Page/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
   
     <Routes>
       <Route path='/' element={ <Home />}/>
       <Route path='/detail/:id' element={ <Detail />}/>
     </Routes>
    </div>
  );
}

export default App;
