import React, { useEffect, useState } from 'react'
import WriteView from '../components/writeView'
import axios from 'axios'
import WritePage from '../components/writePage'

const WriteViewMain = () => {

  const [data, setData] = useState([])
  const [title, setTitle] = useState([])
  const [id, setId] = useState([])
  const [number, setNumber] = useState([])
  const [date, setDate] = useState([])
  const [content, setContent] = useState([])
  

  useEffect(() => {
    console.log('WRITE VIEW')
    axios.get('/listpage/listpage/viewpage?')
      .then(res => {
        console.log('1',res)
        console.log('2',res.data)
        console.log('3',res.data[0])
        setData(res.data[0])
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  console.log(data.POST_TITLE);


  return (
    <WriteView title={data.POST_TITLE} content={data.POST_CONTENT} id={data.USER_ID} date={data.CREATED_AT} number={data.POST_SEQ}/>
    // <WriteView  title={data.POST_TITLE} content={data.POST_CONTENT} id={data.USER_ID} date={data.CREATED_AT} number={data.POST_SEQ}/>
  )
}

export default WriteViewMain