import React from "react"
import Layout from "../components/layout"
import projects from "../components/data/ProjectData"

export default function Projects() {
  var projectStyling = "w-full block rounded-2xl p-8"
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
      <div className={projectStyling.concat(" ", backgroundColour)} key={index}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-0 mb-4">
          <img className={imgSize} src={logo} alt={title} />
          <h2 className={textColour.concat(" text-lg md:text-2xl")}>{year}</h2>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 mb-4 md:mb-0 items-start">
          <div className="w-full md:w-2/3">
            <p className={textColour.concat(" font-bold mb-6")}>{tagline}</p>
            <p className={textColour.concat(" mb-6")}>{abstract}</p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-gray p-6 border rounded-2xl border-transparent">
              <p className="font-bold text-lg mb-4">Achievements</p>
              <ul>
                {achievements.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <a
          className={textColour}
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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between">
        <h1 className="border-b-2 border-yellow">Projects</h1>
        <h3 className="font-brandon mt-4 md:mt-0">
          Improving the future, one project at a time.
        </h3>
      </div>

      <div className="flex flex-col mt-8 space-y-4">{displayProjects}</div>
    </Layout>
  )
}
