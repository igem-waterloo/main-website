import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"

export default function Home() {
  return (
    <Layout>
      <article class="prose prose-sm lg:prose-lg max-w-none">
        <div class="flex flex-col md:flex-row md:items-center space-between">
          <div class="-space-y-4">
            <p>Waterloo iGEM</p>
            <h1>Solving today's problems using synthetic biology.</h1>
          </div>
          <div class="container mx-auto">
            <img
              class="object-scale-down"
              src={illustration}
              alt="Illustration"
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:items-start md:space-x-20">
          <div class="space-y-2">
            <h3>What is iGEM?</h3>
            <p>
              iGEM is a non-profit organization that hosts the international
              Giant Jamboree competition each year. High school, undergraduate,
              and graduate students share how they build, model, and study the
              applications and effects of engineered biological systems to solve
              the world’s biggest problems.
            </p>
          </div>
          <div class="space-y-2">
            <h3>Who is Waterloo iGEM?</h3>
            <p>
              We are an undergraduate student design team who has competed in
              the iGEM competition since 2005. Our team is unique in Waterloo
              for our student-led research, interdisciplinary collaboration
              between students from all faculties, and bioengineering focus.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}
