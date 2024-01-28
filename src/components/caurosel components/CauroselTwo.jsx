import React from 'react'
import Carousel from 'better-react-carousel'



const CauroselTwo = ({data}) => {
  return (
    <div className='courseltwo'>
      
    <Carousel cols={6} rows={1} gap={10} >
      {data.map((item , i)=>
         <Carousel.Item key={i} >
          <div className="caroselimg">
         <img className='firstCarosel' src={item.src} alt='carouseltwoimg' />
         </div>
         <div className="discount">
          <p>{item.discount}</p>
         </div>
         <div className="descpara">
          <p>{item.para}</p>
         </div>
       </Carousel.Item>
      )}  
    </Carousel>
    </div>
  )
}

export default CauroselTwo ;