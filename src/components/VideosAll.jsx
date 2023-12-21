import React, {useState } from 'react'
import galleryData from '../VideosData';

const VideosAll = () => {
  
    const [gImgData, setGImgData] = useState(galleryData)
    console.log(gImgData,'gImgData');
  
    return (
      <section className='galllery'>
        <div className="container">
          <h1 className='common_h1'>Videos</h1>
  
          <div className="galllery_pics">
            {gImgData.map((ele ,idx)=>{
              return  <video className='videocss' src={ele.video}  controls type="video/mp4"></video>
            })}
          </div>
        </div>
      </section>
    )
}

export default VideosAll
