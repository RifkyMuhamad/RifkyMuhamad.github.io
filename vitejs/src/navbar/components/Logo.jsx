import { Link } from "react-router-dom";
import { myURL } from "../../url/Url";

const Logo = () => {
  return (
    <h4 className="
    lg:text-[2.5rem]

    bg-slate-800">
      <Link to={`${myURL}/`} className="bg-lime-900">
        Dyone <span>Strankers</span>.
      </Link>
    </h4>
  );
};

export default Logo;

{
  /* <div className="mx-auto bg-slate-700">
  <h4 className="bg-slate-800 flex px-[3em] font-pixels text-[1.3rem] sm:html-font">
    <Link to={"http://localhost:5173/"} className="bg-lime-900">
      Dyone <span>Strankers</span>.
    </Link>
  </h4>
</div>; */
}
