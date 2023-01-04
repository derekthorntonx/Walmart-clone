import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
        <header>
          <a href='https://www.walmart.ca/browse/electronics/10003?icid=home+page_HP_Category_Tile_Electronics_WM' target='_blank' rel='noopener noreferrer'>
            <img alt='Walmart' src={Logo}/></a>

            
          <div className='search-bar'>
            <input type='text' placeholder='What are you looking for?'/>
            <button><span style={{color: 'white'}}><FontAwesomeIcon className='fa-xl' icon={faMagnifyingGlass}/></span></button>
          </div>

          <div className='shopping-cart-logo'>
           <span style={{color: '#007dc6'}}><FontAwesomeIcon className='fa-xl' icon={faCartShopping}/></span>
           </div>
           <div className='divider'></div>
        </header>
        <div className='main-container'>
            <h1>Electronics</h1>
        </div>
    </div>
  );
}

export default App;
