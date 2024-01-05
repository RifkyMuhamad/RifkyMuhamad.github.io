import { useEffect, useState } from "react";
import { profileTitlesURL } from "../config/Url";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/cat.png";
import banner2 from "../assets/dog.png";
import banner3 from "../assets/rabbit.png";

const Profile = () => {
  const [data, setData] = useState(null);
  const [titles, setTitles] = useState();

  useEffect(() => {
    axios
      .get(profileTitlesURL)
      .then((response) => {
        setData(response.data);
        setTitles(response.data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTitles(["loading..."]);
      });
  }, []);

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
      <Carousel className="w-full mx-auto">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner1} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: titles,
                }}
              />
            </h1>
            <p></p>
          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner2} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: titles,
                }}
              />
            </h1>
            <p></p>
          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner3} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: titles,
                }}
              />
            </h1>
            <p></p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Profile;
