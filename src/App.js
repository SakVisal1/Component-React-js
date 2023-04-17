import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar';
import Main from './component/Main';
import MyCard from './component/myCard';
import { Row,Col,Container } from 'react-bootstrap';
import Footer from './component/footer';


 function App() {
    return (
    <>
     <Container fluid>
      <NavBar/>
      <Main/>
     </Container>
     <Container className='mt-5'>
     <Row className='g-4'>
        <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
          <MyCard/>
        </Col>
        <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
        <MyCard/>
      </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
          <MyCard/>
      </Col>
      <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
        <MyCard/>
      </Col>
      <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
      <MyCard/>
    </Col>
    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
    <MyCard/>
    </Col>
    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
    <MyCard/>
    </Col>
    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
    <MyCard/>
    </Col>
     </Row>
     </Container>
     <Container fluid className='mt-5'>
      <Footer/>
     </Container>
    </>
    );
  }

  export default App;
