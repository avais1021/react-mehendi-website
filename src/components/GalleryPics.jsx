// import React, { useEffect, useState } from 'react'
import React from "react"


const GalleryPics = ({imagesData}) => {
    return (
        <div className="galllery_pics">
        {/* <h1>{props.name}</h1> */}
            {imagesData.map((ele, idx) => {
                return <img src={ele.img} alt="gallery imgs" key={idx} />
            })}
        </div>

    )
}

export default GalleryPics
