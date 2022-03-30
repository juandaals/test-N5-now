import {CardFront} from './CardFront'
import {CardBack} from './CardBack'
import { useState } from 'react';
import { CardStyle } from './styles';

export const Card = (props) => {
    const [hover, setHover] = useState(false);
    return (
        <CardStyle className={`card__container`}>
        {
            
        !hover ? <CardFront className="card__container-img" hover={hover} setHover={setHover} {...props} />
        : <CardBack hover={hover} setHover={setHover} {...props}/>
        
        }
        </CardStyle>
    );
}



export default Card;