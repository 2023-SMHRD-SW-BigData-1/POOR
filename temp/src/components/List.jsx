import React from 'react'

const List = ({title,id, date, number}) => {
  return (
    <div>
        <div className="num">{number}</div>
        <div className="title"><a href="view.html">{title}</a></div>
        <div className="writer">{id}</div>
        <div className="date">{date}</div>
        <div className="count">33</div>
    </div>
  )
}

export default List