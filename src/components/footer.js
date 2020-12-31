import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

function Footer() {
  return (
    <footer className=" bg-blue">
      <div className="mx-8 md:mx-32">
        <div className="container mx-auto">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex flex-1 mb-6">
              <img src={logo} alt="Logo" />
            </div>

            <div className="flex-1">
              <p className="text-white">
                Follow our social media for updates about events, recruitment
                deadlines, and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
