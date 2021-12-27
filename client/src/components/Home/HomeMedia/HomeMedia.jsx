import React from 'react'
import { Col, Row } from 'reactstrap'
import pic from '../../../vendors/assets/tinh nguyen 1.jpg'
import './HomeMedia.style.css'
const HomeMedia = () => {

    const PlayList = () => (
        <Col className='my-2'>
            <Row className='justify-content-center align-items-center'>
                <Col xs='3' className='playlist' style={{backgroundImage: `url("${pic}")`}}>
                    
                </Col>

                <Col xs='7'>
                    <h6 className='playlist-title py-0 mb-1'>Playlist Giang Sinh 2021</h6>
                    <p className='playlist-desc py-0 m-0'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tempore?</p>
                </Col>
            </Row>
        </Col>
        
    )

  
        
    return (
        <Row xs='1' md='2' className=' my-5 justify-content-center align-items-center'>
           <PlayList />
           <PlayList />
        </Row>
    )
}

export default HomeMedia
