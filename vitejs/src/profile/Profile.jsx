// import bgImg from "../assets/rocket.jpg";
import Typewriter from "typewriter-effect";
import { useState } from "react";

const Profile = () => {
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
    "*(3rNd&#0R3IM(_)@$",
  ]);
  const title = "Welcome Traveler!";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        {/* <div
          className="
          xsm:bg-[-35em]
          sm:bg-[-30em]
          md:bg-[-45em]
          lg:bg-[0rem] 
          xl:bg-[-5em]
          2xl:bg-[0em]
          3xl:bg-[0em]
          
          bg-cover w-full h-screen absolute top-0 left-0 bg-no-repeat"
          style={{ backgroundImage: "url(" + bgImg + ")" }}
        ></div> */}
        <div
          className="
        xsm:pl-[3em] xsm:top-[10em]
        inset-x-0 fixed bg-slate-900 bg-opacity-50 "
        >
          <main className="">
            <h1 className="font-pixels">{title}</h1>
            <h1 className="font-zilla">
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
// <h1 className=" font-zilla px-[1em] py-[0.5em] text-[3rem]">
//   <Typewriter
//     options={{
//       autoStart: true,
//       loop: true,
//       delay: 40,
//       strings: titles,
//     }}
//     />
// </h1>
{
  /* <h1 className=" text-[3rem] font-pixels px-[1em] py-[0.5em]">{title}</h1> */
}

// <div className="absolute inset-0 flex items-center justify-start px-[15%]">
// <main className="px-[1em] py-[0.5em]">
