import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function Collaborations() {
  return (
    <Layout title="Collaborations">
      <article className="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h1 className="border-b-2 border-yellow">Collaborations</h1>
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <h3
              style={{ lineHeight: 1, marginTop: "0.875em", marginBottom: 0 }}
            >
              Interested in collaborating?
            </h3>
            <Link style={{ lineHeight: 1 }} to={`/contact`}>
              Contact us &#8594;
            </Link>
          </div>
        </div>
        <p>Page under construction.</p>
      </article>
    </Layout>
  )
}