import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="dyone-logo">
      <h4>
        <Link to={`/`}>
          Dyone <span>Strankers</span>.
        </Link>
      </h4>
    </div>
  );
};

export default Logo;
