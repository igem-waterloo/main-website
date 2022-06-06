import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import favicon from "../images/favicon.ico"
import { siteMetadata } from "../../gatsby-config"

export default function Layout({ children, title }) {
  {
    /* If you want the banner to be clickable, change announcementBanner's tag to "a"
  If you want the banner to not be clickable, change the tag to "div" and comment out (don't delete) the target and rel
  If you don't want the banner, COMMENT OUT (don't delete) {announcementBanner} in the return statement */
  
  // TO DO: Uncommenting {announcementBanner} crashes the webpage, contact Jeriann for help
  }
  const announcementBanner = (
    <a
      className="w-full bg-teal font-nunito text-white text-sm lg:text-base text-center p-2 z-10"
      href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdWXO7-EF_vgOPB-gZBkeDeDGDNaWKND7aGkSDqLzbmNmFY4w/viewform?usp=send_form"
      target="_blank"
      rel="noopener noreferrer"
    >
      Applications for our 2021 team are now open. Click here to apply.
    </a>
  )

  return (
    <>
      <Helmet
        title={`${title} | ${siteMetadata.title}`}
        meta={[
          {
            property: `og:title`,
            content: `${title} | ${siteMetadata.title}`,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: `${siteMetadata.image}`,
          },
          {
            property: `og:url`,
            content: `${siteMetadata.url}`,
          },
          {
            property: `og:description`,
            content: `${siteMetadata.description}`,
          },
        ]}
        htmlAttributes={{ lang: "en" }}
      >
        <link rel="icon" href={favicon} />
      </Helmet>
      <body className="bg-white flex flex-col min-h-screen">
        {/*{announcementBanner}*/}
        <div className="mx-6 mb-32 flex-grow md:mx-16 lg:mt-2 lg:mx-32 xl:mx-64 2xl:mx-96">
          <Header />
          <div className="my-8">{children}</div>
        </div>
        <Footer />
      </body>
    </>
  )
}
