import React from 'react'

export default function ShowData(props) {
  const height = props.height*55/(props.maxHeight);
  return (
    <div style={{height:`${height}vh`, width:"3vw", backgroundColor:`${props.bgColor}`, color:`${props.textColor}`}}>
        {props.value}
    </div>
  )
}
