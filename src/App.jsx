import axios from "axios";
import './App.css'
import { useEffect } from "react";
import { useState } from "react";

function App() {

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

  return (
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
  )
}

export default App
