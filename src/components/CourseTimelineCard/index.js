// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const btn2 = each => {
    const {name, id} = each
    return (
      <button className="btn1" type="button">
        {each.name}
      </button>
    )
  }

  const {item} = props
  console.log(item)
  const {title, courseTitle, description, duration} = item
  const {tagsList} = item
  return (
    <div className="bg2">
      <div className="oneTwo">
        <h1 className="para1">{courseTitle}</h1>
        <div className="one12">
          <AiFillClockCircle className="one123" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      {tagsList.map(each => (
        <>
          {/* <C key={each.name} /> */}
          {btn2(each)}
        </>
      ))}
    </div>
  )
}
export default CourseTimelineCard
