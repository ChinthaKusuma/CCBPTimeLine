// Write your code here

import {Component, React} from 'react'
// import React from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'
// import {white} from 'colorette'

class TimelineView extends Component {
  //   state = {list1: [], list2: []}

  get2 = each => {
    if (each.categoryId === 'COURSE') {
      return <CourseTimelineCard item={each} key={each.id} />
    }
    return <ProjectTimelineCard item={each} key={each.id} />
  }

  getData = () => {
    const {timelineItemsList} = this.props
    // const list2 = timelineItemsList.filter(each => each.categoryId === 'COURSE')
    // const list3 = timelineItemsList.filter(
    //   each => each.categoryId === 'PROJECT',
    // )

    return (
      <div style={{width: '700px', height: '1500px'}}>
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#0967d2',
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(each => this.get2(each))}
        </Chrono>
      </div>
    )
  }

  render() {
    return (
      <div className="bg1">
        <h1 className="h11">MY JOURNEY OF CCBP 4.0</h1>
        {/* <p className="h11">MY JOURNEY OF</p>
        <h1 className="h11">CCBP 4.0</h1> */}
        {this.getData()}

        {/* <timelineItemsList /> */}
      </div>
    )
  }
}
export default TimelineView
