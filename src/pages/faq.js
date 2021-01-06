import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/faq-accordion"
import questions from "../components/data/FaqData"

export default function Faq() {
  const faq = questions.map(data => (
    <Accordion title={data.question}>{data.answer}</Accordion>
  ))

  return (
    <Layout>
      <article class="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 class="border-b-2 border-yellow">FAQ</h1>
          <div class="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <h3
              style={{ lineHeight: 1, marginTop: "0.875em", marginBottom: 0 }}
            >
              Don't see your question?
            </h3>
            <a style={{ lineHeight: 1 }} href="/contact">
              Contact us &#8594;
            </a>
          </div>
        </div>
      </article>

      <div className="mt-8 flex flex-col md:grid md:grid-cols-2 gap-4 md:items-start">
        {faq}
      </div>
    </Layout>
  )
}
