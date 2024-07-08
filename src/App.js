import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";
import Experience from "./pages/Experience";
import WhereToStay from "./pages/WhereToStay";
import NavBar from "./components/NavBar";


function App() {
  const location = useLocation()
  const showNavbar = location.pathname !== '/login'
  return (
    <div className="App">
      {showNavbar && <NavBar/>}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="login" element = {<LoginPage/>}/>
        <Route path="explore" element = {<Experience/>}/>
        <Route path="stay" element = {<WhereToStay/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
 