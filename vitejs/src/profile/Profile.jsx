import Navbar from "../navbar/Navbar";
import bgImg from "../assets/rocket.jpg";
import Typewriter from "typewriter-effect";
import { useState } from "react";

const Profile = () => {
    // eslint-disable-next-line no-unused-vars
  const [titles, setTitles] = useState(["Rifky Muhamad..", "Dyone-Strankers.", "ディオン・ストランカース", "디온 수토랑쿠","Wanna be Generalist.", "Wanna be Expert.", "Love Language!", "Full Time Learner!", "*(3rNd&#0R3IM(_)@$"]);
  const title = "Welcome Traveler!";

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <Navbar />
      <div className="flex-grow">
        <img src={bgImg} alt="gambar" className="object-cover w-full" />
        <div className="absolute inset-0 flex items-center justify-start px-[15%]">
          <main className="px-[1em] py-[0.5em]">
            <h1 className=" text-[3rem] font-pixels px-[1em] py-[0.5em]">{title}</h1>
            <h1 className=" font-zilla px-[1em] py-[0.5em] text-[3rem]">
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
    </div>
  );
};

export default Profile;