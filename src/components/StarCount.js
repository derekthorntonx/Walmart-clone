import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarCount( {product} ) {

    switch(Number(product.rating)) {

        case 1:
            return (<FontAwesomeIcon icon={faStar}/>)

        case 2:
            return (<div style={{display: 'flex'}}>
            <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
            </div>
            )
        
        case 3:
            return (<div style={{display: 'flex'}}>
            <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
            </div>
            )

        case 4:
            return (<div style={{display: 'flex'}}>
            <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
            </div>
            )
        
        case 5:
        return (<div style={{display: 'flex'}}>
        <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
        </div>
        )

        default:
            return null;
    }
}

export default StarCount;