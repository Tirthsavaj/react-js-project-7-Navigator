import logo from './logo.svg';
import './App.css';
import Home from './Components/Add';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import View from './Components/View';
import Edit from './Components/Edit';


function App() {
  return (
   
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/viewdata' element={<View/>}/>
              <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
   
  );
}

export default App;