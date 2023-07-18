import React, { useEffect, useState } from 'react'
import WriteView from '../components/writeView'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const WriteViewMain = () => {
let {num} = useParams()
console.log('num in write view',num);

  const [data, setData] = useState([])
  const [title, setTitle] = useState([])
  const [id, setId] = useState([])
  const [number, setNumber] = useState(1)
  const [date, setDate] = useState([])
  const [content, setContent] = useState([])

  useEffect((req,res) => {
    console.log('WRITE VIEW')
    console.log(req);
    axios.get(`http://localhost:8888/listpage/listpage/viewpage/${num}`)
      .then(res => {
        // console.log('1',res)
        // console.log('2',res.data)
        // console.log('3',res.data[0])
        setData(res.data[0])
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <WriteView title={data.POST_TITLE} content={data.POST_CONTENT} id={data.USER_ID} date={data.CREATED_AT} number={data.POST_SEQ}/>
    // <WriteView  title={data.POST_TITLE} content={data.POST_CONTENT} id={data.USER_ID} date={data.CREATED_AT} number={data.POST_SEQ}/>
  )
}

export default WriteViewMain