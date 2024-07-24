import profilePic from "../../assets/projectImgs/me.jpg";

export default function Home() {
  return (
    <div className="home">
      <h1>Courtney Manaligod</h1>
      <p>Full-Stack Web Developer | HTML, CSS, JavaScript, React, MERN stack | Passionate About Building Dynamic Web Applications</p>
      <img className="profilePic" src={profilePic} style={{height: "200px"}} alt="picture of Courtney Manaligod"></img>
    </div>
  )
}