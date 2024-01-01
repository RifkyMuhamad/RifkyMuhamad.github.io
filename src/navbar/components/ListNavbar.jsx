import { Link } from "react-router-dom"
import { myURL } from "../../url/Url"

const ListNavbar = () => {
  return (
    <ul>
      <li>
        <Link to={`${myURL}/article`}>Article</Link>
      </li>
      <li>
        <Link to={`${myURL}/project`}>Project</Link>
      </li>
      <li>
        <Link to={`${myURL}/contact`}>Contact</Link>
      </li>
    </ul>
  )
}

export default ListNavbar