import React, { useEffect, useState } from 'react'
import galleryData from '../VideosData';
import { NavLink } from 'react-router-dom';
// import videoBg from '../videos/vid-1.mp4'
// import vs from '../../public/videos/vid-1.mp4'
// import test from '../../public/videos/vid-1.mp4'

const Videos = () => {
    const [gImgData, setGImgData] = useState(galleryData)
    console.log(gImgData,'gImgData');
  
    const filterData = () => {
        let shortData = galleryData.slice(0, 5)
        setGImgData(shortData)
    }
  
    useEffect(() => {
      filterData();
    }, [])
  return (

    <section className='galllery'>
    <div className="container">
      <h1 className='common_h1'>Videos</h1>
      <div className="galllery_pics">
        {gImgData.map((ele ,idx)=>{
          {/* return  <img src={ele.video} alt="gallery imgs" key={idx} /> */}
          {/* return  <iframe src={ele.video} frameborder="0"></iframe> */}
          return <video className='videocss' src={ele.video}  controls type="video/mp4"></video>
        })}
      </div>
    
      <NavLink to='/videos'><button className='videoBtn'>View All</button></NavLink>
    </div>
  </section>
  )
}

export default Videos
