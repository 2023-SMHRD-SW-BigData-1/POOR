import React from 'react'
import { useNavigate } from 'react-router-dom'

const List = ({title,id, date, number}) => {

  const nav = useNavigate()

  return (
    <div>
        <div className="num">{number}</div>
        <div className="title">{title}</div>
        <div className="writer">{id}</div>
        <div className="date">{date}</div>
        <div className="count">33</div>
    </div>
  )
}

export default List