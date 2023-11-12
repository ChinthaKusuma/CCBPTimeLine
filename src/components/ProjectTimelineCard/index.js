// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
// import {Link} from 'react-router-dom'

import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  console.log(item)
  const {projectTitle, imageUrl, duration, description, projectUrl} = item
  return (
    <div className="">
      <img src={imageUrl} className="img1" alt="project" />
      {/* <h1 className="para1">{projectTitle}</h1> */}
      <div className="oneTwo">
        <h1 className="para1">{projectTitle}</h1>
        <div className="one12">
          <AiFillCalendar className="one123" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
