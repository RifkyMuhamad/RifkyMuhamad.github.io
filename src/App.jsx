import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Profile from "./page/Profile";
import Contact from "./page/Contact";
import Article from "./page/Article";
import Project from "./page/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/article" element={<Article />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;