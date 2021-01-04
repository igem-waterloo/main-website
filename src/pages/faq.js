import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/faq-accordion"

export default function Faq() {
  return (
    <Layout>
      <article class="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 class="border-b-2 border-yellow">FAQ</h1>
          <div class="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <h3 style={{ lineHeight: 1, marginTop: "0.875em", marginBottom: 0 }}>Don't see your question?</h3>
            <a style={{ lineHeight: 1 }} href="/contact">
              Contact us &#8594;
            </a>
          </div>
        </div>
      </article>

      <div className="mt-8 flex flex-col md:grid md:grid-cols-2 md:gap-6">
        <Accordion title={"I haven’t heard back from you about the status of my application or after my interview."}>
          Our ideal applicant demonstrates passion about the field of synthetic
          biology, commitment to work hard and do your best, perseverance when
          experiments are long and/or do not go as planned, and ability to
          collaborate with other members. Our ideal applicant does NOT need
          previous lab training, especially when applying in first year, but
          research/volunteer experience in science and engineering is considered
          an asset in more senior applicants.
        </Accordion>
        <Accordion title={"When can I apply?"}>
          Our ideal applicant demonstrates passion about the field of synthetic
          biology, commitment to work hard and do your best, perseverance when
          experiments are long and/or do not go as planned, and ability to
          collaborate with other members. Our ideal applicant does NOT need
          previous lab training, especially when applying in first year, but
          research/volunteer experience in science and engineering is considered
          an asset in more senior applicants.
        </Accordion>
      </div>
    </Layout>
  )
}
