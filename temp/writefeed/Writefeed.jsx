import axios from 'axios';
import React, { useState } from 'react'

const Writefeed = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [text, setText] = useState('');

    const handleImageChange = (event) => {
        console.log('handleImageChange');
        console.log(event.target.files);
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
      };


    const handleChange = (event) => {
        console.log('handleChange');
        console.log(event.target.value);
      setText(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleImageChange(event)
        const imageUrl = selectedImage

        handleChange(event)
        const data = {
            image: imageUrl,
            content : text,
          };
        axios.post('http://localhost:8888/writefeed', data)
        .then(response => {
          console.log(response.data); 
          
        })
        .catch(error => {
          console.error(error);
        });
    };
        
    

  return (
    <div>
            <textarea placeholder="내용 입력" value={text} onChange={(e)=>{handleChange(e)}}></textarea>
            <br />
            <input type="file" required multiple  onChange={(e)=>{handleImageChange(e)}} accept="image/*" />

            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>FEED_UPLOAD</button>


    </div>
  )
}


export default Writefeed