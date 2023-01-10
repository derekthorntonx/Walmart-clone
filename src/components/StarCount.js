import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarCount( {product} ) {

    return(
        <div style={{display: 'flex'}}>
       {[...Array(Number(product.rating))].map((index) => {
        index += 1;
        return (
            <FontAwesomeIcon key={index} icon={faStar}/>)}
       )}
        </div>
    )
}

export default StarCount;