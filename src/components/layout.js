import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <body class="flex flex-col min-h-screen">
        <div className="mx-8 flex-grow md:mx-32">
            <Header/>
            <div className="mb-8 md:mb-32">
                {children}
            </div>
        </div>
      <Footer />
    </body>
  )
}
