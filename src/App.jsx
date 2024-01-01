import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Article from "./article/Article";
import Project from "./projects/Project";
import Contact from "./contact/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </HashRouter>
  );
}