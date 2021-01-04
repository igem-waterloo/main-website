import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <body class="flex flex-col min-h-screen">
        <div className="mx-8 flex-grow md:mx-16 lg:mt-2 lg:mx-32 xl:mx-64 2xl:mx-96">
            <Header/>
            <div className="mb-8 md:mb-32">
                {children}
            </div>
        </div>
      <Footer />
    </body>
  )
}
