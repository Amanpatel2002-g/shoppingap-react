import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Store } from "./pages/store"
import {Navbar}  from "./components/navbar"
function App() {
  return (
    <>
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
