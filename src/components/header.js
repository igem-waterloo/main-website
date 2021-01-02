import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.svg"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="flex flex-col items-center w-full justify-between">
      <nav className="flex flex-row py-6 w-full">
        <div className="flex items-center flex-shrink-0">
          <img src={logo} alt="Logo" />
        </div>

        <div className="hidden text-base text-right flex-grow lg:block">
          <div class="group inline-block relative">
            <button class="text-blue font-bg-r text-lg px-4 inline-flex items-center">
              <span class="mr-1">About</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden text-blue font-bg-r text-lg text-left pt-1 group-hover:block">
              <li class="">
                <a
                  class="pt-3 px-4 block whitespace-no-wrap hover:text-teal"
                  href="/team"
                >
                  Team
                </a>
              </li>
              <li class="">
                <a
                  class="py-3 px-4 block whitespace-no-wrap hover:text-teal"
                  href="/advisors"
                >
                  Advisors
                </a>
              </li>
            </ul>
          </div>
          <Link
            to={`/projects`}
            className="block mt-4 mx-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Projects
          </Link>
          <Link
            to={`/collaborations`}
            className="block mt-4 mx-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Collaborations
          </Link>
          <Link
            to={`/contact`}
            className="block mt-4 mx-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Contact
          </Link>
          <div class="group inline-block relative">
            <button class="text-blue font-bg-r text-lg px-4 inline-flex items-center">
              <span class="mr-1">Recruitment</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden text-blue font-bg-r text-lg text-left pt-1 left-0 group-hover:block">
              <li class="">
                <a
                  class="pt-3 px-4 block whitespace-no-wrap hover:text-teal"
                  href="/timeline"
                >
                  Timeline
                </a>
              </li>
              <li class="">
                <a
                  class="py-3 px-4 block whitespace-no-wrap hover:text-teal"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/joinus"
            className="inline-block px-4 py-3 mt-4 mx-4 leading-none border rounded-lg font-bg-r text-lg text-white bg-blue hover:text-white hover:bg-yellow lg:mt-0"
          >
            Join Us
          </a>
        </div>

        <div className="block lg:hidden ml-auto">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded outline-none font-bg-r text-lg text-black border-black hover:text-teal hover:border-teal"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow`}
      >
        <div className="font-bg-r text-lg text-right lg:hidden absolute top-14 right-8 md:right-32 p-4 bg-gray">
          <Link
            to={`/team`}
            className="block lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Team
          </Link>
          <Link
            to={`/advisors`}
            className="block mt-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Advisors
          </Link>
          <Link
            to={`/projects`}
            className="block mt-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Projects
          </Link>
          <Link
            to={`/collaborations`}
            className="block mt-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Collaborations
          </Link>
          <Link
            to={`/contact`}
            className="block mt-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Contact
          </Link>
          <Link
            to={`/timeline`}
            className="block mt-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            Timeline
          </Link>
          <Link
            to={`/faq`}
            className="block mt-4 lg:inline-block lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
          >
            FAQ
          </Link>
          <a
            href="/joinus"
            className="inline-block px-4 py-3 mt-4 leading-none border rounded-lg font-bg-r text-lg text-white bg-blue hover:text-white hover:bg-yellow lg:mt-0"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
