import React from 'react'
import { Button } from 'reactstrap'
import './HomePray.style.css'

const HomePray = () => {
    return (
  
        <div className='my-5 d-flex flex-column justify-content-center align-items-center gap-3'>
            <div className='pink-block pray-btn text-center'> Tôi muốn cầu thay cho người khác</div>
            <div className='blue-block pray-btn text-center'> Tôi có vấn đề cần được cầu thay</div>
        </div>
    )
}

export default HomePray
