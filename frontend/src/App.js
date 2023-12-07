import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>CenturyPlus</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/product/:slug" element={<ProductScreen />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <footer>
          <div>
            <p className="text-center">
              &copy; Trinity Collection. All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
