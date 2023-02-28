import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";


 

import "./swiper2.css";

// import required modules



const SwiperSec = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  
  

  
  
  return (
    <div className="swipr">
       <Swiper
            breakpoints={{
              500: {
                width: 500,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1020: {
                width: 1020,
                slidesPerView: 4,
              },
            }}
                 
            onSwiper={setSwiperRef}
            
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" >
                <div className="shadow_swhow_mini">
                  <img className="imgsw" src="https://pure-soft.com/designs/10/images/new.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("	https://pure-soft.com/designs/10/images/tab/3.jpeg")`}}>
      
                <div className="shadow_swhow_mini">

                  <img className="imgsw" src="	https://pure-soft.com/designs/10/images/use.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("https://pure-soft.com/designs/10/images/tab/5.webp")`}}>
                <div className="shadow_swhow_mini" >
                  <img className="imgsw" src="https://pure-soft.com/designs/10/images/use.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("https://pure-soft.com/designs/10/images/tab/4.jpeg")`}} >
                
                <div className="shadow_swhow_mini">
                  <img className="imgsw" src="https://pure-soft.com/designs/10/images/new.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
          
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("	https://pure-soft.com/designs/10/images/tab/6.webp")`}}>
                <div className="shadow_swhow_mini">
                  <img className="imgsw" src="	https://pure-soft.com/designs/10/images/use.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" >
                <div className="shadow_swhow_mini">
                  <img className="imgsw" src="https://pure-soft.com/designs/10/images/new.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("	https://pure-soft.com/designs/10/images/tab/3.jpeg")`}}>
      
                <div className="shadow_swhow_mini">

                  <img className="imgsw" src="	https://pure-soft.com/designs/10/images/use.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("https://pure-soft.com/designs/10/images/tab/5.webp")`}}>
                <div className="shadow_swhow_mini" >
                  <img className="imgsw" src="https://pure-soft.com/designs/10/images/use.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("https://pure-soft.com/designs/10/images/tab/4.jpeg")`}} >
                
                <div className="shadow_swhow_mini">
                  <img className="imgsw" src="https://pure-soft.com/designs/10/images/new.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div >
              <div className="carreaux_presentation_light" style={{backgroundImage: `url("	https://pure-soft.com/designs/10/images/tab/6.webp")`}}>
                <div className="shadow_swhow_mini">
                  <img className="imgsw" src="https://pure-soft.com/designs/10/images/new.png" style={{width:"80px", height:'80px', float:"right", marginTop:"10px",marginRight:"10px" }}/>
                    <div className="deroul_titre">اضف للعربه</div>
                </div>
              </div>
              <div className="div4697">
              <div style={{ color:"#777", fontWeight:"300", fontSize:"20px", fontFamily:'Roboto',paddingTop:"20px"}}> <font style={{fontWeight:"400"}}><p>تيشرت صيفي خفيف</p></font></div>
              <a href="#" style={{textDecoration:"none"}} target="parent"><div className="div854" style={{color:"#1e4944", fontWeight:"200", fontSize:"15px", fontFamily:'Roboto'}}><h3><del style={{color:"black"}}>65 EGP</del></h3> <h3 style={{color:"#d97c6d"}}>45 EGP</h3></div></a>
              </div>
        </div>
        </SwiperSlide>
        
       
      </Swiper>
    </div>
  )
}

export default SwiperSec
