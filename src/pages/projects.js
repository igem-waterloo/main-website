import React from "react"
import Layout from "../components/layout"
import projects from "../components/data/ProjectData"

export default function Projects() {
  var aStyle = "w-full block rounded-2xl p-6 md:p-12"
  const displayProjects = projects.map(
    (
      {
        textColour,
        backgroundColour,
        imgSize,
        logo,
        title,
        year,
        tagline,
        abstract,
        achievements,
        wiki,
      },
      index
    ) => (
      <div
        className={aStyle.concat(" ", textColour, " ", backgroundColour)}
        key={index}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-0 mb-4">
          <img
            className={imgSize}
            style={{ margin: 0 }}
            src={logo}
            alt={title}
          />
          <h2 className="font-bg-m text-lg md:text-2xl">{year}</h2>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 mb-4 md:mb-0 items-start">
          <div className="w-full md:w-2/3">
            <p className="font-nunito font-bold mb-6">{tagline}</p>
            <p className="font-nunito mb-6 text-sm">{abstract}</p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-gray text-blue font-nunito p-6 border rounded-2xl border-transparent">
              <p className="font-bold text-lg mb-4">Achievements</p>
              <ul className="list-disc list-outside pl-4 text-sm lg:text-base">
                {achievements.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <a
          className="font-bg-r text-lg hover:underline"
          href={wiki}
          target="_blank"
          rel="noopener noreferrer"
        >
          View wiki &#8594;
        </a>
      </div>
    )
  )

  return (
    <Layout title="Projects">
      <article className="prose max-w-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="border-b-2 border-yellow">Projects</h1>
          <h3 style={{ lineHeight: 1, marginTop: "0.875em", marginBottom: 0 }}>
            Improving the future, one project at a time.
          </h3>
        </div>
      </article>
      <div className="flex flex-col mt-8 space-y-4">{displayProjects}</div>
    </Layout>
  )
}
