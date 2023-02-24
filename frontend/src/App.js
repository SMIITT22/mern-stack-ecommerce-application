import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  //this is for cart
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <LinkContainer to="/">
              <Navbar.Brand>
                <div style={{ padding: '1rem'}}>amazon</div>
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/Cart" className="nav-link">
                <div className='cartName'>Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a,c) => a + c.quantity, 0)}
                  </Badge>
                )}
                </div>
              </Link>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved @2023</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
