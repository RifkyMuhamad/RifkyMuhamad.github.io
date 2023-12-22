import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

// function App() {

//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiUrl = "https://dyonestrankers-nodejs-api.vercel.app/";
//         const response = await axios.get(apiUrl);
//         const messageValue = response.data.message;
//         setData(messageValue);
//       } catch (error) {
//         setError(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data ? (
//           <div>
//             <pre>{data}</pre>
//           </div>
//       ) : (
//         <p> Loading...</p>
//       )}
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   )
// }

export default App;
