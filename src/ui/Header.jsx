import {
  faBars,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="flex items-center max-xl:w-[90%] max-xl:py-[50px]  font-Istok  justify-between pt-[81px] m-auto  max-w-[1231px]">
      <h2
        className="m-0
        flex items-center  justify-start"
      >
        <span className="text-[2.5rem] mr-[10px] capitalize text-primary font-bold">
          Matt Ridley
        </span>
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{ color: "#FFD233", fontSize: "36px" }}
        />
      </h2>

      <nav
        className={`${
          !showSidebar && "max-xl:hidden"
        }  h-[52px] mr-[6px]  max-xl:absolute max-xl:left-0 max-xl:top-0 max-xl:bg-primary max-xl:h-screen max-xl:w-full max-xl:z-10`}
      >
        <ul className="flex items-center max-xl:flex-col gap-[1.8125rem] max-xl:mt-[5rem]">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive && "font-semibold"
                } text-[2.25rem] text-primary max-xl:text-accent  capitalize`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive && "font-semibold"
                } text-[2.25rem] text-primary max-xl:text-accent capitalize`
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive && "font-semibold"
                } text-[2.25rem] text-primary max-xl:text-accent capitalize`
              }
              to={"/books"}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive && "font-semibold"
                } text-[2.25rem] text-primary max-xl:text-accent capitalize`
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive && "font-semibold"
                } text-[2.25rem] text-primary max-xl:text-accent capitalize`
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="max-xl:block hidden z-20">
        <FontAwesomeIcon
          onClick={() => setShowSidebar(false)}
          className={` ${
            showSidebar && "max-xl:block"
          }   text-3xl cursor-pointer text-accent hidden`}
          icon={faXmark}
        />
        <FontAwesomeIcon
          onClick={() => setShowSidebar(true)}
          className={` ${
            showSidebar && "  max-xl:hidden"
          }  max-xl:block   text-3xl cursor-pointer text-primary`}
          icon={faBars}
        />
      </div>
    </header>
  );
}

export default Header;
