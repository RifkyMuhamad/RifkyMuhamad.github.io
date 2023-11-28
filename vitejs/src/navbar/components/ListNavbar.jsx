import { Link } from "react-router-dom"
import { myURL } from "../../url/Url"

const ListNavbar = () => {
  return (
    <ul className="justify-center flex gap-x-7">
              <li
                className="
                  xsm:hidden
                  sm:hidden
                  md:hidden
                  lg:hidden
                  xl:block
                  2xl:block 

                  hover:text-teal-400"
              >
                <Link to={`${myURL}/article`}>Article</Link>
              </li>
              <li
                className="
                  xsm:hidden
                  sm:hidden
                  md:hidden
                  lg:hidden
                  xl:block
                  2xl:block
                  
                  hover:text-teal-400"
              >
                <Link to={`${myURL}/project`}>Project</Link>
              </li>
              <li
                className="
                  xsm:hidden
                  sm:hidden
                  md:hidden
                  lg:hidden
                  xl:block
                  2xl:block
                  
                  hover:text-teal-400"
              >
                <Link to={`${myURL}/contact`}>Contact</Link>
              </li>
            </ul>
  )
}

export default ListNavbar