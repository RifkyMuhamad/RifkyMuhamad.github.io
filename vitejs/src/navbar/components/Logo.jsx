import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="bg-slate-700">
        <h4 className="bg-slate-800 flex px-[3em] font-pixels text-[1.3rem]">
          <Link to={"https://rifkymuhamad.github.io/"} className="bg-lime-900">
            Dyone <span>Strankers</span>.
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Logo;
