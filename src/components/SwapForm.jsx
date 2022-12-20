import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { colors } from '../values/colors';
import ethImg from '../img/Ethereum.png';
import bepImg from '../img/binance.png';

const chainLists = [
  { value: 1, text: 'ETH Ethereum (ERC 20)', icon: ethImg },
  { value: 2, text: 'Binance (BEP 20)', icon: bepImg },
];
function HowitWorks() {
  return (
    <>
      <Card style={{ background: '#1A2D33' }}>
        <Card.Body>
          <Card.Text className="text-white">
            <Container>
              <Row>
                <Col md={5}>sm=4</Col>
                <Col md={7}>
                  <Form className="px-4 py-4 rounded" style={{ background: '#21383C' }}>
                    <Form.Group className="mb-3" controlId="chooseNetwork">
                      <Form.Label>Choose Network</Form.Label>
                      <Form.Select className="text-white" style={{ background: '#09181D' }}>
                        <option value="eth" data-icon="eth.png"> ETH Ethereum (ERC 20)</option>
                        <option value="eth" data-icon="eth.png"> Binance (BEP 20)</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="chooseCoin">
                      <Form.Label>Choose Coin</Form.Label>
                      <Form.Select className="text-white" style={{ background: '#09181D' }}>
                        <option>USDT Tether USD</option>
                      </Form.Select>
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
