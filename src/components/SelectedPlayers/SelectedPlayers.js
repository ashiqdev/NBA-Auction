import './SelectedPlayers.css';
import PlayerInCart from '../PlayerInCart/PlayerInCart';

const SelectedPlayers = ({ teamPlayers }) => {
  const totalPrice = teamPlayers.reduce((a, c) => a + c.basePrice, 0);
  const plural = teamPlayers.length > 1;
  return (
    <div className='selected'>
      <h5>
        <span>{teamPlayers.length}</span> {plural ? 'players' : 'player'} has
        been selected
      </h5>

      <h5>
        Total expenditure: <span>${totalPrice}</span>
      </h5>
      {teamPlayers.map((player) => (
        <PlayerInCart key={player.id} {...player} />
      ))}
    </div>
  );
};

export default SelectedPlayers;
