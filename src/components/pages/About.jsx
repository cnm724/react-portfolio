import profilePic from "../../assets/projectImgs/me.jpg"

export default function About() {
  return (
    <div>
      <h1>About Courtney Manaligod</h1>
      <p>Grew up in Chicago area, moved to Colorado in 2018 with my wife and doggos. Been a chef for 10 years, now
      learning to code. You can catch me on the mountain in the winter, and on the river in the summer!</p>
      <img className="profilePic" src={profilePic} style={{height: "200px"}} alt="picture of Courtney Manaligod"></img>
    </div>
  )
}