import React from 'react'

export const Btn = (props) => {
  return (
    <button className={`button1`} style={props.styles} onClick={props.handleClick}>{props.title}</button>
  )
}