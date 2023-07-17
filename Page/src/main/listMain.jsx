import React,{useEffect} from 'react'
import ListPage from '../components/listPageJsx'

const ListMain = (props) => {

  useEffect(()=>{
    console.log("List.js")
    console.log(props.check)
  },[props.check])



  return (
    <ListPage></ListPage>
  )
}

export default ListMain