import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [togel, setTogel] = useState(false);
  const [togel2, setTogel2] = useState(false);
  const cartItemCount = useSelector(
    (state) => state.products.addToCartPageProducts.length
  );
  // console.log(cartItemCount);

  const handleTogel = () => {
    setTogel(!togel);
    // console.log("change");
  };
  const handleTogel2 = () => {
    setTogel2(!togel2);
    // console.log("change2");
  };
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  const togleTheme = () => {
    setTheme(colorTheme);
    // console.log("theme change");
  };
  return (
    <nav className="bg-gray-100 shadow-sm border-gray-200 dark:bg-gray-900 pt-2 z-50  sticky top-0">
      <div className="mx-auto max-w-7xl pb-2 sm:pb-0 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={handleTogel}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block" */}
              {/* --> */}
              <svg
                className={`${!togel ? "block" : "hidden"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden" */}
              {/* --> */}
              <svg
                className={`${togel ? "block" : "hidden"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex mr-12 sm:mr-0 flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center -ml-5 ">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: " hover:bg-gray-700 hover:text-white" --> */}

                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gray-700 text-white "
                        : " text-gray-500 dark:text-gray-200"
                    } rounded-md px-3 py-2 text-sm font-medium  `
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gray-700 text-white "
                        : " text-gray-500 dark:text-gray-200"
                    } rounded-md px-3 py-2 text-sm font-medium  `
                  }
                  to="/carts"
                >
                  Carts
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gray-700 text-white "
                        : " text-gray-500 dark:text-gray-200"
                    } rounded-md px-3 py-2 text-sm font-medium  `
                  }
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gray-700 text-white "
                        : " text-gray-500 dark:text-gray-200"
                    } rounded-md px-3 py-2 text-sm font-medium  `
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
                <div className="sm:flex hidden border-blue-100 border items-center space-x-1 focus-within:border-2 focus-within:border-blue-500 bg-white py-1 px-2 rounded-full">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/200/svg"
                      className="h-6 w-6 text-gray-400 cursor-pointer hidden sm:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    className="outline-none w-26"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0  right-0 space-x-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={togleTheme}
              className="flex items-center w-7 h-7  justify-center  text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <MdDarkMode className=" hidden dark:block text-xl" />
              <MdOutlineLightMode className=" dark:hidden text-xl" />
            </button>
            {/* cart btn  */}

            <Link
              to={"/addToCartPage"}
              type="button"
              className="relative inline-flex items-center p-2 text-sm font-medium text-center bg-gray-100 hover:bg-gray-400 dark:bg-gray-800 rounded-full text-gray-400 hover:text-white focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-300 focus:outline-hidden"
            >
              <TiShoppingCart className=" text-2xl" />

              <span className="sr-only">Notifications</span>
              <div
                className={`${
                  cartItemCount > 0
                    ? "absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                    : "hidden"
                }`}
              >
                {cartItemCount}
              </div>
            </Link>

            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={handleTogel2}
                  className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95" */}
              {/* --> */}
              <div
                className={`${
                  !togel2
                    ? "hidden"
                    : "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* search btn mobile */}
        <div className="flex flex-row sm:hidden items-center space-x-1 focus-within:border-2 focus-within:border-blue-400 bg-white py-1  px-2 rounded-md">
          <span>
            <svg
              xmlns="http://www.w3.org/200/svg"
              className="h-4 w-4 text-gray-600 cursor-pointer "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            className="  placeholder:text-gray-400  focus:outline-none w-full "
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${togel ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: " hover:bg-gray-700 hover:text-white" --> */}
          <NavLink
            onClick={handleTogel}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gray-700 text-white "
                  : " text-gray-500 dark:text-gray-200"
              } block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleTogel}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gray-700 text-white "
                  : " text-gray-500 dark:text-gray-200"
              } block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white`
            }
            to="/carts"
          >
            Carts
          </NavLink>

          <NavLink
            onClick={handleTogel}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gray-700 text-white "
                  : " text-gray-500 dark:text-gray-200"
              } block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={handleTogel}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gray-900 text-white "
                  : " text-gray-500 dark:text-gray-200"
              } block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white`
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
