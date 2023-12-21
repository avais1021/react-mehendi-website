import React, { useEffect, useState } from 'react'
import galleryData from '../GalleryData';
import { NavLink } from 'react-router-dom';
// import GalleryPics from './GalleryPics';

const Gallery = () => {

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
        <h1 className='common_h1'>Gallery</h1>

        <div className="galllery_pics">
          {gImgData.map((ele ,idx)=>{
            return  <img src={ele.img} alt="gallery imgs" key={idx} />
          })}
        </div>
        {/* <GalleryPics imagesData={gImgData} /> */}

        <NavLink to='/gallery'><button>View All</button></NavLink>
      </div>
    </section>
  )
}

export default Gallery
