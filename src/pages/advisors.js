import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import advisorsData from "../components/data/AdvisorsData"

export default function Advisors() {
  const advisors = advisorsData.map(
    ({ name, picture, position, bio }, index) => (
      <div
        className="flex flex-col md:flex-row md:gap-8 md:items-start mt-4 bg-gray rounded-lg p-8"
        key={index}
      >
        <img
          className="md:w-1/4 rounded-lg"
          style={{ margin: 0 }}
          src={picture}
          alt={name}
        />
        <div className="col-span-2 mt-4 md:mt-0">
          <h3
            style={{
              color: "#009A9C",
              marginTop: 0,
              marginBottom: "0.3rem",
              fontSize: "1.5rem",
            }}
          >
            {name}
          </h3>
          <h3
            style={{
              marginTop: 0,
              marginBottom: "1.5rem",
              lineHeight: 1.5,
              fontSize: "1rem",
            }}
          >
            {position}
          </h3>
          <p style={{ marginBottom: 0 }}>{bio}</p>
        </div>
      </div>
    )
  )

  return (
    <Layout title="Advisors">
      <article className="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 className="border-b-2 border-yellow">Advisors</h1>
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <h3
              style={{ lineHeight: 1, marginTop: "0.875em", marginBottom: 0 }}
            >
              Interested in advising or mentoring our team?
            </h3>
            <Link style={{ lineHeight: 1 }} to={`/contact`}>
              Contact us &#8594;
            </Link>
          </div>
        </div>
        {advisors}
      </article>
    </Layout>
  )
}
