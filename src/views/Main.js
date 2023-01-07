import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faPlus, faMinus, faStar } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import Product from '../components/Product';
import { useState } from 'react';



function Main() {
    const [ratingShow, setRatingShow] = useState(false);
    const [brandShow, setBrandShow] = useState(false); 
    const [priceShow, setPriceShow] = useState(false);
    const [memoryShow, setMemoryShow] = useState(false); 
    const [harddriveShow, setHarddriveShow] = useState(false);
    const [ratingFilter, setRatingFilter] = useState(false);
    const [brandFilter, setBrandFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);
    const [memoryFilter, setMemoryFilter] = useState([]);
    const [harddriveFilter, setHarddriveFilter] = useState(false);
    const [minPrice, setMinPrice] = useState(false);
    const [maxPrice, setMaxPrice] = useState(false);

    function handleBrandSelection(e) {
        if (e.target.checked){
            setBrandFilter([...brandFilter, e.target.value])
        }
        if (!e.target.checked){
            setBrandFilter(brandFilter.filter(a => a !== `${e.target.value}`))
        }
    }

    function handlePriceRange(e) {
        e.preventDefault();
        if (minPrice > maxPrice){
            alert('Minimum price cannot be higher than maximum.')
            setMaxPrice(false);
            return;
        }
        setPriceFilter([minPrice, maxPrice]);
    }

    function handleMemorySelection(e) {
        if (e.target.checked){
            setMemoryFilter([...memoryFilter, e.target.value])
        }
        if (!e.target.checked){
            setMemoryFilter(memoryFilter.filter(a => a !== `${e.target.value}`))
        }
    }

  return (
    <div className="App">
        <header>
          <a href='https://www.walmart.ca/browse/electronics/laptops-computers/laptops-notebooks/gaming-laptops/10003-20038-30548-40166' target='_blank' rel='noopener noreferrer'>
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
            <h1 style={{color: '#333333', maxHeight: '125px'}}>Gaming laptop</h1>

            <div className='filter-menu'>
                <ul>
                    <li>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: '10%'}} onClick={() => setRatingShow(!ratingShow)}><h4>Customer Rating</h4><span style={{color: '#007dc6'}}><FontAwesomeIcon icon={ratingShow ? faMinus : faPlus}/></span></div>
                        {ratingShow ? <form className='filter-form' onChange={(e)=> {setRatingFilter(e.target.value)}}>
                            <div>
                                <input style={{marginRight: '2.5%'}} type='radio' name='rating' id='fiveStar' value='5'/>
                                <label htmlFor='fiveStar'><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/></label>
                            </div>
                            <div>
                                <input style={{marginRight: '2.5%'}} type='radio' name='rating' id='fourStar' value='4'/>
                                <label htmlFor='fourStar'><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/>+</label>
                            </div>
                            <div>
                                <input style={{marginRight: '2.5%'}} type='radio' name='rating' id='threeStar' value='3'/>
                                <label htmlFor='threeStar'><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/>+</label>
                            </div>
                            <div>
                                <input style={{marginRight: '2.5%'}} type='radio' name='rating' id='twoStar' value='2'/>
                                <label htmlFor='twoStar'><FontAwesomeIcon className='fa-sm' icon={faStar}/><FontAwesomeIcon className='fa-sm' icon={faStar}/>+</label>
                            </div>
                            <div>
                                <input style={{marginRight: '2.5%'}} type='radio' name='rating' id='oneStar' value='1'/>
                                <label htmlFor='oneStar'><FontAwesomeIcon className='fa-sm' icon={faStar}/>+</label>
                            </div>
                        </form> : null}
                    </li>

                    <li>
                    <div onClick={() => setBrandShow(!brandShow)} style={{display: 'flex', justifyContent: 'space-between', paddingRight: '10%'}}><h4>Brand</h4><span style={{color: '#007dc6'}}><FontAwesomeIcon icon={brandShow ? faMinus : faPlus}/></span></div>
                        {brandShow ? <form className='filter-form' onChange={handleBrandSelection}>
                            <div>
                                <input type='checkbox' id='MSI' name='msi' value='MSI'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='MSI'>MSI</label>
                            </div>
                            <div>
                                <input type='checkbox' id='ASUS' name='asus' value='asus'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='ASUS'>ASUS</label>
                            </div>
                            <div>
                                <input type='checkbox' id='hp' name='hp' value='hp'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='hp'>HP</label>
                            </div>
                            <div>
                                <input type='checkbox' id='acer' name='acer' value='acer'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='acer'>Acer</label>
                            </div>
                        </form> : null}
                    </li>

                    <li>
                    <div onClick={() => setPriceShow(!priceShow)} style={{display: 'flex', justifyContent: 'space-between', paddingRight: '10%'}}><h4>Price</h4><span style={{color: '#007dc6'}}><FontAwesomeIcon icon={priceShow ? faMinus : faPlus}/></span></div>
                        {priceShow ? <form className='filter-form'>
                            <input type='number' placeholder='Min' value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                            <input type='number' placeholder='Max' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
                            <button onClick={handlePriceRange} style={{width: '50%', marginTop: '5%', marginLeft: '25%'}} className='add-to-cart-button'>Apply</button>
                        </form> : null}
                    </li>

                    <li>
                    <div onClick={() => setMemoryShow(!memoryShow)} style={{display: 'flex', justifyContent: 'space-between', paddingRight: '10%'}}><h4>RAM</h4><span style={{color: '#007dc6'}}><FontAwesomeIcon icon={memoryShow ? faMinus : faPlus}/></span></div>
                        {memoryShow ? <form className='filter-form' onChange={handleMemorySelection}>
                            <div>
                                <input type='checkbox' id='fourGB' name='fourGB' value='4'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='fourGB'>4 GB</label>
                            </div>
                            <div>
                                <input type='checkbox' id='eigthGB' name='eigthGB' value='8'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='eigthGB'>8 GB</label>
                            </div>
                            <div>
                                <input type='checkbox' id='sixteenGB' name='sixteenGB' value='16'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='sixteenGB'>16 GB</label>
                            </div>
                            <div>
                                <input type='checkbox' id='thirtytwoGB' name='thirtytwoGB' value='32'/>
                                <label style={{marginLeft: '2.5%'}} htmlFor='thirtytwoGB'>32 GB</label>
                            </div>
                        </form> : null}
                    </li>

                    <li>
                    <div onClick={() => setHarddriveShow(!harddriveShow)} style={{display: 'flex', justifyContent: 'space-between', paddingRight: '10%'}}><h4>Hard Drive Type</h4><span style={{color: '#007dc6'}}><FontAwesomeIcon icon={harddriveShow ? faMinus : faPlus}/></span></div>
                        {harddriveShow ? <form className='filter-form' onChange={(e)=> {setHarddriveFilter(e.target.value)}}>
                            <div>
                                <input type='radio' name='hardDriveType' id='hdd' value='hdd'></input>
                                <label style={{marginLeft: '2.5%'}} htmlFor='hhd'>HDD</label>
                            </div>
                            <div>
                                <input type='radio' name='hardDriveType' id='ssd' value='ssd'></input>
                                <label style={{marginLeft: '2.5%'}} htmlFor='ssd'>SSD</label>
                            </div>
                        </form> : null}
                    </li>
                </ul>
            </div>

            <div className='product-grid'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    </div>
  );
}

export default Main;
