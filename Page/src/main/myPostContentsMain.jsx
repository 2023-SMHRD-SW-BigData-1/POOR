import React from 'react'
import Mypageboard1 from '../components/myPostContents/myPageboard'
import Mypageboard2 from '../components/myPostContents/myPageboard2'
import Mypageboard3 from '../components/myPostContents/myPageboard3'
import Mypageboard4 from '../components/myPostContents/myPageboard4'
import Mypageboard5 from '../components/myPostContents/myPageboard5'
import Mypageboard6 from '../components/myPostContents/myPageboard6'
import Mypageboard7 from '../components/myPostContents/myPageboard7'
import Mypageboard8 from '../components/myPostContents/myPageboard8'
import Mypageboard9 from '../components/myPostContents/myPageboard9'
import Mypageboard10 from '../components/myPostContents/myPageboard10'
import Mypageboard11 from '../components/myPostContents/myPageboard11'
import { useParams } from 'react-router-dom'


const MyPostContentsMain = () => {

  const { num } = useParams();

  return (
    <div>
    <Mypageboard1 value={num}></Mypageboard1>
    <Mypageboard2 value={num}></Mypageboard2>
    <Mypageboard3 value={num}></Mypageboard3>
    <Mypageboard4 value={num}></Mypageboard4>
    <Mypageboard5 value={num}></Mypageboard5>
    <Mypageboard6 value={num}></Mypageboard6>
    <Mypageboard7 value={num}></Mypageboard7>
    <Mypageboard8 value={num}></Mypageboard8>
    <Mypageboard9 value={num}></Mypageboard9>
    <Mypageboard10 value={num}></Mypageboard10>
    <Mypageboard11 value={num}></Mypageboard11>
    </div>
  )
}

export default MyPostContentsMain