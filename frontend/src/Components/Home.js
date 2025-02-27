import React from 'react'
import CategoryList from './CategoryList'
import BannerProduct from './BannerProduct'
import VerticalCardProduct from './VerticalCardProduct'

const Home = () => {
  return (
    <div>
        <CategoryList/>
        <BannerProduct/>
        <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
        <HorizontalCardProduct category={"watches"} heading={"Popular watches"}/>

        <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
        <VerticalCardProduct category={"mouse"} heading={"Mouse"}/>
        <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
        <VerticalCardProduct category={"camera"} heading={"Camera"}/>
        <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
        <VerticalCardProduct category={"speakers"} heading={"Speakers"}/>
        <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
        <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home