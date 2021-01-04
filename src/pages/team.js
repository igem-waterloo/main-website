import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/accordion"
import lab from "../images/Lab.png"
import math from "../images/Math.png"
import hp from "../images/HP.png"

export default function Team() {
  return (
    <Layout>
      <article class="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 class="border-b-2 border-yellow">Team</h1>
          <h3 style={{ marginTop: "0.875em", marginBottom: 0 }}>
            Teamwork makes the (synthetic biology) dream work.
          </h3>
        </div>
        <p>
          Our team values taking on projects with impact, approaching problems
          from a holistic perspective, fostering a collaborative learning
          environment, and conducting reliable experiments. To be able to do so,
          our team consists of three subteams, each of which recruits new
          members each year. Learn what each subteam’s responsibilities are in
          our project and what they look for in candidates below!
        </p>
        <h2>Our Subteams</h2>

        <div class="flex flex-col md:grid md:grid-cols-3 md:gap-8 md:items-start mt-4 bg-gray rounded-lg p-8">
          <img
            class="col-span-1"
            style={{ margin: 0 }}
            src={lab}
            alt="Lab Member"
          />
          <div class="col-span-2 mt-4 md:mt-0">
            <h3 style={{ color: "#009A9C", marginTop: 0 }}>Lab &amp; Design</h3>
            <p>
              We take the team's idea and design the biological systems needed
              to give an organism our desired function(s). In our lab, we use
              molecular biology techniques to genetically engineer our organisms
              in a safe and controlled environment.
            </p>
            <Accordion title={"What we look for"}>
              Our ideal applicant demonstrates passion about the field of
              synthetic biology, commitment to work hard and do your best,
              perseverance when experiments are long and/or do not go as
              planned, and ability to collaborate with other members. Our ideal
              applicant does NOT need previous lab training, especially when
              applying in first year, but research/volunteer experience in
              science and engineering is considered an asset in more senior
              applicants.
            </Accordion>
          </div>
        </div>
        <div class="flex flex-col md:grid md:grid-cols-3 md:gap-8 md:items-start mt-4 bg-gray rounded-lg p-8">
          <img
            class="col-span-1"
            style={{ margin: 0 }}
            src={math}
            alt="Math Member"
          />
          <div class="col-span-2 mt-4 md:mt-0">
            <h3 style={{ color: "#009A9C", marginTop: 0 }}>
              Math &amp; Modelling
            </h3>
            <p>
              Science is all about predictive power. In synthetic biology, these
              predictions come from a variety of sources. The math and modeling
              team seeks to characterize, develop, and make accurate predictions
              about the state of our biological system using techniques from
              applied mathematics, statistics, and computational science. Some
              of our primary tools are ordinary differential equations,
              combinatorial mathematics, and numerical analysis.
            </p>
            <Accordion title={"What we look for"}>
              Our ideal applicant demonstrates passion about the field of
              synthetic biology, commitment to work hard and do your best,
              perseverance when experiments are long and/or do not go as
              planned, and ability to collaborate with other members. Our ideal
              applicant does NOT need previous lab training, especially when
              applying in first year, but research/volunteer experience in
              science and engineering is considered an asset in more senior
              applicants.
            </Accordion>
          </div>
        </div>
        <div class="flex flex-col md:grid md:grid-cols-3 md:gap-8 md:items-start mt-4 bg-gray rounded-lg p-8">
          <img
            class="col-span-1"
            style={{ margin: 0 }}
            src={hp}
            alt="Human Practices Member"
          />
          <div class="col-span-2 mt-4 md:mt-0">
            <h3 style={{ color: "#009A9C", marginTop: 0 }}>Human Practices</h3>
            <p>
              Good science is about more than just producing good results in the
              lab, so the Human Practices subteam explores the human and
              societal aspects of the world of synthetic biology. Famously said
              by Peter Carr, Human Practices is the study of “how our work
              affects the world and how the world affects our work.” Our
              understanding of potential issues guide the design and
              implementation of our research. It is only after these efforts can
              we ensure that our work is safe, meaningful, and impactful to the
              world!
            </p>
            <Accordion title={"What we look for"}>
              Our ideal applicant demonstrates passion about the field of
              synthetic biology, commitment to work hard and do your best,
              perseverance when experiments are long and/or do not go as
              planned, and ability to collaborate with other members. Our ideal
              applicant does NOT need previous lab training, especially when
              applying in first year, but research/volunteer experience in
              science and engineering is considered an asset in more senior
              applicants.
            </Accordion>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center md:items-end justify-center space-y-4 md:space-y-0 md:space-x-4 my-24">
          <h3 style={{ lineHeight: 1, margin: 0 }}>Want to join us?</h3>
          <a style={{ lineHeight: 1 }} href="/recruitment">
            Learn more &#8594;
          </a>
        </div>
      </article>
    </Layout>
  )
}
