import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const PlayerInCart = ({ image, first_name, last_name, basePrice }) => {
  return (
    <div className='player'>
      <img src={image} alt='ImagePlayer' />
      <div className='player-info'>
        <p className='name'>{`${first_name} ${last_name}`}</p>
        <p className='price'>
          {' '}
          <FontAwesomeIcon icon={faDollarSign} />
          <span className='ml-1'>{basePrice}</span>
        </p>
      </div>
    </div>
  );
};

export default PlayerInCart;
