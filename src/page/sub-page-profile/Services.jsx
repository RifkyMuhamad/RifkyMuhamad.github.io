import React from "react";
import logo1 from "../../assets/html_logo.png";
import logo2 from "../../assets/laravel_logo.png";
import logo3 from "../../assets/mysql_logo.png";
import logo4 from "../../assets/nodejs_logo.png";
import logo5 from "../../assets/react_logo.png";
import logo6 from "../../assets/tailwind_logo.png";

const Services = () => {
  const respository = [
    {
      id: 1,
      title: "Laravel API Gateway",
      description: "Laravel RESTful API",
      image: "src/assets/laravel_api_gateway_card.jpg",
      link: "https://github.com/RifkyMuhamad/LaravelAPIGateway",
    },
    {
      id: 2,
      title: "NodeJS API Gateway",
      description: "NodeJS RESTful API",
      image: "src/assets/nodejs_api_gateway_card.jpg",
      link: "https://github.com/RifkyMuhamad/NodeJSAPIGateway",
    },
    {
      id: 3,
      title: "NodeJS JWT Auth",
      description: "NodeJS JSON Web Token Authentication",
      image: "src/assets/nodejs_jwt_auth_card.jpg",
      link: "https://github.com/RifkyMuhamad/NodeJSJWTAuthApp",
    },
    {
      id: 4,
      title: "Python API Gateway",
      description: "Python RESTful API",
      image: "src/assets/python_api_gateway_card.jpg",
      link: "https://github.com/RifkyMuhamad/PythonAPIGateway",
    },
    {
      id: 5,
      title: "RifkyMuhamad.github.io",
      description: "Personal Website untuk Web ini",
      image: "src/assets/rifkymuhamad_card.jpg",
      link: "https://github.com/RifkyMuhamad/RifkyMuhamad.github.io",
    },
  ];

  return (
    <div
      className="
    md:px-14
    px-4 py-16
    mx-auto
    max-w-screen-2xl
    bg-amber-400
    "
    >
      <div
        className="
      text-center
      my-8
      "
      >
        <div>
          <h2
            className="
          text-4xl text-neutralDGrey
          font-semibold
          mb-2"
          >
            Technology
          </h2>
          <p className="text-neutralDGrey">
            Beberapa teknologi yang saya gunakan untuk membuat web ini
          </p>
          <div
            className="
          my-12
          flex flex-wrap
          justify-between
          items-center
          gap-8"
          >
            <img className="w-[4rem] h-[4rem]" src={logo1} alt="" />
            <img className="w-[4rem] h-[4rem]" src={logo2} alt="" />
            <img className="w-[4rem] h-[4rem]" src={logo3} alt="" />
            <img className="w-[4rem] h-[4rem]" src={logo4} alt="" />
            <img className="w-[4rem] h-[4rem]" src={logo5} alt="" />
            <img className="w-[4rem] h-[4rem]" src={logo6} alt="" />
          </div>
        </div>
        <div>
          <div
            className="
          mt-40 mx-auto
          md:w-1/2
          text-center
          "
          >
            <h2
              className="
            text-4xl text-neutralDGrey
            font-semibold
            mb-3"
            >
              Github Repository
            </h2>
            <p className="text-neutralDGrey">
              Beberapa repository opensource yang bisa diakses secara publik
            </p>
          </div>
          <div
            className="
          mx-14
          mb-14
          p-10
          grid grid-cols-1
          xl:grid-cols-3
          lg2:grid-cols-2
          md2:grid-cols-2
          md:w-11/12
          gap-10
          "
          >
            {respository.map((repo) => (
              <div
                key={repo.id}
                className="
                rounded-tl-3xl rounded-br-3xl rounded-md 
                mx-auto 
                text-center
                sm:w-[20rem] md:h-full
                shadow
                cursor-pointer
                transition-all
                duration-300
                flex items-center justify-center
                h-full
                bg-slate-300"
              >
                <a href={repo.link} target="_blank">
                  <div
                    className="
                flex flex-col
                justify-center
                items-center
                h-[75%]"
                  >
                    <div
                      className="
                  my-4
                  w-full h-full
                  justify-center
                  items-center
                  flex
                  py-3"
                    >
                      <img src={repo.image} />
                    </div>
                    <h4
                      className="
                  text-neutralDGrey
                  text-xl
                  md:text-2xl 
                  font-bold
                  mb-2 px-2"
                    >
                      {repo.title}
                    </h4>
                    <p className="text-[0.7rem] md:text-sm text-neutralGrey px-3 py-5">
                      {repo.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
