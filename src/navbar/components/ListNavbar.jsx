import { Link } from "react-router-dom";
import { myURL } from "../../url/Url";

const ListNavbar = () => {
  return (
    <div className="list-nav">
      <ul>
        <li>
          <a href="https://rifkymuhamad.github.io/article">Article</a>
        </li>
        <li>
          <a href="https://rifkymuhamad.github.io/project">Project</a>
        </li>
        <li>
          <Link to={`${myURL}/contact`}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default ListNavbar;
