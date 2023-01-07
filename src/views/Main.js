import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faPlus, faMinus, faStar } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import Product from '../components/Product';
import { useEffect, useState } from 'react';



function Main() {
    const [ratingShow, setRatingShow] = useState(false);
    const [brandShow, setBrandShow] = useState(false); 
    const [priceShow, setPriceShow] = useState(false);
    const [memoryShow, setMemoryShow] = useState(false); 
    const [harddriveShow, setHarddriveShow] = useState(false);
    const [ratingFilter, setRatingFilter] = useState(false);
    const [brandFilter, setBrandFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState(false);
    const [memoryFilter, setMemoryFilter] = useState([]);
    const [harddriveFilter, setHarddriveFilter] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [inventory, setInventory] = useState([]);

    let test = [{
        name: 'test1',
        rating: '5',
        brand: 'msi',
        memory: '4',
        harddrive: 'ssd',
        price: '10'
        },
        {
        name: 'test2',
        rating: '1',
        brand: 'asus',
        memory: '8',
        harddrive: 'ssd',
        price: '100'
        },
        {
        name: 'test3',
        rating: '3',
        brand: 'acer',
        memory: '16',
        harddrive: 'hdd',
        price: '6969'
        },
        {
        name: 'test4',
        rating: '2',
        brand: 'hp',
        memory: '32',
        harddrive: 'hdd',
        price: '2000'
        },
    ]

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

    // filter functions

    function filterRating(arr) {
        if (!ratingFilter){
            return arr;
        }
        return arr.filter((item) => item.rating >= ratingFilter)
    }

    function filterBrand(arr) {
        return arr.filter((item) => item.brand.includes(brandFilter));
    }

    function filterMemory(arr) {
        return arr.filter((item) => item.memory.includes(memoryFilter));
    }

    function filterHarddrive(arr) {
        if (!harddriveFilter) {
            return arr;
        }
        return arr.filter((item) => item.harddrive.includes(harddriveFilter));
    }

    function filterPrice(arr) {
        if (!priceFilter){
            return arr;
        }
        if ((priceFilter[0] === '') && (priceFilter[1] === '')){
            return arr;
        }
        if (priceFilter[0] === ''){
            return arr.filter((item) => parseInt(item.price) <= parseInt(priceFilter[1]))}
        if (priceFilter[1] === ''){
            return arr.filter((item) => parseInt(item.price) >= parseInt(priceFilter[0]))
        }
        return arr.filter((item) => parseInt(item.price) >= parseInt(priceFilter[0]) && parseInt(item.price) <= parseInt(priceFilter[1]))
    }

    useEffect(() => {
        let result = test;
        result = filterRating(result);
        result = filterBrand(result);
        result = filterMemory(result);
        result = filterHarddrive(result);
        result = filterPrice(result);

        setInventory(result);
       console.log(result)
    }, [ratingFilter, brandFilter, memoryFilter, harddriveFilter, priceFilter]);

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
                                <input type='checkbox' id='MSI' name='msi' value='msi'/>
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
                            <button onClick={handlePriceRange} disabled={minPrice > maxPrice && maxPrice != ''} style={{width: '50%', marginTop: '5%', marginLeft: '25%'}} className='add-to-cart-button'>Apply</button>
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
            </div>
        </div>
    </div>
  );
}

export default Main;
