import React from 'react'

const TrendingSpeaker = (props) => {
  return (
    <div>
        <img src={props.image} alt="" />
        <h6>{props.name}</h6>
        <h6>{props.about}</h6>
        <h6>{props.role}</h6>
    </div>
  )
}

export default TrendingSpeaker