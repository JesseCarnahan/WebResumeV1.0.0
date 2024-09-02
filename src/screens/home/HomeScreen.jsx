import BackgroundEffect from "../../components/BackgroundEffect/BackgroundEffect";
import CertificateAward from "../../components/CertificateAward/CertificateAward";
import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Header from "../../components/header/Header";
import Hobbies from "../../components/hobbies/Hobbies";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/skills/Skills";



export const HomeScreen = () => {
  return (
    <div className="page-container">
        <Header />
        <Education />
        <Experience />
        <Skills />
        <CertificateAward />
        <Hobbies />
        <Cursor />
        <BackgroundEffect />
        <Projects />
    </div>
  )
}

export default HomeScreen