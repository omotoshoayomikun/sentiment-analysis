
import React from 'react'
import styles from "./Form.module.css"
import { CgSpinner } from "react-icons/cg";

export const Btn = (props) => {
  return (
    <button className={`button1`} style={props.styles} onClick={props.handleClick}>{props.disabled ? (
      <CgSpinner size={25} className="animate-spin" />
    ) : (
      props.title
    )}</button>
  )
}

export const RoundBtn = (props) => {
  return (
    <button className={`button-round rounded-full`} style={props.styles} onClick={props.handleClick}>{props.disabled ? (
      <CgSpinner size={25} className="animate-spin" />
    ) : (
      props.title
    )}</button>
  )
}



export const OutlineBtn = (props) => {
  return (
    <button className={`${styles.outline_btn}`} style={props.styles} onClick={props.handleClick}>{ props.title}</button>
  )
}