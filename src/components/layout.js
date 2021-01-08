import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  {
    /* If you want the banner to be clickable, change announcementBanner's tag to "a"
  If you want the banner to not be clickable, change the tag to "div"
  If you don't want the banner, COMMENT OUT (don't delete) {announcementBanner} in the return statement */
  }
  const announcementBanner = (
    <div
      className="w-full bg-teal font-nunito text-white text-sm lg:text-base text-center p-2 z-10"
      href=""
    >
      Applications for our 2021 team open January 14. Follow our social media for updates.
    </div>
  )

  return (
    <body className="bg-white flex flex-col min-h-screen">
      {announcementBanner}
      <div className="mx-8 mb-32 flex-grow md:mx-16 lg:mt-2 lg:mx-32 xl:mx-64 2xl:mx-96">
        <Header />
        <div className="my-8">{children}</div>
      </div>
      <Footer />
    </body>
  )
}
