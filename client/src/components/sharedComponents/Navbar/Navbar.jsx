import React, {useState} from 'react'
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Nav } from "reactstrap";
import logo from '../../../vendors/logo.png'
import hamBTN from '../../../vendors/Hamburger BTN.png'
import closeBTN from '../../../vendors/closeBTN.png'
import './Navbar.style.css'
const collapseStyle = {
    fontSize: '1.3rem',
}
const navItemStyle = {
    padding: '1em 1em', 
    textAlign: 'center',
}
const navBarTogglerStyle  = {
    top: '1em',
    left: '.5em',
}
const navItems = [
    {
        item: 'Tin Mới - Thông Báo',
        link: '/news'
    },
    {
        item: 'Tĩnh Nguyện Hàng Ngày',
        link: '/dailybread'
    },
    {
        item: 'Âm Nhạc',
        link: '/media'
    },
    {
        item: 'Cầu Nguyện',
        link: '/pray'
    },
    {
        item: 'KINH THÁNH',
        link: 'https://kinhthanh.httlvn.org/?v=NVB'
    },
]


const CustomNavbar = () => {
    const [ NavBarToggler, setNavBarToggler] = useState(false)

    return ( 
        <Navbar
            color="dark"
            expand="lg"
            fixed="top"
            dark
            >
            
            {/*Custom NavbarToggler*/}
            <div 
                className='navbar-toggler border-0 fixed-top' 
                onClick={()=>{setNavBarToggler(!NavBarToggler)}} 
                style={navBarTogglerStyle}>

               {NavBarToggler 
                ?  <img src={closeBTN} alt='Navigation Button'/> 
                :  <img src={hamBTN} alt='Navigation Button'/>}
            </div>
            
             
            <NavbarBrand href="/">
            <img src={logo} />
            </NavbarBrand>

            <Collapse navbar = {true} isOpen={NavBarToggler} >
            <Nav
                navbar
                style={collapseStyle}>

                {navItems.map((item, key)=>(
                    <NavItem key = {key} style={navItemStyle}>
                    <NavLink href={item.link} style={{color: 'white',}}>
                        {item.item}
                    </NavLink>
                    </NavItem>
                ))} 
            </Nav>
            </Collapse>
        </Navbar>

    )
}

export default CustomNavbar
