import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"
import question from "../images/question.svg"
import remine from "../images/REMINE.svg"
import rooting from "../images/rooting.png"
import ecolight from "../images/ecolight.jpg"

export default function Home() {
  return (
    <Layout>
      <div class="flex flex-col md:grid md:grid-cols-2 md:gap-4 md:items-center">
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
              <div class="mt-4 absolute hidden bg-gray rounded-lg text-blue font-nunito text-base p-6 group-hover:block">
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
            <h3>What is iGEM?</h3>
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
            <h3>Who is Waterloo iGEM?</h3>
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
        <h3 class="md:text-center">What have we worked on?</h3>
      </article>
      <div class="flex flex-col my-4 md:grid grid-cols-3 gap-4">
        <a
          class="block bg-remine rounded-lg text-blue font-nunito text-sm p-6"
          href="https://2020.igem.org/Team:Waterloo"
        >
          <img class="mb-6" src={remine} alt="REMINE Logo" />
          We modelled a packed column bioreactor containing metal-binding
          proteins to remove and recover toxic but valuable heavy metals from
          electronic manufacturing wastewater.
        </a>
        <a
          class="block bg-rooting rounded-lg text-blue font-nunito text-sm p-6"
          href="https://2019.igem.org/Team:Waterloo"
        >
          <img class="mb-6" src={rooting} alt="Rooting for Symbiosis Logo" />
          We minimized the use of nitrogen fertilizers by engineering
          Bradyrhizobium to have the ability to form root nodules with soybeans
          in the presence of the herbicide linuron.
        </a>
        <a
          class="block bg-ecolight rounded-lg text-white font-nunito text-sm p-6"
          href="https://2018.igem.org/Team:Waterloo"
        >
          <img class="mb-6" src={ecolight} alt="Ecolight Logo" />
          We dynamically controlled E. coli growth by using optogenetics to
          regulate the production of MetE, an enzyme essential for bacterial
          growth.
        </a>
      </div>
      <article class="prose prose-sm lg:prose-lg max-w-none">
        <a class="block pt-1 text-center" href="/projects">
          View all projects &#8594;
        </a>
      </article>
    </Layout>
  )
}
