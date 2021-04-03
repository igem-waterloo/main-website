import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import advisorsData from "../components/data/AdvisorsData"

export default function Advisors() {
  const advisors = advisorsData.map(
    ({ name, website, picture, position, bio }, index) => (
      <div
        className="flex flex-col md:flex-row md:gap-8 md:items-start mt-4 bg-gray rounded-lg p-8"
        key={index}
      >
        <img className="md:w-1/4 rounded-lg" src={picture} alt={name} />
        <div className="col-span-2 mt-4 md:mt-0">
          <a
            className="font-brandonm text-2xl mb-4"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <h3 className="text-base font-brandon mt-1 mb-4">{position}</h3>
          <p>{bio}</p>
        </div>
      </div>
    )
  )

  return (
    <Layout title="Advisors">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <h1 className="border-b-2 border-yellow">Advisors</h1>
        <div className="flex flex-col md:flex-row md:items-end md:space-x-2 lg:space-x-4">
          <h3 className="font-brandon mt-4 md:mt-0">
            Interested in advising or mentoring our team?
          </h3>
          <Link to={`/contact`}>Contact us &#8594;</Link>
        </div>
      </div>
      {advisors}
    </Layout>
  )
}
