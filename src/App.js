import Main from './views/Main';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './views/Checkout';


function App() {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
