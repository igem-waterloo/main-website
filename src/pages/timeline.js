import React from "react"
import Layout from "../components/layout"
import recruitmentData from "../components/data/RecruitmentData"
import yearData from "../components/data/YearData"
import photo from "../images/labTraining.jpg"

export default function Team() {
  const recruitmentDates = recruitmentData.map(
    ({ event, date, description }) => (
      <div>
        <div className="flex flex-row justify-between md:gap-4">
          <h3 style={{ color: "#009A9C", margin: 0 }}>{event}</h3>
          <h3
            style={{
              color: "#0F0F38",
              margin: 0,
              textAlign: "right",
            }}
          >
            {date}
          </h3>
        </div>
        <p style={{ marginTop: "0.5em" }}>{description}</p>
      </div>
    )
  )

  const yearDates = yearData.map(
    ({ term, description: { general, lab, math, hp } }) => (
      <div className="bg-gray border rounded-2xl border-transparent p-4">
        <h2
          style={{
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "2em",
            margin: "0em",
            borderBottomWidth: "2px",
            borderColor: "#BBBBBB",
          }}
        >
          {term}
        </h2>
        <h3 style={{ color: "#009A9C", marginTop: "1em" }}>General</h3>
        <ul>
          {general.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <h3 style={{ color: "#009A9C", margin: 0 }}>Lab &amp; Design</h3>
        <ul>
          {lab.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <h3 style={{ color: "#009A9C", margin: 0 }}>Math &amp; Modelling</h3>
        <ul>
          {math.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <h3 style={{ color: "#009A9C", margin: 0 }}>Human Practices</h3>
        <ul style={{ margin: 0 }}>
          {hp.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    )
  )

  return (
    <Layout title="Timeline">
      <article className="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 className="border-b-2 border-yellow">Timeline</h1>
          <h3 style={{ marginTop: "0.875em", marginBottom: 0 }}>
            Don't be late for some very important dates!
          </h3>
        </div>
        <h2>2021 Recruitment</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 md:items-start mb-0 md:mb-8">
          <div className="span-col-1 flex flex-col gap-4">
            {recruitmentDates}
          </div>
          <img
            style={{ margin: 0, borderRadius: "2em" }}
            src={photo}
            alt="Team"
          />
        </div>
        <h2>Overview of Our Competition Season</h2>
        <div className="mt-8 flex flex-col space-y-4 md:grid md:grid-cols-3 md:space-y-0 md:gap-4 md:items-start">
          {yearDates}
        </div>
      </article>
    </Layout>
  )
}
