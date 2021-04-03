import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/accordion"
import teamData from "../components/data/TeamData"

export default function Team() {
  const subteams = teamData.map(
    ({ subteam, picture, description, candidate }, index) => (
      <div
        className="flex flex-col md:flex-row md:gap-8 md:items-start mt-4 bg-gray rounded-lg p-8"
        key={index}
      >
        <img
          className="md:w-1/3"
          style={{ margin: 0 }}
          src={picture}
          alt={subteam.concat(" Member")}
        />
        <div className="col-span-2 mt-4 md:mt-0 space-y-4">
          <h3 className="text-teal text-xl">{subteam}</h3>
          <p>{description}</p>
          <Accordion title={"What we look for in candidates"}>
            <ul>
              {candidate.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </Accordion>
        </div>
      </div>
    )
  )

  return (
    <Layout title="Team">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <h1 className="border-b-2 border-yellow">Team</h1>
        <h3 className="font-brandon mt-4 md:mt-0">
          Teamwork makes the (synthetic biology) dream work.
        </h3>
      </div>
      <p className="mb-8">
        Our team values taking on projects with impact, approaching problems
        from a holistic perspective, fostering a collaborative learning
        environment, and conducting reliable experiments. To be able to do so,
        our team consists of three subteams, each of which recruits new members
        each year. Learn what each subteam’s responsibilities are in our project
        and what they look for in candidates below!
      </p>
      <h2>Our Subteams</h2>
      {subteams}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center space-y-4 md:space-y-0 md:space-x-4 my-20">
        <h3 className="font-brandon">Want to join us?</h3>
        <Link to="/timeline">Learn more &#8594;</Link>
      </div>
    </Layout>
  )
}
