import { HashRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile/Profile";
import Article from "./article/Article";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/article" element={<Article />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
