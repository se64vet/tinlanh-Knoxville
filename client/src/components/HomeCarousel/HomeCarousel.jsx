import React, {useState} from 'react'
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import { Button } from "reactstrap";
import img1 from '../../vendors/carousel/1.jpg'
import img2 from '../../vendors/carousel/2.jpg'
import img3 from '../../vendors/carousel/3.jpg'
import './HomeCarousel.style.css'
const items = [
    {
        src: img1,
        altText: 'Worship Jesus',
        caption: 'Worship Jesus'
    },
    {
        src: img2,
        altText: 'Worship Jesus',
        caption: 'Worship Jesus'
    },
    {
        src: img3,
        altText: 'Worship Jesus',
        caption: 'Worship Jesus'
    }
]
const imgStyle = {
    width: '100%',
    height: '100vh', 
    objectFit: 'cover', 
    objectPosition: 'center ',
    filter: 'brightness(50%)'
}

const HomeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const prevItem = () => {
        activeIndex <=0 ? setActiveIndex(2) : setActiveIndex(prev => prev -1)  
    }

    const nextItem = () => {
        activeIndex >=2 ? setActiveIndex(0) : setActiveIndex(prev => prev +1)
    }

    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                slide={true}
                next={nextItem}
                previous={prevItem}
                interval={8000}
            >
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={()=> prevItem()}
                />

                {items.map((item, key)=>(
                    <CarouselItem key={key}>
                        <img src={item.src} style={imgStyle} alt={item.altText}  />
                    </CarouselItem>
                ))}
                 
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={()=> nextItem()}
                />
            </Carousel>

            <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
                <div className='info px-3 py-5 d-flex flex-column justify-content-center align-items-center'>
                    <h2>Thờ phượng Chúa<br /> hàng tuần</h2>
                    <span className='mt-3'>Chủ Nhật: 1:30PM - 3:30PM</span>
                    <span>Nhà Thờ Fellowship</span>
                    <span className='small'>8000 Middlebrook Pike, Knoxville, TN, 37909</span>
                </div>

                <div className='more d-flex flex-column justify-content-center align-items-center'>
                    <p>Cộng đồng Tin Lành người Việt <br /> tại Knoxville</p>
                    <Button className='xemthem-btn my-2 text-white' outline color='warning'>Xem Thêm</Button>
                    <Button className='gradient-btn' color='dark'>Kinh Thánh</Button>
                </div>
            </div>
        </div>
    )
}

export default HomeCarousel
