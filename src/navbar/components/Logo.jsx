import { Link } from "react-router-dom";
import { myURL } from "../../url/Url";

const Logo = () => {
  return (
    <div className="dyone-logo">
      <h4>
        <Link to={`${myURL}`} className="">
          Dyone <span>Strankers</span>.
        </Link>
      </h4>
    </div>
  );
};

export default Logo;
