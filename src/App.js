import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import GalleryPage from './GalleryPage'
import VideoPage from './VideoPage'
import SinglePage from './SinglePage'


const App = () => {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/videos" element={<VideoPage/>} />
          <Route path="/singlePage" element={<SinglePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
