import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/bird.svg"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const DropDownHeaderCSS =
    "inline-flex items-center font-bg-r text-lg text-blue px-4"
  const DropDownListCSS =
    "absolute left-0 hidden w-full bg-white font-bg-r text-lg text-left text-blue p-4 space-y-3 group-hover:block"
  const DropDownItemCSS = "block whitespace-no-wrap hover:text-teal"
  const MenuLinkCSS =
    "inline-block mt-4 mx-4 lg:mt-0 font-bg-r text-lg text-blue hover:text-teal"
  const ctaCSS =
    "inline-block px-4 py-3 lg:mt-0 bg-blue leading-none border rounded-lg border-transparent font-bg-r text-lg text-white hover:text-blue hover:bg-yellow"
  const MobileMenuCSS =
    "absolute -top-6 right-0 flex flex-col items-end space-y-4 lg:hidden bg-gray font-bg-r text-lg text-right text-blue p-4"

  {
    /* Set applicationsOpen to true or false depending on where you are in the recruitment cycle 
    If true, change the href tag to the link for the Google Form application
    If false, it will redirect the user to /joinus */
  }
  const applicationsOpen = true
  if (applicationsOpen) {
    var joinUsBtn = (
      <a
        className={ctaCSS}
        href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdWXO7-EF_vgOPB-gZBkeDeDGDNaWKND7aGkSDqLzbmNmFY4w/viewform?usp=send_form"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join Us
      </a>
    )
  } else {
    joinUsBtn = (
      <Link className={ctaCSS} to="/joinus">
        Join Us
      </Link>
    )
  }

  return (
    <div>
      <nav className="flex flex-row items-center justify-between w-full py-6">
        <Link className="pointer-events-none md:pointer-events-auto" to={`/`}>
          <img className="h-8 lg:h-10" src={logo} alt="Waterloo iGEM Logo" />
        </Link>

        <div className="hidden text-base ml-auto lg:block">
          <div className="group inline-block relative">
            <button className={DropDownHeaderCSS}>
              <span className="mr-1">About</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className={DropDownListCSS}>
              <li className="">
                <Link className={DropDownItemCSS} to={`/team`}>
                  Team
                </Link>
              </li>
              <li className="">
                <Link className={DropDownItemCSS} to={`/advisors`}>
                  Advisors
                </Link>
              </li>
            </ul>
          </div>
          <Link className={MenuLinkCSS} to={`/projects`}>
            Projects
          </Link>
          <Link className={MenuLinkCSS} to={`/collaborations`}>
            Collaborations
          </Link>
          <Link className={MenuLinkCSS} to={`/contact`}>
            Contact
          </Link>
          <div className="group inline-block relative">
            <button className={DropDownHeaderCSS}>
              <span className="mr-1">Recruitment</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className={DropDownListCSS}>
              <li className="">
                <Link className={DropDownItemCSS} to={`/timeline`}>
                  Timeline
                </Link>
              </li>
              <li className="">
                <Link className={DropDownItemCSS} to={`/faq`}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {joinUsBtn}
        </div>
        <div className="block lg:hidden ml-auto sticky top-0">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="focus:outline-none flex items-center px-3 py-2 font-bg-r text-teal text-lg border rounded outline-none border-teal"
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
        className={`${
          isExpanded ? `block` : `hidden`
        } relative w-full items-end z-10`}
      >
        <div className={MobileMenuCSS}>
          <Link to={`/`}>Home</Link>
          <Link to={`/team`}>Team</Link>
          <Link to={`/advisors`}>Advisors</Link>
          <Link to={`/projects`}>Projects</Link>
          <Link to={`/collaborations`}>Collaborations</Link>
          <Link to={`/contact`}>Contact</Link>
          <Link to={`/timeline`}>Timeline</Link>
          <Link to={`/faq`}>FAQ</Link>
          {joinUsBtn}
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
