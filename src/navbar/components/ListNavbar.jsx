import { Link } from "react-router-dom";
import { myURL } from "../../url/Url";

const ListNavbar = () => {
  return (
    <div className="list-nav">
      <ul>
        {/* Article use Svelte */}
        <li>
          <Link to={`https://rifkymuhamad.github.io/article`}>Article</Link>
        </li>

        {/* Project use Vue */}
        <li>
          <Link to={`https://rifkymuhamad.github.io/project`}>Project</Link>
        </li>
        
        <li>
          <Link to={`${myURL}/contact`}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default ListNavbar;
