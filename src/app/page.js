import Navbar from "../components/Navbar";
import Container from "../components/Container";
import People from "../components/People";
import { speakers, organizers } from "../constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col p-4 max-w-5xl mx-auto mt-20 md:p-8">
        <div className="md:bg-[#2c3a8f] md:text-white flex items-center justify-center md:p-8">
          <Container>
            <h1>Developing Human-centric LLM Applications</h1>
            <h3><i>ICML 2024 Workshop</i></h3>
          </Container>
        </div>
        <Container id="about">
          <h2 className="sticky top-8 pointer-events-none">
            About the Workshop
          </h2>
          <p>Despite the rapid developments of large language models and other large pre-trained models, there has been insufficient discussion to carefully consider how humans can be appropriately integrated into the process of LLM training and development of LLM agents. We aim to bridge this gap through an interdisciplinary workshop and welcome researchers across ML, NLP, HCI, and more to submit papers on the following topics:</p>
          <ul className="list-disc list-inside">
            <li><b>Human-centric LLM training</b></li>
            <ul className="list-circle list-inside ml-8">
              <li>Collecting and learning from human-compatible feedback/preferences</li>
              <li>Learning techniques that incorporate a diverse, less structured set of human feedback/preferences</li>
              <li>Developing cognitive science-inspired model architectures</li>
              <li>Simulating realistic human feedback/preferences</li>
            </ul>
            <li><b>Human interactions with LLM agents</b> (e.g. coding assistants, writing aids, intelligent tutors, etc.)</li>
            <ul className="list-circle list-inside ml-8">
              <li>Designing interactive interface and system design</li>
              <li>Customizing or personalizing agents to individual users and use cases</li>
              <li>Highlighting the important considerations and potential consequences of human-LLM interactions</li>
            </ul>
          </ul>
          <p>We are open to work generally in the human-AI and human-in-the-loop space that may not necessarily target LLMs or generative models.</p>
          <p>As <b>humans</b> are central to our workshop, we will ask each paper to provide a short paragraph on who is the human considered in their work. For example, humans can be data scientists/ML engineers, labelers/crowdworkers, end users, and domain experts.  We plan to have facilitated discussions at the workshop on how to better involve humans in LLM developments. We will host an interdisciplinary panel with experts from ML, NLP, and HCI to discuss how we bridge HCI+AI more effectively.</p>
        </Container>
        <Container id="speakers">
          <h2 className="sticky top-8 pointer-events-none">Our Speakers</h2>
          <People list={speakers} />
        </Container>
        <Container id="organizers">
          <h2  className="sticky top-8 pointer-events-none">Our Organizers</h2>
          <People list={organizers} />
        </Container>
      </main>
      <footer className="w-full p-2 mt-16 text-center border-t border-black footer text-white" />
    </>
  );
}
