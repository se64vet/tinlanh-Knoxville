import React from 'react'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import HomeDailyBread from '../components/HomeDailyBread/HomeDailyBread'
import CustomNavbar from '../components/sharedComponents/Navbar/Navbar'
import SectionDivider from '../components/sharedComponents/SectionDivider/SectionDivider'


const Home = () => {
    return (
        <>
            <CustomNavbar />
            <HomeCarousel />

            <SectionDivider text="Tĩnh Nguyện Hàng Ngày" />
            <HomeDailyBread />
        </>
    )
}

export default Home

