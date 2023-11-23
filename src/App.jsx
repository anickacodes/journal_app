import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EntryList from "./components/EntryList";
import EntryForm from "./components/EntryForm";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Entry from "./components/Entry";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Entry />} />

          <Route path="/list" element={<EntryList />} />
          {/* <Route path='/list/:id' element={<Entry/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
