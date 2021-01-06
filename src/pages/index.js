import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"
import question from "../images/question.svg"
import projects from "../components/data/ProjectData"

export default function Home() {
  const mostRecentThreeProjects = projects.slice(0,3)
  var aStyle = "block rounded-2xl font-nunito text-sm p-6"
  const displayProjects = mostRecentThreeProjects.map(data => (
    <a
      class={aStyle.concat(" ", data.textColour, " ", data.backgroundColour)}
      href={data.wiki}
    >
      <img class="mb-6" src={data.logo} alt={data.title} />
      {data.homeDescription}
    </a>
  ))

  return (
    <Layout>
      <div class="flex flex-col md:grid md:grid-cols-2 md:gap-4 md:items-center mb-0 md:mb-8">
        <div class="space-y-2">
          <p class="font-nunito text-base text-blue">Waterloo iGEM</p>
          <div class="container inline-block">
            <h1 class="inline font-bg-m text-5xl text-teal">
              Solving today's problems using synthetic biology.
            </h1>
            <div class="inline align-top group relative">
              <img
                class="inline align-top"
                src={question}
                alt="Synthetic Biology Definition"
              />
              <div class="mt-4 absolute hidden bg-gray rounded-lg text-blue font-nunito text-sm p-6 group-hover:block">
                <p>
                  A field of science that involves redesigning organisms for
                  useful purposes by engineering them to have new abilities
                </p>
              </div>
            </div>
          </div>
        </div>
        <img class="my-12 md:my-0" src={illustration} alt="Illustration" />
      </div>

      <article class="prose max-w-none">
        <div class="flex flex-col mb-16 space-y-2 md:flex-row md:items-start md:space-x-20 md:space-y-0">
          <div class="space-y-2">
            <h2>What is iGEM?</h2>
            <p>
              iGEM is a non-profit organization that hosts the international
              Giant Jamboree competition each year. High school, undergraduate,
              and graduate students share how they build, model, and study the
              applications and effects of engineered biological systems to solve
              the world’s biggest problems.
            </p>
            <a class="block pt-1" href="https://igem.org/Main_Page">
              Visit the official website &#8594;
            </a>
          </div>
          <div class="space-y-2">
            <h2>Who is Waterloo iGEM?</h2>
            <p>
              We are an undergraduate student design team who has competed in
              the iGEM competition since 2005. Our team is unique in Waterloo
              for our student-led research, interdisciplinary collaboration
              between students from all faculties, and bioengineering focus.
            </p>
            <a class="block pt-1" href="/team">
              Learn more &#8594;
            </a>
          </div>
        </div>
        <h2 class="md:text-center">What have we worked on?</h2>
      </article>
      <div class="flex flex-col my-4 md:grid grid-cols-3 gap-4">
        {displayProjects}
      </div>
      <article class="prose prose-sm lg:prose-lg max-w-none">
        <a class="block pt-1 text-center" href="/projects">
          View all projects &#8594;
        </a>
      </article>
    </Layout>
  )
}
