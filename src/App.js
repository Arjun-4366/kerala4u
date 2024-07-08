import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";
import Experience from "./pages/Experience";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="login" element = {<LoginPage/>}/>
        <Route path="explore" element = {<Experience/>}/>

      </Routes>
    </div>
  );
}

export default App;
 