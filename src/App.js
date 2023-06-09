import MyHeader from "./components/MyHeader";
import Container from 'react-bootstrap/Container';
import About from "./components/About";
import ProtuctList from "./components/ProtuctList"


function App() {
  return (
    <Container>
      < MyHeader />
      {/* <About /> */}
      <ProtuctList />
    </Container>
  );
}

export default App;
