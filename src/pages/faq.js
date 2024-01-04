import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/faq-accordion"

export default function Faq() {
  return (
    <Layout title="FAQ">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <h1 className="border-b-2 border-yellow">FAQ</h1>
        <div className="flex flex-col md:flex-row md:items-end md:space-x-2 lg:space-x-4">
          <h3 className="font-brandon mt-4 md:mt-0">
            Don't see your question?
          </h3>
          <Link to={`/contact`}>Contact us &#8594;</Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col space-y-4">
        <Accordion title="Who can apply?">
          Any University of Waterloo undergraduate student from any faculty,
          program, year, background, etc. may apply.
          <br></br>
          <br></br>
          Are you a graduate student? We are always looking for new advisors!
          Feel free to{" "}
          <Link className="font-nunito text-teal text-base" to={`/contact`}>
            contact us
          </Link>{" "}
          at any time.
        </Accordion>
        <Accordion title="When can I apply?">
          We only have one recruitment cycle per calendar year for all our
          subteams. Make sure to follow our social media accounts to receive
          updates about recruitment deadlines and/or refer to the{" "}
          <Link className="font-nunito text-teal text-base" to={`/timeline`}>
            recruitment timeline
          </Link>{" "}
          in early January. No late applications will be considered, and if you
          miss the deadline, you will have to wait an entire year before
          retrying!
        </Accordion>
        <Accordion title="What does the application process look like?">
          There are two steps: a written form and an interview. The written form
          will ask you to answer questions related to your interest in iGEM, the
          subteam(s) you’re applying to, experience, skills, and knowledge (we
          may also assess your taste in memes). We’ll then invite candidates to
          an interview where you’ll meet this year’s subteam leads, tell us more
          about yourself, and ask us any questions! Finally, we’ll select our
          members for this year’s team. Our recruitment process typically spans
          2-4 weeks in January each year.
        </Accordion>
        <Accordion title="Can I apply to multiple subteams?">
          Yep! And you can receive interviews for multiple subteams as well!
          However, if you are accepted to the team, you will receive an offer to
          only one subteam. Our leads will discuss your preferences and where
          they think you’ll be the best fit in your interview."
        </Accordion>
        <Accordion title="What do you look for in my application?">
          See our{" "}
          <Link className="font-nunito text-teal text-base" to={`/timeline`}>
            Team page
          </Link>{" "}
          for more information about what each subteam looks for!
        </Accordion>
        <Accordion title="What grades do I need to have to apply?">
          Our team does not assess grades in the application process, and there
          is no grade requirement for being a team member. However, if you are
          struggling academically, we encourage you to assess if you will be
          able to handle your academics alongside the large time commitment of
          being a Waterloo iGEM member.
        </Accordion>
        <Accordion title="How many new members do you accept yearly?">
          There are no quotas for the number of members accepted to each subteam
          each year. Numbers vary depending on applicants, availability
          throughout the year, and number of returning members.
        </Accordion>
        <Accordion title="Is attending an info session mandatory?">
          No, but one of the main characteristics all subteams look for is
          enthusiasm towards being a member of iGEM. One of the best ways to
          demonstrate this is attending our events throughout the year, such as
          our information sessions, workshops, and presentations!
        </Accordion>
        <Accordion title="I haven’t heard back from you about the status of my application or after my interview.">
          We make it clear at the end of the written application and interview
          when to expect a response from us. If there is a delay in the
          decision-making process, we will notify you via email. As always,
          check your email regularly, especially your spam folder. If you have
          not received an email 24 hours after you were told to expect one,
          please email us to make sure your email address was entered in your
          application correctly.
        </Accordion>
        <Accordion title="I didn’t receive an offer. What now?">
          Don’t be discouraged! You can{" "}
          <Link className="font-nunito text-teal text-base" to={`/contact`}>
            contact the subteam(s)
          </Link>{" "}
          you applied to and request feedback on your application or interview
          so you know how to improve next time. We highly encourage you to
          re-apply!
        </Accordion>
        {/* <Accordion title="How is COVID-19 impacting the team’s operation?">
          We are conducting our info session and interviews online. Our team
          will be meeting remotely and will not have access to our lab until the
          university deems it safe to regather on-campus. However, iGEM has made
          it possible to succeed (and win!) at the competition without lab work,
          and we did exactly that in 2020!
        </Accordion> */}
      </div>
    </Layout>
  )
}
