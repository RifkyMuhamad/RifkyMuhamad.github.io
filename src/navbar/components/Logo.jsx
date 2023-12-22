import { Link } from "react-router-dom";
import { myURL } from "../../url/Url";

const Logo = () => {
  return (
    <h4>
      <Link to={`${myURL}/`} className="">
        Dyone <span>Strankers</span>.
      </Link>
    </h4>
  );
};

export default Logo;