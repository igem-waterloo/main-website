import React from "react"
import Layout from "../components/layout"
import recruitmentData from "../components/data/RecruitmentData"
import yearData from "../components/data/YearData"
import photo from "../images/labTraining.jpg"

export default function Team() {
  const recruitmentDates = recruitmentData.map(
    ({ event, date, description }) => (
      <div>
        <div className="flex flex-row justify-between mb-2">
          <h3 className="text-teal">{event}</h3>
          <h3 className="text-right font-brandon">{date}</h3>
        </div>
        <p>{description}</p>
      </div>
    )
  )

  const yearDates = yearData.map(
    ({ term, description: { general, lab, math, hp } }) => (
      <div className="flex flex-col space-y-6 bg-gray border rounded-2xl border-transparent p-4">
        <h2 className="text-center pb-2 border-b font-brandon border-blue">
          {term}
        </h2>
        <div>
          <h3 className="text-teal mb-1">General</h3>
          <ul>
            {general.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-teal mb-1">Lab &amp; Design</h3>
          <ul>
            {lab.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-teal mb-1">Math &amp; Modelling</h3>
          <ul>
            {math.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-teal mb-1">Human Practices</h3>
          <ul>
            {hp.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  )

  return (
    <Layout title="Timeline">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <h1 className="border-b-2 border-yellow">Timeline</h1>
        <h3 className="font-brandon mt-4 md:mt-0">
          Don't be late for some very important dates!
        </h3>
      </div>
      <h2 className="mb-4">2025 Recruitment</h2>
      <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 md:items-start mb-16">
        <div className="span-col-1 flex flex-col gap-6">{recruitmentDates}</div>
        <img className="rounded-3xl" src={photo} alt="Team" />
      </div>
      <h2 className="mb-4">Overview of Our Competition Season</h2>
      <div className="flex flex-col space-y-4 md:grid md:grid-cols-3 md:space-y-0 md:gap-4 md:items-start">
        {yearDates}
      </div>
    </Layout>
  )
}
