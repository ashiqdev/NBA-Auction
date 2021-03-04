import './App.css';
import Players from './components/Players/Players';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddToList = (id) => {
    const player = players.find((pl) => pl.id === id);

    if (player) {
      const isSelected = selectedPlayers.find((pl) => pl.id === id);
      // if user is not in the list add it
      if (!isSelected) {
        setSelectedPlayers((prev) => [...prev, player]);
      } else {
        setSelectedPlayers((prev) => {
          const users = prev.filter((player) => player.id !== id);
          return users;
        });
      }
    }
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      const url = 'https://api.mocki.io/v1/9f6ffbf1/players';
      const { data } = await (await fetch(url)).json();
      setPlayers(data);
    };

    fetchPlayers()
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='main-container'>
      <div className='glass'>
        <Container>
          <Row>
            <Col lg={8}>
              <Players
                handleAddToList={handleAddToList}
                players={players}
                loading={loading}
              />
            </Col>

            <Col lg={4}>
              <SelectedPlayers teamPlayers={selectedPlayers} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
