import { Row, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import Player from '../Player/Player';
import './Players.css';

const Players = ({ players, handleAddToList, loading }) => {
  return (
    <div className='players-container'>
      <h2>
        <FontAwesomeIcon icon={faBasketballBall} />
        <span className='ml-2'>NBA AUCTION</span>
      </h2>

      {loading ? (
        <div className='loader'>
          {' '}
          <Spinner animation='border' variant='info' />
        </div>
      ) : (
        <div className='players-cards'>
          <Row>
            {players.map((player) => (
              <Col lg={6} key={player.id}>
                <Player {...player} handleAddToList={handleAddToList} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Players;
