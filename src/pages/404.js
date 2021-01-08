import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"

export default function error404() {
  return (
    <Layout title="404 Not Found">
      <article className="prose max-w-none">
        <div className="flex flex-col items-center">
          <h1 className="text-center" style={{ color: "#0F0F38" }}>
            Page Not Found
          </h1>
          <img
            className="w-96"
            style={{ marginBottom: 0 }}
            src={illustration}
            alt="Illustration of Waterloo iGEM's Subteams"
          />
        </div>
      </article>
    </Layout>
  )
}
