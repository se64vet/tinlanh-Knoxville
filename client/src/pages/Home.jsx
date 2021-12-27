import React from 'react'
import HomeBible from '../components/Home/HomeBible/HomeBible'

import { HomeCarousel, HomeDailyBread, HomeMedia, HomePosts, HomePray } from "../components/Home";
import { SectionDivider } from "../components/sharedComponents";

const Home = () => {
    
    return (
        <>
            
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

