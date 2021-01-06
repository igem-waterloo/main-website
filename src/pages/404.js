import React from "react"
import Layout from "../components/layout"
import illustration from "../images/home-illustration.png"

export default function error404() {
  return (
    <Layout>
      <article class="prose max-w-none">
        <div class="flex flex-col items-center">
          <h1 style={{ color: "#0F0F38"}}>Page Under Construction</h1>
          <img class="w-96" style={{ marginBottom: 0}} src={illustration} alt="Illustration" />
        </div>
      </article>
    </Layout>
  )
}
