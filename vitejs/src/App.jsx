import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile/Profile";
import Article from "./article/Article";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="mt-[2.19rem] p-0 h-[2000px] box-border scroll-smooth bg-zinc-600">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/article" element={<Article />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
