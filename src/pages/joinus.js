import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"

export default function JoinUs() {
  return (
    <Layout title="Join Us">
      <article className="prose max-w-none">
        <div className="flex flex-col items-center">
          <h1 className="text-center" style={{ color: "#0F0F38" }}>
            Applications have closed for the 2021 season. Follow our social
            media for updates about joining our 2022 team!
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
