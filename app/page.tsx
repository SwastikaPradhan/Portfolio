
import Intro from "@/components/Intro"
import Projects from "@/components/projects"
import SectionDivider from "@/components/section-divider"
import Skill from "@/components/skill"
import Contact from "@/components/contact"
export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro/>
    <SectionDivider/>
    <Skill/>
    <Projects/>
    <Contact/>
  </main>
}
