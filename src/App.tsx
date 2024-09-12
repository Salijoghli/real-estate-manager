import { Header } from "./components/Header";
import Home from "./pages/Home";
import NewListing from "./pages/NewListing";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="new-listing" element={<NewListing/>}/>
      </Routes>
    </>

  );
}

export default App;
