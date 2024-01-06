import { useEffect, useState } from "react";
import { profileTitlesURL } from "../config/Url";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/cat.png";
import banner2 from "../assets/dog.png";
import banner3 from "../assets/rabbit.png";

const Profile = () => {
  const [titles, setTitles] = useState();

  useEffect(() => {
    axios
      .get(profileTitlesURL)
      .then((response) => {
        setTitles(response.data.id);
        // setTitles(["Wanna be Generalist"]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTitles(["loading..."]);
      });
  }, []);

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen ">



      {/* <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 xsm:bg-red-500 sm:bg-slate-500 md:bg-lime-500 lg:bg-sky-500 xl:bg-fuchsia-500 w-full h-screen gap-4"> */}
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 w-full h-screen gap-4">


        <div className="justify-center items-center flex">
          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl bg-white font-semibold mb-4 text-neutralDGrey md:w-3/4">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: titles,
              }}
            />
          </h1>
        </div>


        <Carousel indicators={false} className="">
          <img
            src={banner1}
            alt=""
          />
          <img
            src={banner2}
            alt=""
            />
          <img
            src={banner3}
            alt=""
          />
        </Carousel>


      </div>



    </div>
  );
};

export default Profile;
