import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/index";
import Header from "./Components/Header";
import Wrapper from "./Components/Wrapper";


function App() {
  return (
  <Wrapper>
    <Header />
    <Outlet />
    
  </Wrapper>
  )
} 

export default App;