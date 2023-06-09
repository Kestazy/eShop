import MyHeader from "./components/MyHeader";
import Container from 'react-bootstrap/Container';
import ProtuctList from "./components/ProtuctList";

import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Container>
        < MyHeader />
        <ProtuctList />
      </Container>
    </Router>

  );
}

export default App;
