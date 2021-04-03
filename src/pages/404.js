import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"

export default function error404() {
  return (
    <Layout title="404 Not Found">
      <div className="flex flex-col items-center">
        <h1 className="text-blue text-center mb-8">Page Not Found</h1>
        <img
          className="w-96"
          src={illustration}
          alt="Illustration of Waterloo iGEM's Subteams"
        />
      </div>
    </Layout>
  )
}
