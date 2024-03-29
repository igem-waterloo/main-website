import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

function Footer() {
  const socialStyle =
    "text-white fill-current hover:text-teal h-10 md:h-18 lg:h-20"

  return (
    <footer className=" bg-blue">
      <div className="mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between my-8">
          <img className="mr-auto h-16 md:h-20 lg:h-36" src={logo} alt="Logo" />
          <div className="flex flex-col items-start md:items-end">
            <p className="text-white font-brandon text-lg md:text-xl text-left md:text-right mt-8 md:mt-0">
              Follow our social media for updates!
            </p>
            <div className="mt-2 lg:mt-4 flex flex-row space-x-4">
              <a
                href="https://www.instagram.com/waterloo.igem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={socialStyle}
                  viewBox="0 0 250 250"
                  alt="Waterloo iGEM's Instagram"
                >
                  <path d="M124.88 250C55.81 249.91-.2 193.73 0 124.74A125 125 0 01125.12 0C194.19.09 250.2 56.27 250 125.26A125 125 0 01124.88 250zm.14-52.83c11.28-.42 22.53-.63 33.75-1.3 20.93-1.26 35.8-16.17 37.13-37.1a533.17 533.17 0 000-67.72c-1.32-20.77-16.17-36.15-37-36.8-22.55-.7-45.16-.71-67.71 0-21 .66-36.3 16-37 37-.71 22.55-.7 45.16 0 67.71.65 20.8 16 35.7 36.8 36.94 11.38.64 22.72.85 34.01 1.27z" />
                  <path d="M184.08 125c-.33 11-.39 21.94-1.07 32.88-.91 14.77-10.35 24.64-25.16 25q-32.86.88-65.76 0c-14.88-.4-24.62-10.15-25-25.06q-.88-32.85 0-65.76c.4-14.83 10.21-24.64 25.06-25q32.87-.88 65.76 0c14.84.4 24.2 10.22 25.12 25.07.66 10.94.72 21.92 1.05 32.87zM125 161.82A36.82 36.82 0 1088.18 125 36.84 36.84 0 00125 161.82zm46.83-75.15a8.41 8.41 0 00-8.69-8.53 8.57 8.57 0 00-8.47 8.55 8.74 8.74 0 008.49 8.6 8.57 8.57 0 008.7-8.62z" />
                  <path d="M125 101a24 24 0 11-24 24 24.05 24.05 0 0124-24z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/waterloo-igem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  className={socialStyle} 
                  viewBox="0 0 360 360" 
                  alt="Waterloo iGEM's LinkedIn"
                >
                  <path d="M160,1C60.7,1,1,89.7,1,185S89.7,360,190,360S360,271.3,360,185S271.3,1,185,1z M125.5,270h-44v-141h44V264z M130.5,90.5c0,14.4-11.6,26-26,26s-26-11.6-26-26s11.6-26,26-26S96.5,49,150,115.4z M285.5,270h-44v-76 c0-20.4-7.2-34.4-25.2-34.4c-12,0-19.2,8-22.4,15.6c-1.2,2.8-1.6,6.8-1.6,10.8v84h-44c0,0,0.6-128,0-141h44v19.2 c6.8-10.8,19.2-26.4,44-26.4c32,0,56.4,21.2,56.4,72.4v76H278.5z"/> 
                </svg>
              </a>
              <a
                href="https://www.facebook.com/WaterlooiGEM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={socialStyle}
                  viewBox="0 0 250 250"
                  alt="Waterloo iGEM's Facebook"
                >
                  <path d="M125.06 0c66.49-1.16 125.54 54.21 124.76 126.35-.76 71.19-60.34 124.92-127.22 123.65C56.6 248.7-1.15 193.66.19 122.33 1.48 54.05 58-1.09 125.06 0zm-20.68 126.51V207c11.28-.23 22.44.62 33.7-.57v-81.36h22.32c.84-9.35 1.66-18.55 2.51-27.92h-24.84c0-6.18-.11-12.2.05-18.22.08-3.36 1.49-4.72 4.85-4.81 5.85-.16 11.71-.1 17.57-.13h1.75V43.88h-13c-7.59 0-15.17-.12-22.63 1.61-6.57 1.51-12.4 4.2-16.66 9.62-4 5.12-5.47 11.12-5.64 17.44-.21 7.67-.16 15.35-.22 23v1.77H87.62v28.28z" />
                </svg>
              </a>
              {/* Twitter/X account is not currently being used/updated, so commenting out for now */}
              {/* <a
                href="https://twitter.com/waterloo_igem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={socialStyle}
                  viewBox="0 0 250 250"
                  alt="Waterloo iGEM's Twitter"
                >
                  <path d="M125 250a125 125 0 11125-124.89A125 125 0 01125 250zm85.16-195.37a5.23 5.23 0 00-.9.25c-1.95 1-3.87 2.07-5.86 3A67.17 67.17 0 01187.83 63a2.34 2.34 0 01-1.82-.51 36.88 36.88 0 00-20.52-10.38 37 37 0 00-42 29.32 35.45 35.45 0 000 14.29c.18.9.14 1.48-1.1 1.36a127.68 127.68 0 01-17.81-2.72 104.64 104.64 0 01-23.7-8.76 105.1 105.1 0 01-32.49-25.9c-.32-.37-.71-.69-1.16-1.13a36.75 36.75 0 00-4 26.66c2.06 9.32 7.28 16.63 14.81 22.52a46.26 46.26 0 01-8.14-1.32c-2.62-.73-5.13-1.87-7.91-2.92a36.25 36.25 0 008 23.19A38.21 38.21 0 0070.65 140c-5.09 1.63-10.23 1.4-15.42.81a2.46 2.46 0 000 .64 37 37 0 0022.22 22.63 31.3 31.3 0 009.85 2.09 12.4 12.4 0 012 .43c-16.1 12.12-33.88 17-53.51 15.34 0 .3 0 .41.08.45.29.22.59.43.9.62a106.08 106.08 0 0026.49 11.5 99.69 99.69 0 0020.74 3.6 111.77 111.77 0 0033.55-2.71 104.29 104.29 0 0020.93-7.4 99.75 99.75 0 0037.65-32 109.29 109.29 0 0014.51-27.75 110.72 110.72 0 004.57-16.92 100 100 0 001.61-21.86 2.19 2.19 0 01.9-2.09A72.72 72.72 0 00210.78 75c1.44-1.74 2.73-3.59 4.09-5.4l-.22-.34a68.39 68.39 0 01-19.72 5.19c7.07-4.96 12.38-11.28 15.23-19.82z" />
                </svg>
              </a> */}
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
