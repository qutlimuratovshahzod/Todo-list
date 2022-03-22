import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </div>
  );
}

export default App;
