import { useState } from "react";
import Typewriter from "typewriter-effect";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import "./Profile.css";
// import axios from "axios";

const Profile = () => {

  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const apiUrl = "https://dyonestrankers-nodejs-api.vercel.app/";
  //       const response = await axios.get(apiUrl);
  //       const messageValue = response.data.message;
  //       setData(messageValue);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // eslint-disable-next-line no-unused-vars
  const [titles, setTitles] = useState([
    "Vite + React",
    "Rifky Muhamad..",
    "Dyone-Strankers.",
    "ディオン・ストランカース",
    "디온 수토랑쿠",
    "Wanna be Generalist.",
    "Wanna be Expert.",
    "Love Language!",
    "Full Time Learner!",
  ]);

  const [count, setCount] = useState(0);

  // return (
  //   <div className="">
  //     <div className="">
  //       <main className="">
  //         {/* <div>
  //           {data ? (
  //               <div>
  //                 <pre>{data}</pre>
  //               </div>
  //           ) : (
  //             <p> Loading...</p>
  //           )}
  //           {error && <p>Error: {error.message}</p>}
  //         </div> */}
  //       </main>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: titles,
              }}
            />
          </h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Profile;