import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile/Profile";
import Article from "./article/Article";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import NotFound from "./notfound/NotFound";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="m-0 p-0 h-[2000px] box-border scroll-smooth bg-pink-700">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/article" element={<Article />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
