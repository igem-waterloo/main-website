import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import collaborationsData from "../components/data/CollaborationsData"
import ohio from "../images/ohio.png"
import tuebingen from "../images/tuebingen.png"

export default function Collaborations() {
  const collaborations = collaborationsData.map(
    ({ title, icon, alt, description }, index) => (
      <div
        className="flex flex-col md:flex-row md:gap-8 md:items-start mt-4 bg-gray rounded-lg p-8"
        key={index}
      >
        <img className="w-16 md:w-24" src={icon} alt={alt} />
        <div className="col-span-2 mt-4 md:mt-0">
          <h3 className="text-teal font-brandonm mb-4">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  )

  return (
    <Layout title="Collaborations">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <h1 className="border-b-2 border-yellow">Collaborations</h1>
        <h3 className="font-brandon mt-4 md:mt-0">
          Let’s learn and develop solutions. Together.
        </h3>
      </div>
      <h2>How We Can Help</h2>
      <div className="mb-14">{collaborations}</div>
      <h2 className="mb-4">Past Collaborations</h2>
      <div className="flex flex-col md:flex-row md:items-start mb-8">
        <div className="mr-8">
          <h3 className="text-teal mb-2">
            UW x OhioState: Mathematical Modelling Mentorship
          </h3>
          <p>
            We collaborated with OhioState iGEM on the modelling aspects of
            their 2020 project. OhioState studied strategies for microbial
            biocontainment, and we helped develop strategies for engineering
            design, for modelling their proposed systems, and for retrieving
            relevant parameters from literature.
          </p>
        </div>
        <img
          className="w-full md:w-2/5 rounded-xl"
          src={ohio}
          alt="Waterloo iGEM with OhioState iGEM"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-start mb-8">
        <div className="mr-8">
          <h3 className="text-teal mb-2">
            UW x Tuebingen: Protein Design and Molecular Dynamics
          </h3>
          <p>
            We collaborated with Tuebingen iGEM on the protein design and
            molecular dynamics aspects of our 2020 projects. Despite very
            different project motivations, we and Tuebingen both used rational
            protein design as a tool to improve the metal affinity of
            metal-binding proteins. We held several video calls over the term to
            discuss our work and help troubleshoot each others’ molecular
            dynamics software issues. We specifically shared advice for using
            GROMACS (an MD software tool) with quantum mechanical and classical
            mechanical models and for developing an iterative protein design
            workflow.
          </p>
        </div>
        <img
          className="w-full md:w-2/5 rounded-xl"
          src={tuebingen}
          alt="Waterloo iGEM with Tuebingen iGEM"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-end justify-center space-y-4 md:space-y-0 md:space-x-4 my-24">
        <h3 className="font-brandon">Want to collaborate?</h3>
        <Link to="/contact">Contact us &#8594;</Link>
      </div>
    </Layout>
  )
}
