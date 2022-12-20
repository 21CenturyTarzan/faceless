import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { colors } from '../values/colors';
import ethImg from '../img/Ethereum.png';
import bepImg from '../img/binance.png';
import usdtImg from '../img/usdt.png';

const chainLists = [
  { id: 1, name: 'ETH Ethereum (ERC 20)', icon: ethImg },
  { id: 2, name: 'Binance (BEP 20)', icon: bepImg },
];
const coinLists = [
  { id: 1, name: 'USDT Tether USD', icon: usdtImg },
];
function HowitWorks() {
  const [selectedChain, selectedChainHandler] = useState(1);
  const [selectedCoin, selectedCoinHandler] = useState(1);
  console.log(selectedChain);
  return (
    <>
      <Card style={{ background: '#1A2D33' }}>
        <Card.Body>
          <Card.Text className="text-white">
            <Container>
              <Row>
                <Col md={5}>
                  <h1 className="text-white">How Your CoinStats Premium Trial Works</h1>
                </Col>
                <Col md={7}>
                  <Form className="px-4 py-4 rounded" style={{ background: '#21383C' }}>
                    <Form.Group className="mb-3" controlId="chooseNetwork">
                      <Form.Label>Choose Network</Form.Label>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" className="w-100" id="chooseNetwork" style={{ background: '#09181D', textAlign: 'left' }}>
                          <img src={chainLists[selectedChain - 1].icon} alt="" width="20px" /> {chainLists[selectedChain - 1].name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="text-white w-100" style={{ background: '#09181D' }}>
                          {chainLists.map((item, idx) => (
                            <Dropdown.Item className="text-white" key={idx} onClick={() => selectedChainHandler(item.id)}><img src={item.icon} alt="" width="20px" /> {item.name}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="chooseCoin">
                      <Form.Label>Choose Coin</Form.Label>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" className="w-100" id="chooseNetwork" style={{ background: '#09181D', textAlign: 'left' }}>
                          <img src={coinLists[selectedCoin - 1].icon} alt="" width="20px" /> {coinLists[selectedCoin - 1].name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="text-white w-100" style={{ background: '#09181D' }}>
                          {coinLists.map((item, idx) => (
                            <Dropdown.Item className="text-white" key={idx} onClick={() => selectedCoinHandler(item.id)}><img src={item.icon} alt="" width="20px" /> {item.name}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="destinationAddress">
                      <Form.Label>Destination Address</Form.Label>
                      <Form.Control type="text" className="text-white" style={{ background: '#09181D' }} placeholder="Enter the wallet address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control type="text" className="text-white" style={{ background: '#09181D' }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="timeToTransaction">
                      <Form.Label>Time to Transaction</Form.Label>
                      <Form.Select className="text-white" style={{ background: '#09181D' }}>
                        <option>Default select</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="I agree with Term of Use, Privacy Policy and AWL KYC" />
                    </Form.Group>
                    <button type="button"
                      className="btn btn-success btn-lg px-4 text-black w-100"
                      style={{ background: colors.primary }}
                    >
                      Next
                    </button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default HowitWorks;
