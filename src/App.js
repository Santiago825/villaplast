
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Menu from './Components/navbar/navbar'
import AppRouter from './Components/router/router';



function App() {
  return (
    <div className="App">

        <Menu />
        <Container>
          <AppRouter/>
        </Container>
        

    
    </div>
  );
}

export default App;
