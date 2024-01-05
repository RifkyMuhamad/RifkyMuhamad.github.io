import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Contact from "./contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;