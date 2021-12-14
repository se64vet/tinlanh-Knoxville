import React from 'react'
import './HomeDailyBread.style.css'
const HomeDailyBread = () => {
    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
            <div className='video-container container d-flex flex-column justify-content-center align-items-center mt-4'>
                <iframe
                className='youtube-frame'
                src="https://www.youtube.com/embed/V6skG4B8qEA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer" 
                allowfullscreen></iframe>
            </div>

            <span>12.04 Đừng Bỏ Cuộc</span>
        </div>
    )
}

export default HomeDailyBread
// https://i3.ytimg.com/vi/cWuazn9u4oE/maxresdefault.jpg
// https://www.googleapis.com/youtube/v3/playlistItems