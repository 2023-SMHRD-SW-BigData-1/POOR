import React from 'react'
import { useNavigate } from 'react-router-dom'

const List = ({title, id, date, number}) => {

  const nav = useNavigate()

  const viewPage = (num)=>{
    console.log('from list')
    console.log(num);
    console.log(title);
    console.log(id);
    nav('/listpage/viewpage/'+num)
  }

  return (
    <div onClick={()=>viewPage(number)}>
        <div className="num">{number}</div>
        <div className="title">{title}</div>
        <div className="writer">{id}</div>
        <div className="date">{date}</div>
        <div className="count">33</div>
    </div>
  )
}

export default List