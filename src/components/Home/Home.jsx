import React  from 'react'
import Headers from '../Header/Headers' ;
import './Home.css' ;
import Carousel from 'react-material-ui-carousel' ;
// import CauroselTwo from './caurosel components/CauroselTwo';
import CauroselTwo from '../caurosel components/CauroselTwo';
import CloseItemsCarosel from '../caurosel components/CloseItemsCarosel';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom' ;


function Home() {

  let cole = [
    {col: 8} ,
  ]
  let cols = [
    {col: 6} ,
  ]

const items = [
    {
       src: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Jan24ARTTeaser1/GW/PC_HERO_SN_EN_2X._CB584265105_.jpg"
    },
    {
       src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/JanArt_PC_Hero_3000x1200_02_pongal_2._CB584490457_.png"
    },
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/January/JanART/Gateway/Event/R1/D112932136_JanArt_DesktopHero_3000x1200._CB584088466_.jpg"
   },
   {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/HPC/JanART/GW/RevisedHero/Unrec_HPC_3000x1200._CB584467141_.jpg"
 },
 {
  src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/January/JanART/Gateway/Event/R1/DesktopHero_3000x1200._CB584088529_.jpg"
},
]

const firstCaroselData =  [
  {
    src: "https://m.media-amazon.com/images/I/41-2m5Oyv5L._AC_SY200_.jpg" ,
    discount: 'Up to 28% off',
    para: 'Redmi 12 5G|Starting from 11999' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/51AjohATwIL._AC_SY200_.jpg" ,
    discount: 'Up to 39% off' ,
    para: 'Samsung galaxy M14 | Lowest Ever Price' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41kPiVffGhL._AC_SY200_.jpg" ,
    discount: 'Up to 90% off' ,
    para: 'Starting at 999_ smartwatches' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31hXqtvutdL._AC_SY200_.jpg" ,
    discount: 'Up to 83% off' ,
    para: 'Top Headsets from Oneplus ' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31Q0xVpBphL._AC_SY200_.jpg" ,
    discount: 'Up to 76% off' ,
    para: 'Branded Suitcase Trolleys & Sets' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY200_.jpg" ,
    discount: '27% off' ,
    para: 'Starting from 7499 including headset' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/51t6Sv1C1AL._AC_SY200_.jpg" ,
    discount: 'Upto 55% off' ,
    para: 'Home Appliances from Top Brands' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31qVIrbLqJL._AC_SY200_.jpg" ,
    discount: 'Up to 50% off' ,
    para: 'The Biggest Deal on the best seller' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/51wYwMcEjoL._AC_SY200_.jpg" ,
    discount: 'Up to 53% off' ,
    para: 'Household Supplies and Personal Care' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41YMxB8GbOL._SL1000__AC_SY200_.jpg" ,
    discount: 'Up to 46% off' ,
    para: 'Skin _ Biotique, Cetaphil, Mamaearth' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41Wupd7WtFL._AC_SY200_.jpg" ,
    discount: 'Up to 53% off' ,
    para: 'Budget Laptops Under INR 40000' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41O99Qo4V1L._AC_SY200_.jpg" ,
    discount: 'Upto 71% off ' ,
    para: 'Best Selling Mens Grooming Devices' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31BXEEUVfFL._AC_SY200_.jpg" ,
    discount: 'Up tp 48% off' ,
    para: 'Sony headphones & Speakers' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/51o13K4h3-L._AC_SY200_.jpg" ,
    discount: 'Up to 23% off' ,
    para: 'iQOO Neo 7 Pro || Most Powerful' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/91tFSBrxCbL._AC_SY200_.jpg" ,
    discount: 'Up to 60% off' ,
    para: 'Best Styles in Footwear & Handbags' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31C-On2VUxL._AC_SY200_.jpg" ,
    discount: 'Up to 51% off' ,
    para: 'Alexa, Fire TV & Kindle' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41Kfb6VZFpL._AC_SY200_.jpg" ,
    discount: 'Up to 59% off' ,
    para: 'Deals on Stethoscopes & Medical' ,
  } 
 
]

const secondCaroselData =  [
  {
    src: "https://m.media-amazon.com/images/I/61OcLe0IQQL._AC_SY200_.jpg" ,
    discount: '80% off',
    para: 'Crazy Deals on BSB Bedsheets' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41KIzAvH8oL._AC_SY200_.jpg" ,
    discount: '77% off',
    para: 'Best Deal on Status Fleece Blanket' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/51Q6Qrh+zGL._AC_SY200_.jpg" ,
    discount: '₹199 and under',
    para: 'Best of BSB Bedsheets' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41cF2ekzesL._AC_SY200_.jpg" ,
    discount: '68% off',
    para: 'Panasonic 9W LED Bulb' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41kcDbjR5sL._AC_SY200_.jpg" ,
    discount: '38% off',
    para: 'Amazon Brand - Presto! ' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/513ZiHfRfqL._AC_SY200_.jpg" ,
    discount: '₹199 and under',
    para: 'Crazy Deals on Status Door Mat' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41EpcFQNeQL._AC_SY200_.jpg" ,
    discount: '51% off',
    para: 'Amazon Brand - Presto!' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/51hRu76z1hL._AC_SY200_.jpg" ,
    discount: '60% off',
    para: 'Amazon Brand - Presto! Disinfectant' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41cVgYgAKpL._AC_SY200_.jpg" ,
    discount: '69% off',
    para: 'pigeon by Stovekraft Ultra' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/51fQeFFDGJL._AC_SY200_.jpg" ,
    discount: '23% off',
    para: 'Amazon Brand - Solimo Toilet Paper' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41bJ6kzaXSL._AC_SY200_.jpg" ,
    discount: '24% off',
    para: 'Ezee Black Garbage Bags' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/419OkBj3+RL._AC_SY200_.jpg" ,
    discount: '85% off',
    para: 'Pack Of 12 socks' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31Rh4TQewhL._AC_SY200_.jpg" ,
    discount: 'Up to 60% off',
    para: 'Allen Solly Mens Sweatshirt' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/510e8O+ut5L._AC_SY200_.jpg" ,
    discount: '26% off',
    para: 'Amazon Brand - Pesto! 2ply kitchen Tissues' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41p2Ggy0wPL._AC_SY200_.jpg" ,
    discount: '51% off',
    para: 'Supples Premium Diapers , X-Large' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/413vdjbrplL._AC_SY200_.jpg" ,
    discount: '36% off',
    para: 'Presto! Oxo-Biodegradable Garbage Bags' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/41BUdpoD7GL._AC_SY200_.jpg" ,
    discount: '4% off',
    para: 'Shalimar Premium OXO - Biodegradable' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31JtMIJSZuL._AC_SY200_.jpg" ,
    discount: 'Up to 60% off',
    para: 'ALLEN SOLLY Mens Sweatshirt' ,
  } ,
  {
    src: "https://m.media-amazon.com/images/I/31Hi7JTBtPL._AC_SY200_.jpg" ,
    discount: '57% off',
    para: 'Recron Certified Dream Fibre Pillow' ,
  } ,
  
]

const thirdCaroselData =[
  {
    src: "https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_SY200_.jpg"
 },
 {
  src: "https://m.media-amazon.com/images/I/71yl-NIFgpL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61TapeOXotL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/71Q8czKqSIL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61eaeqlbsUL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61Bdfmo2s0L._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61K5p03FYyL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61YTjbpBTTL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61ZgWdNPmfL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/819DWQLgjKL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61oatFNX4BL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61oDV-EKLyL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61ECqTYhQiL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/71AxLdT5lJL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61Szdu3CaoL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/614pTKzcPiL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61Su0aM8NoL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/71eMAaJsTeL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61bCLd8pZjL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/71g09REHnkL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61Fj5wTOQiL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/71n+Hxx+wvL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61jzPPHm+kL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/618fpS1lonL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/71nzWfUAt+L._AC_SY200_.jpg"
},

{
  src: "https://m.media-amazon.com/images/I/71sTY2XLBeL._AC_SY200_.jpg"
},

]

const fourthCaroselData = [
 {
    src: "https://m.media-amazon.com/images/I/51FF5ZTyoyL._AC_SY200_.jpg"
 },
 {
  src: "https://m.media-amazon.com/images/I/519nB66nosL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51PQhsaEcLL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51BKE3L3pyL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/41sXjSVQrbL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/518i9EgA+xL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51246OdUzZL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61vyDZJ0jWL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/41fRTMiz4IL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51fw4NpIGcL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51Duygr3nuL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51I+1MrB5DS._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61RH5LWdzoL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/514XX1QODcL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61CTcbLlT1L._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51YUTzz42CL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/416rm56OzaL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/412PNcZfqxL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/61Fk2x2JNhL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/81V9aPkPTgL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/41f1taZCyUL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/512WxF7CkqL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/41EJr2IZYJL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51bM6sijNrL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/51rGLoshzTL._AC_SY200_.jpg"
},
{
  src: "https://m.media-amazon.com/images/I/41vncBS0yjL._AC_SY200_.jpg"
}
]

const fifthCaroselData =[
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/JanART24/D106918497_WL_JanART24_Uber_SIM_DesktopShoveler_200x200._CB585207119_.jpg" ,
  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Janart24/CEPC/GW/Desktop_Shovler/200X200._CB585204935_.jpg" ,
  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/GW/BAU/Jan/Hero/Shoveler/DesktopShoveler_400x400_1_1x._CB585593115_.jpg" ,
   
  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/TVs/Kamya/JanBAU/latv-DesktopShoveler_200x200._CB585585845_.jpg" ,
  
  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/Event/Gateway/JanART/AF-Eng-200x200._CB585568427_.jpg" ,
   
  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/JanART/DesktopShoveler_V4_200x200._CB585756728_.png" ,

  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/JanART24/Shoveler/DesktopShoveler_400x400-Media_1x._CB585423591_.jpg" ,
   
  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Jan/JanART24/DesktopShoveler_200x200_Eng._CB585566891_.jpg" ,
   
  } ,
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/JanART24PCshvlr1X/1x_DesktopShoveler_english_200x200._CB585593594_.jpg" ,
    
  } 
  
]

// const [item , setitems] = useState("");
// const openlightning=()=>{
//   console.log('hiii') ;
  
// }
// useEffect(()=>{
//     const tlitem = JSON.parse(localStorage.getItem("totalItems"))
//     setitems(tlitem);
// },[])

  
  return (
    <>
    <Headers  />
    <div className='home'>
     <div className='homecontainer'>
     <Carousel>
            {
                items.map( (item, i) => <>
                <img key={i} className='home_carousel_img' src={item.src} alt='img'  />
                </> )
            }
      </Carousel>
    </div>


    <div className='home_mega_container'>


      <div className='home_mega_container_divbox' >
        <h6>Deals on smartphones that suits your&nbsp;budget</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/JanART24/MSO/PC/01_JanArt_Desktop_QuadImageCard_372X232._SY116_CB585905081_.jpg" alt="phone img" />
            <span>Budget | Under ₹10,000</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/JanART24/MSO/PC/02_JanArt_Desktop_QuadImageCard_372X232._SY116_CB585905081_.jpg" alt="phone img" />
            <span >Mid range | ₹10,000 - ₹25,000</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/JanART24/MSO/PC/03_JanArt_Desktop_QuadImageCard_372X232._SY116_CB585905081_.jpg" alt="phone img" />
          <span >Premium | ₹25,000 - ₹40,000</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/JanART24/MSO/PC/04_JanArt_Desktop_QuadImageCard_372X232._SY116_CB585905081_.jpg" alt="phone img" />
          <span >Ultra premium | Above ₹40,000</span>
          </div>
        </div>
      </div>

      <div className='home_mega_container_divbox' >
      <h6>Starting ₹79 | Home decor and furnishing</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/JanART/GW/QCs/186_116_Home_furnishings_2_REVISED._SY116_CB584260944_.jpg" alt="phone img" />
            <span >Curtains , carpet & more</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/JanART/GW/QCs/186_116_Home_decor_2_REVISED._SY116_CB584260944_.jpg" alt="phone img" />
            <span >showpieces , idols and more</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/JanART/GW/QCs/186_116_Home_storage_2_REVISED._SY116_CB584260944_.jpg" alt="phone img" />
          <span >Storage boxes , drawers and more</span>
          </div>
          <div  className='inflex_item'>
          <Link to='products' >
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/JanART/GW/QCs/186_116_Home_lighting_2_REVISED._SY116_CB584260944_.jpg" alt="phone img" />
          </Link>
          <span >Lightning for home</span>
          
          </div>
        </div>
      </div>

      {/* third div  */}
      <div className='home_mega_container_divbox' >
      <h6>Welcome offers just for you</h6>
      <div className='different'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jan24/GW/rev/PC_CC_NTA_1X_V2._SY304_CB584088744_.jpg' alt='img' />
      </div>
      </div>

    {/* fourth */}
      <div className='home_mega_container_divbox' >
      <h6>Up to 65% off | Deals on wide range of TVs</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/JanART/MSO/Desktop/186x116/32_inch._SY116_CB584249216_.jpg" alt="phone img" />
            <span >Budget TVs | Starting ₹5,499</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/JanART/MSO/Desktop/186x116/43_inch._SY116_CB584249216_.jpg" alt="phone img" />
            <span >4K TVs | Up to 18 months No Cost EMI</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/JanART/MSO/Desktop/186x116/55_inch._SY116_CB584249216_.jpg" alt="phone img" />
          <span >Big Screens | Save up to ₹30,000</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/JanART/MSO/Desktop/186x116/65_inch._SY116_CB584249216_.jpg" alt="phone img" />
          <span >Ultra Premium TVs | Flat 50% off</span>
          </div>
        </div>
      </div>

     {/* fifth */}
      <div className='home_mega_container_divbox' >
      <h6>Up to 65% off | Bestselling appliances for your home</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/PC_QC_372X232_01_1x._SY116_CB584255820_.jpg" alt="phone img" />
            <span >Refrigerators | Up to 60% off</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/PC_QC_372X232_02_1x._SY116_CB584255820_.jpg" alt="phone img" />
            <span >Washing machines | Up to 60% off</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/PC_QC_372X232_03_1x._SY116_CB584255820_.jpg" alt="phone img" />
          <span >AC | Up to 55% off</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/PC_QC_372X232_03_1x._SY116_CB584255820_.jpg" alt="phone img" />
          <span >Microwaves | Up to 60% off</span>
          </div>
        </div>
      </div>

    {/* sixth */}
      <div className='home_mega_container_divbox' >
      <h6>Minimum 60% off | Deals on Amazon brands & more</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/1X_PCQC_HOME_JANART_3._SY116_CB584283358_.jpg" alt="phone img" />
            <span >Starting 129 | Home decore & lighting</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/QC_PC_JanArt_186x116_1_refresh01._SY116_CB584533209_.jpg" alt="phone img" />
            <span >Minimum 50% off | Kitchen products</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/QC_PC_JanArt_186x116_1_1._SY116_CB584254385_.jpg" alt="phone img" />
          <span >Starting ₹99 | Toys & games</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/SPB_186._SY116_CB584310270_.jpg" alt="phone img" />
          <span >Minimum 60% off | Jackets & sweatshirts</span>
          </div>
        </div>
      </div> 


{/* seventh div  */}

<div className='home_mega_container_divbox' >
      <h6>Up to 70% off | Best sellers curated for your delight</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/JanART24/Gateway/Local_Shops_Desktop_QC_Appliances_1x._SY116_CB584326680_.jpg" alt="phone img" />
            <span >Up to 60% off | Appliances</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/JanART24/Gateway/Local_Shops_Desktop_QC_Furniture_1x._SY116_CB584326680_.jpg" alt="phone img" />
            <span >Up to 40% off | Furniture</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/JanART24/Gateway/Local_Shops_Desktop_QC_Home_1x._SY116_CB584326680_.jpg" alt="phone img" />
          <span >Up to 50% off | Home decor</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/JanART24/Gateway/Local_Shops_Desktop_QC_Kitchen_1x._SY116_CB584326680_.jpg" alt="phone img" />
          <span >Up to 70% off | Kitchen</span>
          </div>
        </div>
      </div> 

      {/* eighth */}

      <div className='home_mega_container_divbox' >
      <h6>Upto 70% off | Electronics & accessories</h6>
      <div className='different'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/HERO/CEPC/Unrec/Flexible_Desktop__Cat_Card_1X_1._SY304_CB586009760_.jpg' alt='img' />
      </div>
      </div>



    </div>
    

    <div className="margin">

    <div className="caroselfirstcontainer">
       <h6>Blockbuster deals <span>See all deals</span></h6>
       <CauroselTwo data={firstCaroselData} />
    </div>

    <div className="caroselsecondcontainer">
       <h6>Trending deals <span>See all deals</span> </h6>
       <CauroselTwo data={secondCaroselData}  />
    </div>

    <div className="closecaroselcontainer">
    <h6>Starting ₹999 | Bestselling smartwatches from top brands <span>See all deals</span> </h6>
    <CloseItemsCarosel data={thirdCaroselData} col={cole} /> 
    </div>

    <div className="staticcontainerfourth">
     {/* first  */}
    <div className='home_mega_container_divbox' >
      <h6>Up to 60% off | True decor</h6>
      <div className='different'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/JanART24/Gateway/Revised/Saheli_Desktop_CC_1x._SY304_CB584777672_.jpg' alt='img' />
      </div>
      </div>

      {/* second */}
      <div className='home_mega_container_divbox' >
      <h6>Shoes , jewellery & more | Starting ₹199</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/January/JanART/QC/16th/low_1._SY116_CB584350896_.jpg" alt="phone img" />
            <span >Sports shoes</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/January/JanART/QC/16th/Low_5._SY116_CB584350683_.jpg" alt="phone img" />
            <span >Jewellery & accessories</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/January/JanART/QC/16th/Low_6._SY116_CB584350683_.jpg" alt="phone img" />
          <span >watches & smartwatches</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/January/JanART/QC/16th/Low_7._SY116_CB584350683_.jpg" alt="phone img" />
          <span >bags, wallets & luggage</span>
          </div>
        </div>
      </div> 



      {/* third */}
      <div className='home_mega_container_divbox' >
      <h6>Up to 40% off | Lipakshi handicrafts</h6>
      <div className='different'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/JanART24/Gateway/Revised/Karigar_Desktop_CC_1x._SY304_CB584777672_.jpg' alt='img' />
      </div>
      </div>

      {/* fourth */}
      <div className='home_mega_container_divbox' >
      <h6>Up to 70% off | International brands</h6>
      <div className='different'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2024/JanART/banner/SHOPCAT/STRIPE/Stripe/CC/1/Desktop_CC_1._SY304_CB585892817_.jpg' alt='img' />
      </div>
      </div>

    </div>

    <div className="closecaroselcontainer">
    <h6>Starting ₹99 + 20% cashback on first order | Beauty & makeup <span>See all deals</span> </h6>
    <CloseItemsCarosel data={fourthCaroselData} col={cole} /> 
    </div>

    <div className="cardsixth">
     <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/JanART/Event-WTS_Creatives/Flight_GW_editorial_2300x646._CB584276567_.jpg' alt='cardimg'/>
    </div>

     <div className="closecaroselcontainer">
    <h6>Shop deals in top categories <span>See all categories</span> </h6>
    <CloseItemsCarosel data={fifthCaroselData} col={cols} /> 
    </div>

    <div className="staticcontainerseventh">
       {/* first  */}
    <div className='home_mega_container_divbox' >
      <h6>Up to 40% off | Deals on mobiles and accessories</h6>
      <div className='different'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/RenewedMarketing2024/JanART24/JanArtCC/379x304._SY304_CB584285241_.jpg' alt='img' />
      </div>
      </div>

      {/* second */}
      <div className='home_mega_container_divbox' >
      <h6>No Cost EMI up to 18 months | TVs for every budget</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/HETV/Sabeer/JAN24/Desktop_Quad_card_w_title_-_Card_1_copy0.5x._SY116_CB584219119_.jpg" alt="phone img" />
            <span >TVs under ₹15,000 | Up to 50% off</span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/HETV/Sabeer/JAN24/Desktop_Quad_card_w_title_-_Card_1_copy_20.5x._SY116_CB584219119_.jpg" alt="phone img" />
            <span >TVs in the range of ₹15,000 - ₹30,000</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/HETV/Sabeer/JAN24/Desktop_Quad_card_w_title_-_Card_1_copy_30.5x._SY116_CB584219119_.jpg" alt="phone img" />
          <span >TVs in the range of ₹30,000 - ₹50,000</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/HETV/Sabeer/JAN24/Desktop_Quad_card_w_title_-_Card_1_copy_40.5x._SY116_CB584219119_.jpg" alt="phone img" />
          <span > TVs above 50,000 | Up to 50% off</span>
          </div>
        </div>
      </div> 



      {/* third */}
      <div className='home_mega_container_divbox' >
      <h6>Up to 70% off | Refurbished Products</h6>
      <div className='different'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2024/JanART/banner/SHOPCAT/STRIPE/Stripe/CC/1/Desktop_CC_1._SY304_CB585892817_.jpg' alt='img' />
      </div>
      </div>

      {/* fourth */}
      <div className='home_mega_container_divbox' >
      <h6>Great Republic Day sale | Brands in focus</h6>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/redmi12Ascent/D113698326_INWLD_Redmi12_5G_JanArt_AscentJanArt_Desktop_QuadImageCard_186X116._SY116_CB584498349_.jpg" alt="phone img" />
            <span >Starting ₹12,999 | Redmi 12 5G </span>
          </div>
          <div className='inflex_item'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irshad/JanART24/LG-PC-QC-1X._SY116_CB585945989_.jpg" alt="phone img" />
            <span >Starting ₹5,999 | LG Appliances</span>
          </div>
        </div>
        <div className='home_mega_container_divbox_inflex'>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Ayushi/shopby/TCL/samsung_186X116._SY116_CB585903634_.jpg" alt="phone img" />
          <span >Up to 40% off | Biggest Discount on Samsung TVs</span>
          </div>
          <div className='inflex_item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/JanART/Desktop_QC_186x116._SY116_CB585481504_.jpg" alt="phone img" />
          <span >Up to 35% off on Cadbury Chocolates</span>
          </div>
        </div>
      </div> 

    </div>

</div>

    <div className='signfooter'>
      <hr />
      <div className='signinfooterdiv'>
      <div>See personalized recommendations</div>
      <button>Sign in</button>
      <p>New customer? <span>Start here</span>  </p>
      </div>
      <hr />
    </div>

    <Footer />


</div>
</>
)
}

export default Home ;

