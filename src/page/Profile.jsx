import { useEffect, useState } from "react";
import { nodeURL } from "../config/Url";
import Typewriter from "typewriter-effect";
import "../styles/Profile.css";
import axios from "axios";

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [titles, setTitles] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(nodeURL)
      .then((response) => {
        setData(response.data);
        setTitles(response.data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTitles(["loading"]);
      });
  }, []);

  return (
    <>
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
    </>
  );
};

export default Profile;
