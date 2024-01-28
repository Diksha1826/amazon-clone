import React from 'react'
import Carousel from 'better-react-carousel'

const CloseItemsCarosel = ({data , col}) => {
  return (
    <div className='closecoursel'>
      
    <Carousel cols={col[0].col} rows={1} gap={5} >
      {data.map((item , i)=>
         <Carousel.Item key={i} >
          <div className="closecaroselimg">
          <img  src={item.src} alt='carouseltwoimg' />
         </div>
       </Carousel.Item>
      )}  
    </Carousel>
    </div>
  )
}

export default CloseItemsCarosel