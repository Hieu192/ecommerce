import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/men_kurta'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Áo nam"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"giày nam"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"quần short nam"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Đầm nữ"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Váy nữ"}/>
        </div>
    </div>
  )
}

export default HomePage