import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

const emojis = [
  { id: 1, symbol: '😡', label: 'Nagyon elégedetlen' },
  { id: 2, symbol: '😞', label: 'Elégedetlen' },
  { id: 3, symbol: '😐', label: 'Semleges' },
  { id: 4, symbol: '🙂', label: 'Elégedett' },
  { id: 5, symbol: '😍', label: 'Nagyon elégedett' },
];

function App() {
  const [selected, setSelected] = React.useState(null);
  const [showThankYou, setShowThankYou] = React.useState(false);

  const handleSelect = (id) => {
    setSelected(id);
    setShowThankYou(true);
    console.log(`Kiválasztott érték: ${id}`);
  };

  React.useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setSelected(null);
        setShowThankYou(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        {!showThankYou ? (
          <>
            <h2 className="text-white mb-4">Mennyire elégedett a kiszolgálással?</h2>
            <Row className="w-100 justify-content-center">
              {emojis.map((emoji) => (
                <Col xs={6} sm={4} md={2} key={emoji.id} className="mb-3 d-flex">
                  <Card
                    onClick={() => handleSelect(emoji.id)}
                    className={`text-center ${selected === emoji.id ? 'border-primary' : ''} flex-fill`}
                    style={{ cursor: 'pointer', backgroundColor: '#1a1a1a', color: '#fff' }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <span style={{ fontSize: '2rem' }}>{emoji.symbol}</span>
                      <Card.Text className="mt-2" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                        {emoji.label}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <h2 className="text-white">Köszönjük a szavazást!</h2>
        )}
      </Container>
    </div>
  );
}

export default App;
