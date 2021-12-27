import React from 'react'
import { Card, CardBody, CardText, CardImg, CardGroup, CardTitle, CardSubtitle, Button, CardLink } from "reactstrap";
import { Row, Col, Container } from "reactstrap";
import { VscTriangleDown } from "react-icons/vsc";
import './HomePost.style.css'
import cover from '../../../vendors/assets/news-christmas.webp'
import cover2 from '../../../vendors/assets/header-sammuel.jpg'

const HomePosts = () => {
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui minima officiis fugit veniam deserunt necessitatibus modi harum a laborum.'
    
    const handleShowMore =()=>{
        
    }


    const CardItem = ({item})=>(
        <Col className='my-3'>
        <Card style={{color: '#333', border: 'none'}}>
            <div className='CardImg_container'>
            <CardImg top alt='' src={item.img} />
            </div>
            <CardBody>
                <CardTitle className='d-md-block text-truncate' tag='h5'>{item.title}</CardTitle>
                <CardSubtitle tag='small'>{item.author}</CardSubtitle>
                <CardText className='line-clamp' tag='p' >{item.desc}</CardText>
                <CardLink href={item.id}>Xem Thêm</CardLink>
                
            </CardBody>
        </Card>
        </Col>
    )
    
    const tempData = [
        {
            title: "Thông Báo đêm Giáng Sinh",
            author: "BĐH",
            desc: lorem,
            img: cover
        }, 
        {
            title: "4 Bài học lắng nghe tiếng Chúa",
            author: "Lan Anh",
            desc: lorem,
            img: cover2
        },
        {
            title: "Một bài học khác copy trên mạng",
            author: "Nguyễn Bình",
            desc: lorem,
            img: cover2
        }
    ]
    return (
        <div className='container justify-content-center align-items-center py-5'>
            <Row xs='1' md='2' lg='3' className='justify-content-center align-items-center px-2'>
                {tempData.map((item, key) =>(
                    <CardItem item={item} key={key} />
                ))}
            </Row>

            <Row>
            <Button className='mt-4 mb-2 md-block text-center' onClick={()=> handleShowMore()}> 
                    <VscTriangleDown/> Xem thêm các bài khác...
            </Button>
            </Row>
        </div>
    )
}

export default HomePosts
