import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"

export default function JoinUs() {
  return (
    <Layout title="Join Us">
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-2xl lg:text-5xl text-center text-blue mb-8">
          Applications have closed for the 2021 season. Follow our social media
          for updates about joining our 2022 team!
        </h1>
        <img
          className="w-96"
          src={illustration}
          alt="Illustration of Waterloo iGEM's Subteams"
        />
      </div>
    </Layout>
  )
}
