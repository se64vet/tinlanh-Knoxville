import React from 'react'
import HomeBible from '../components/HomeBible/HomeBible'

import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import HomeDailyBread from '../components/HomeDailyBread/HomeDailyBread'
import HomeMedia from '../components/HomeMedia/HomeMedia'
import HomePosts from '../components/HomePosts/HomePosts'
import HomePray from '../components/HomePray/HomePray'
import CustomNavbar from '../components/sharedComponents/Navbar/Navbar'
import SectionDivider from '../components/sharedComponents/SectionDivider/SectionDivider'

const Home = () => {
    
    return (
        <>
            <CustomNavbar />
            <HomeCarousel />

            <SectionDivider text="Tĩnh Nguyện Hàng Ngày" />
            <HomeDailyBread />

            <SectionDivider text="Bài Viết Mới" />
            <HomePosts />

            <SectionDivider text="Âm Nhạc" />
            <HomeMedia />

            <SectionDivider text="Cầu Nguyện" />
            <HomePray />

            <HomeBible />
            
        </>
    )
}

export default Home

