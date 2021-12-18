import React, {useState, useEffect} from 'react'
import { Button } from "reactstrap";
import { VscTriangleDown } from "react-icons/vsc";
import axios from 'axios'
import './HomeDailyBread.style.css'

const fetchURI = "http://localhost:5000/users/video"
const HomeDailyBread = () => {
    const [videoList, setVideoList] = useState([])
    const [showVid, setShowVid] = useState(1)

    const getVideoList = async ()=>{
        try {
            const response = await axios.get(fetchURI)
            const {data} = response
            setVideoList(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleShowMore = () => {
        showVid >= videoList.length ? setShowVid(showVid) : setShowVid(showVid +2)
    }

    useEffect(()=>{
        getVideoList()
        return function cleanup(){
                getVideoList()
        }
    },[])

    const VideoBlock = videoList.slice(0, showVid).map( video => (
            <>
                <iframe
                className='youtube-frame mt-5'
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer" 
                allowFullScreen></iframe>

                <span className='mt-2 mb-3 text-center'>{`Tĩnh nguyện ${video.date} : ${video.title}`}</span>
            </>
        ))
    
   
    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
            
            {/* // video Block */}
            {VideoBlock}

            {/* // show more BTN */}
            {
                showVid >= videoList.length 
                ? null 
                : <Button className='mt-4 mb-2 md-block' onClick={()=> handleShowMore()}> 
                    <VscTriangleDown/> Xem thêm các bài khác...
                  </Button>
            }
        </div>
    )
}

export default HomeDailyBread
// https://i3.ytimg.com/vi/cWuazn9u4oE/maxresdefault.jpg
// https://www.googleapis.com/youtube/v3/playlistItems