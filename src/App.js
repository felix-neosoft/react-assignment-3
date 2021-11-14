import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Products from './components/Products';
import Courses from './components/Courses';
import Enquiry from './components/Enquiry';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" style={{color:"#ad0a74"}}>React Assignment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color:"#0aadad"}} href="/">Products</Nav.Link>
            <Nav.Link style={{color:"#0aadad"}} href="/courses">Courses</Nav.Link>
            <Nav.Link style={{color:"#0aadad"}} href="/enquiry">Enquiry</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
        </Routes>
      </Router>
      <Container fixed="bottom" fluid style={{backgroundColor:"black", color:"white", height:"100px"}}>
        <Container style={{textAlign:"center", paddingTop:"70px"}}>
          <h5>&copy;2021 by Felix Mathew</h5>
        </Container>
      </Container>
    </div>
  );
}

export default App