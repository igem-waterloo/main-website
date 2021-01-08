import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"
import question from "../images/question.svg"
import projects from "../components/data/ProjectData"

export default function Home() {
  const mostRecentThreeProjects = projects.slice(0, 3)
  var aStyle = "block rounded-2xl font-nunito text-sm p-6"
  const displayProjects = mostRecentThreeProjects.map(
    (
      { textColour, backgroundColour, wiki, logo, title, homeDescription },
      index
    ) => (
      <a
        className={aStyle.concat(" ", textColour, " ", backgroundColour)}
        href={wiki}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        <img className="mb-6" src={logo} alt={title} />
        {homeDescription}
      </a>
    )
  )

  return (
    <Layout title="Home">
      <div className="flex flex-col md:flex-row md:gap-4 md:items-center mb-0 md:mb-8">
        <div className="md:w-1/2 space-y-2">
          <p className="font-nunito text-base text-blue">Waterloo iGEM</p>
          <div className="container inline-block relative">
            <h1 className="inline font-bg-m text-5xl text-teal">
              Solving today's problems using synthetic biology.
            </h1>
            <div className="inline align-top group">
              <img
                className="inline align-top"
                src={question}
                alt="Synthetic Biology Definition"
              />
              <div className="mt-4 absolute hidden bg-gray rounded-lg text-blue font-nunito text-sm p-6 group-hover:block">
                <p>
                  In the same way we can wire an electric circuit with a
                  battery and resistor to power a lightbulb, we can also create
                  a genetic circuit to accomplish a specific task in synthetic
                  biology by combining DNA sequences with known functions!
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="md:w-1/2 my-12 md:my-0"
          src={illustration}
          alt="Illustration of Waterloo iGEM's Subteams"
        />
      </div>

      <article className="prose max-w-none">
        <div className="flex flex-col mb-16 space-y-2 md:flex-row md:items-start md:space-x-20 md:space-y-0">
          <div className="space-y-2">
            <h2>What is iGEM?</h2>
            <p>
              iGEM is a non-profit organization that hosts the international
              Giant Jamboree competition each year. High school, undergraduate,
              and graduate students share how they build, model, and study the
              applications and effects of engineered biological systems to solve
              the world’s biggest problems.
            </p>
            <a className="block pt-1" href="https://igem.org/Main_Page" target="_blank" rel="noopener noreferrer">
              Visit the official website &#8594;
            </a>
          </div>
          <div className="space-y-2">
            <h2>Who is Waterloo iGEM?</h2>
            <p>
              We are an undergraduate student design team who has competed in
              the iGEM competition since 2005. Our team is unique in Waterloo
              for our student-led research, interdisciplinary collaboration
              between students from all faculties, and bioengineering focus.
            </p>
            <Link className="block pt-1" to="/team">
              Learn more &#8594;
            </Link>
          </div>
        </div>
        <h2 className="md:text-center">What have we worked on?</h2>
      </article>
      <div className="flex flex-col my-4 md:grid grid-cols-3 gap-4">
        {displayProjects}
      </div>
      <article className="prose prose-sm lg:prose-lg max-w-none">
        <Link className="block pt-1 text-center" to="/projects">
          View all projects &#8594;
        </Link>
      </article>
    </Layout>
  )
}
