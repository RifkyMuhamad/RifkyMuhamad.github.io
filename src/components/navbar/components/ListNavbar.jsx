import { Link } from "react-router-dom";

const ListNavbar = () => {
  return (
    <div className="list-nav">
      <ul>
        <li>
          <Link to={`/article`}>Article</Link>
        </li>
        <li>
          <Link to={`/project`}>Project</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default ListNavbar;
