import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-64">
        <h1 className="text-teal border-b-2 border-yellow">Contact</h1>
        <div className="flex flex-col justify-start">
          <h2 className="mt-8 md:mt-4 mb-2 text-teal">General Inquiries</h2>
          <a
            href={`mailto:uwigem@gmail.com`}
            className="font-nunito text-blue text-lg lg:text-xl"
          >
            uwigem@gmail.com
          </a>

          <h2 className="mt-8 mb-2 text-teal">Lab &amp; Design</h2>
          <a
            href={`mailto:design.lab.uwigem@gmail.com`}
            className="font-nunito text-blue text-lg lg:text-xl"
          >
            design.lab.uwigem@gmail.com
          </a>

          <h2 className="mt-8 mb-2 text-teal">Math &amp; Modelling</h2>
          <a
            href={`mailto:modelling.uwigem@gmail.com`}
            className="font-nunito text-blue text-lg lg:text-xl"
          >
            modelling.uwigem@gmail.com
          </a>

          <h2 className="mt-8 mb-2 text-teal">Human Practices</h2>
          <a
            href={`mailto:policy.uwigem@gmail.com`}
            className="font-nunito text-blue text-lg lg:text-xl"
          >
            uwhumanpractices@gmail.com
          </a>
        </div>
      </div>
    </Layout>
  )
}
