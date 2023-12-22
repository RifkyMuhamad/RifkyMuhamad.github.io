  import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://dyonestrankers-nodejs-api.vercel.app/";
        const response = await axios.get(apiUrl);
        const messageValue = response.data.message;
        setData(messageValue);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [titles, setTitles] = useState([
    "Rifky Muhamad..",
    "Dyone-Strankers.",
    "ディオン・ストランカース",
    "디온 수토랑쿠",
    "Wanna be Generalist.",
    "Wanna be Expert.",
    "Love Language!",
    "Full Time Learner!",
  ]);

  const title = "Welcome Traveler!";

  return (
    <div className="">
      <div className="">
        <main className="">
          <h1 className="">{title}</h1>
          <div>
            {data ? (
                <div>
                  <pre>{data}</pre>
                </div>
            ) : (
              <p> Loading...</p>
            )}
            {error && <p>Error: {error.message}</p>}
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
        </main>
      </div>
    </div>
  );
};

export default Profile;