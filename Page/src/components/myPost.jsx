import React from 'react'
import './myPost.css'

const myPost = () => {

  const column = 'column'
  
  return (
    <div>

      <div class="myPost1">
        <div class="myPost2">
          <div class="myPost3">
          {column}
        </div>
          <div class="myPost3">
          {column}
        </div>
          <div class="myPost3">
          {column}
        </div>
      </div>
    </div>
    <div class="myPost1">
        <div class="myPost2">
          <div class="myPost3">
          {column}
        </div>
          <div class="myPost3">
          {column}
        </div>
          <div class="myPost3">
          {column}
        </div>
      </div>
    </div>
    <div class="myPost1">
        <div class="myPost2">
          <div class="myPost3">
          {column}
        </div>
          <div class="myPost3">
          {column}
        </div>
          <div class="myPost3">
          {column}
        </div>
      </div>
    </div>

    </div>
  )
}

export default myPost