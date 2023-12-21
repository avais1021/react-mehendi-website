import React, {useState } from 'react'
import galleryData from '../GalleryData';

const GalleryAll = () => {

  const [gImgData, setGImgData] = useState(galleryData)
  console.log(gImgData,'gImgData');

  return (
    <section className='galllery'>
      <div className="container">
        <h1 className='common_h1'>Gallery</h1>

        <div className="galllery_pics">
          {gImgData.map((ele ,idx)=>{
            return  <img src={ele.img} alt="gallery imgs" key={idx} />
          })}
        </div>
      </div>
    </section>
  )
}

export default GalleryAll
