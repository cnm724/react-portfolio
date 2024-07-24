import resume from "../../assets/CourtneyManaligod_July2024_Resume.pdf"
import "./pages.css";
import resume1 from "../../assets/projectImgs/resume1.png";

export default function Resume() {
  return (
    <div className="resume container text-center mt-5">
      <h1 className="name">Courtney Manaligod</h1>
      <p className="summary">Full-Stack Web Developer | HTML, CSS, JavaScript, React, MERN stack | Passionate About Building Dynamic Web Applications</p>
      <a className="resumeLink btn btn-primary mb-4" href={resume} download="Courtney_Manaligod_resume.pdf">Download Resume</a>
      <div className="ResumeInfo row justify-content-center">
        <img className="resumePic" src={resume1} style={{ height: "400px" }} alt="Resume Picture Page 1"></img>
      </div>
    </div>
  )
}