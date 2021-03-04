import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBasketballBall,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Player = (props) => {
  const {
    id,
    first_name,
    last_name,
    image,
    basePrice,
    team: { full_name },
    handleAddToList,
  } = props;
  const [isBought, setIsBought] = useState(false);
  return (
    <div className='card'>
      <img src={image} alt='player' />
      <h1 className='card-fullname'>{` ${first_name} ${last_name}`}</h1>
      <h2 className='card-price'>
        <FontAwesomeIcon icon={faDollarSign} />
        <span className='ml-1'>{basePrice}</span>
      </h2>
      <h2 className='card-team'>
        <FontAwesomeIcon icon={faBasketballBall} />
        <span className='ml-2'>{full_name}</span>
      </h2>
      <button
        onClick={(e) => {
          handleAddToList(id);
          setIsBought((prev) => !prev);
        }}
        className='btn-grad'
      >
        {isBought ? 'Release' : 'Buy'}
      </button>
    </div>
  );
};

export default Player;
