// Create new posts or update post

import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { EditorWindow } from '../components/sharedComponents'

const NewPost = () => {
    const imgSrc = "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    const imgStyle = {
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'bottom',
        filter: 'brightness(70%)'
    }
    const coverTextStyle = {
        color: 'white',
        fontSize: 'calc(2em + 1vw)',
        fontFamily: 'Pacifico', 
        position: 'absolute', 
        width: 'fit-content'
    }
    return (
        <Container fluid>
            <Row style={{height: '50vh', overflow: 'hidden'}} className='position-relative'>
                <img src={imgSrc} alt="cover" style={imgStyle} />
                <span className='top-50 start-50 translate-middle p-0'
                    style={coverTextStyle}>Trang Đăng Bài</span>
            </Row>

            <Row className='gap-4 justify-content-center'>
                <Col xs='12' lg='8'>
                    <Form>
                        <FormGroup>
                            <Label size='lg' for='title'>Tiêu Đề</Label>
                            <Input bsSize='lg' name='title' type='text'/>
                        </FormGroup>

                        <FormGroup>
                            <Label for='shortDesc'>Mô Tả ngắn (khoảng 30 từ)</Label>
                            <Input maxLength={200} name='shortDesc' type='text'/>
                        </FormGroup>

                        <FormGroup>
                            <EditorWindow height='700px' />  
                        </FormGroup>

                    </Form>
                </Col>
                <Col xs='12' lg='2'>
                    <Form>
                        <FormGroup>
                            <Label size='lg' for='thumbnail'>Ảnh đại diện (thumbnail)</Label>
                            <Input name='thumbnail' type='file' accept="image/png, image/jpeg" />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>

            
            
        </Container>
    )
}

export default NewPost
