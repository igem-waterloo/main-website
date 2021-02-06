import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/faq-accordion"
import questions from "../components/data/FaqData"

export default function Faq() {
  const faq = questions.map(({ question, answer }) => (
    <Accordion title={question}>{answer}</Accordion>
  ))

  return (
    <Layout title="FAQ">
      <article className="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 className="border-b-2 border-yellow">FAQ</h1>
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <h3
              style={{ lineHeight: 1, marginTop: "0.875em", marginBottom: 0 }}
            >
              Don't see your question?
            </h3>
            <Link style={{ lineHeight: 1 }} to={`/contact`}>
              Contact us &#8594;
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-8 flex flex-col space-y-4">{faq}</div>
    </Layout>
  )
}
