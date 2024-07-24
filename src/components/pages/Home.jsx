import profilePic from "../../assets/projectImgs/me.jpg";

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="name">Courtney Manaligod</h1>
        <p className="summary">Full-Stack Web Developer | HTML, CSS, JavaScript, React, MERN stack | Passionate About Building Dynamic Web Applications</p>
        <div className="home">
          <img className="profilePic" src={profilePic} style={{ height: "300px" }} alt="picture of Courtney Manaligod"></img>
          <div className="col-md-6">
            <h2>About Me</h2>

            <p>Grew up in Chicago area, moved to Colorado in 2018 with my wife and doggos. Been a chef for 10 years, now
              learning to code. You can catch me on the mountain in the winter, and on the river in the summer!</p>
          </div>
        </div>
      </div>
    </>
  )
}