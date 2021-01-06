import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/faq-accordion"
import recruitmentData from "../components/data/RecruitmentData"
import photo from "../images/timeline.png"

export default function Team() {
  const recruitmentDates = recruitmentData.map(data => (
    <div>
      <div class="flex flex-row justify-between md:gap-4">
        <h3 style={{ color: "#009A9C", margin: 0 }}>{data.event}</h3>
        <h3
          style={{
            color: "#0F0F38",
            margin: 0,
            textAlign: "right",
          }}
        >
          {data.date}
        </h3>
      </div>
      <p>{data.description}</p>
    </div>
  ))

  return (
    <Layout>
      <article class="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 class="border-b-2 border-yellow">Timeline</h1>
          <h3 style={{ marginTop: "0.875em", marginBottom: 0 }}>
            Don't be late for some very important dates!
          </h3>
        </div>
        <h2>2021 Recruitment</h2>
        <div class="flex flex-col md:grid md:grid-cols-2 md:gap-8 md:items-start mb-0 md:mb-8">
          <div class="span-col-1 flex flex-col gap-4">{recruitmentDates}</div>
          <img style={{ margin: 0 }} src={photo} alt="Team" />
        </div>
        <h2>Our Year At a Glance</h2>
        <div className="mt-8 flex flex-col md:grid md:grid-cols-3 gap-4 md:items-start">
          <Accordion title="Winter &#9924;">
            <h3 style={{ color: "#009A9C", margin: 0 }}>General</h3>
            <ul>
              <li>
                Applications open and new members are selected -- see the
                Recruitment timeline above for specific dates
              </li>
              <li>
                Brainstorm and develop project ideas before pitching them and
                choosing this year’s project
              </li>
            </ul>
            <h3 style={{ color: "#009A9C", margin: 0 }}>Lab &amp; Design</h3>
            <ul>
              <li>Lab training</li>
              <li>Design of organisms</li>
            </ul>
          </Accordion>
          <Accordion title="Spring &#127804;">
            <h3 style={{ color: "#009A9C", margin: 0 }}>General</h3>
            <ul>
              <li>
                Applications open and new members are selected -- see the
                Recruitment timeline above for specific dates
              </li>
              <li>
                Brainstorm and develop project ideas before pitching them and
                choosing this year’s project
              </li>
            </ul>
            <h3 style={{ color: "#009A9C", margin: 0 }}>Lab &amp; Design</h3>
            <ul>
              <li>Lab training</li>
              <li>Design of organisms</li>
            </ul>
          </Accordion>
          <Accordion title="Fall &#127810;">
            <h3 style={{ color: "#009A9C", margin: 0 }}>General</h3>
            <ul>
              <li>
                Applications open and new members are selected -- see the
                Recruitment timeline above for specific dates
              </li>
              <li>
                Brainstorm and develop project ideas before pitching them and
                choosing this year’s project
              </li>
            </ul>
            <h3 style={{ color: "#009A9C", margin: 0 }}>Lab &amp; Design</h3>
            <ul>
              <li>Lab training</li>
              <li>Design of organisms</li>
            </ul>
          </Accordion>
        </div>
      </article>
    </Layout>
  )
}
