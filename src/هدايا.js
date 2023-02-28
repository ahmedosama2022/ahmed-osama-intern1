
import React, {  useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import "./الرئيسيه.css"

import "./swiprr3.css";

// import required modules
import { Grid, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FaThList } from "react-icons/fa"
import "./home.css";
import Aos from 'aos';
import SwiperSec from "./SwiperSec";
import "aos/dist/aos.css";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
import {AiOutlineArrowLeft} from "react-icons/ai"
import Swiper3 from "./Swiper3";
import { Col } from "react-bootstrap";
const Home = () => {
  
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <div className="homee">
      <section className="sec111 container" style={{marginTop:"200px"}}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide className="s1">
 <div>
 <img src="1.jpg"/>
 </div>
   <div className="swipemain">
    <div className="sw2">
      <p style={{width:"120px", color:"white" , marginTop:"60px", textAlign:"center" ,alignItems:"center", position:"relative",bottom:"20px"}}>كوتش + تيشرت
         120 EGP</p>
    </div>
    <div className="sw1" style={{color:"black"}}>
      <p>صيف / 2022</p>
      <h2 style={{width:"200px"}}>اشتري الان
بضائع <span>جديده</span></h2>
<button className="button"><AiOutlineArrowLeft className="iom"/>تسوق الان</button>
    </div>
   </div>
        </SwiperSlide>
        <SwiperSlide className="s1">
 <div>
 <img src="	https://pure-soft.com/designs/10/images/bg-header-13.png"/>
 </div>
   <div className="swipemain">
    <div className="sw2">
      <p style={{width:"120px", color:"white" , marginTop:"60px", textAlign:"center" ,alignItems:"center", position:"relative",bottom:"20px"}}>كوتش + تيشرت
         120 EGP</p>
    </div>
    <div className="sw1" style={{color:"black"}}>
      <p>صيف / 2022</p>
      <h2 style={{width:"200px"}}>اشتري الان
بضائع <span>جديده</span></h2>
<button className="button"><AiOutlineArrowLeft className="iom"/>تسوق الان</button>
    </div>
   </div>
        </SwiperSlide>
      
        <SwiperSlide className="s1">
 <div>
 <img src="	https://pure-soft.com/designs/10/images/bg-header-9.jpg"/>
 </div>
   <div className="swipemain">
    <div className="sw2">
      <p style={{width:"120px", color:"white" , marginTop:"60px", textAlign:"center" ,alignItems:"center", position:"relative",bottom:"20px"}}>كوتش + تيشرت
         120 EGP</p>
    </div>
    <div className="sw1" style={{color:"black"}}>
      <p>صيف / 2022</p>
      <h2 style={{width:"200px"}}>اشتري الان
بضائع <span>جديده</span></h2>
<button className="button"><AiOutlineArrowLeft className="iom"/>تسوق الان</button>
    </div>
   </div>
        </SwiperSlide>
       
      </Swiper>
      </section>
   
    <section className="sec2" data-aos="fade-left" style={{marginTop:"1100px"}}>
      <h1>تسوق بالنـوع</h1>
      <div className="sec3">
        <div className="div333">
          <img src="	https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png"/>
          <p> بيجامه /اولادي</p>
        </div>
        <div className="div33">
          <img src="		https://orientspark.com/uploads/2022_09_14_09_44_44_tyshyrtat.png"/>
          <p> تيشيرتات/بناتي</p>
        </div>
        <div className="div33"> 
          <img src="	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png"/>
          <p>جاكيت/بناتي</p>
        </div>
        <div className="div33">
          <img src="	https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png"/>
          <p> بيجامه /اولادي</p>
        </div>
        <div className="div33">
          <img src="	https://orientspark.com/uploads/2022_09_26_10_25_05_kmsan.png"/>
          <p> بيجامه /اولادي</p>
        </div>
      </div>
    </section>

    <section className="sec5 container" data-aos="fade-left">
     <h1>اشتري من خلال الاقسام</h1>
    <Col >
    <section className="div32">
      <div className="div11">
     <img src="https://orientspark.com/uploads/2022_10_10_01_45_33_aolady.jpg"/>
     <h2>ملابس اولادي</h2>
      </div>
      <div className="div11">
     <img src="	https://orientspark.com/uploads/2022_10_10_01_45_05_bnaty.jpg"/>
     <h2>ملابس بناتي</h2>
      </div>
      <div className="div11">
     <img src="https://orientspark.com/uploads/2022_10_10_01_55_33_byby.jpg"/>
     <h2> ملابس بيبي</h2>
      </div>
      <div className="div11">
     <img src="https://orientspark.com/uploads/2022_10_10_01_58_46_hdaya.jpg"/>
     <h2>ملابس هدايا </h2>
      </div>
    </section>
    </Col>
    
    </section>
    
    <hr className="hr"></hr>
   <div className="container sec66y">
    <button className="bt1">تسوق الان</button>
    <h1>الاكثر مبيعا</h1>  
   </div>
   <SwiperSec/>
   <section className="container sec669">
  <div data-aos="fade-up-right">
  <img className="img3" src="https://orientspark.com/site/images/collection/clothes-bg.jpg"/>
   <h2 className="hhh">انيق , مريح</h2>
  </div>
  <div data-aos="fade-up-left">
  
 <div className="sec97">
 <img className="img1" src="	https://orientspark.com/site/images/collection/giraffe.svg"/>
   <img className="img55" src="	https://orientspark.com/site/images/collection/baby-bg.jpg"/>
   <h2 className="hg2">جميل للاطفال</h2>
 </div>
  </div>
   </section>


   <section className=" sec96">
    <div className="sec63 container">
      <div>
      <button className="bt1">تسوق الان</button>
      </div>
      <img src="https://pure-soft.com/designs/10/images/toys/boy.png" style={{width:"200px", position:"relative" , bottom:"30px"}}/>
      <h3>اولادي</h3>
    </div>
   <br/>
   <br/>
   <br/>
   <br/>
    <SwiperSec/>
   </section>
   <section className=" sec96" >
   <br/>
   <br/>
   <br/>
   <br/>
    <div className="sec63">
     
      <button className="bt1">تسوق الان</button>
      <h3>بناتي</h3>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <SwiperSec/>
   </section>
   <br/>
   <br/>
   <br/>
   <section className="sec96">
    <div className="sec63">
      <div>
      <button className="bt1">تسوق الان</button>
      </div>
     <div>
     <img src="	https://pure-soft.com/designs/10/images/toys/flying.png" style={{width:"200px"}}/>
     </div>
      <h3>بيبي</h3>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
   <SwiperSec/>

   </section>
   <br/>
   <br/>
   <br/>
   <br/>

   <section className="container sec96">
   <section className="sec89">
     <button className="bt4">الكل</button>
     <button className="bt4">قمصان</button>
     <button className="bt4">تيشيرتات</button>
     <button className="bt4">احذيه</button>
     <button className="bt4">بنطلون</button>
   </section>
   </section>
   
   <section className="sec863 container ">
    <h1>اختار طقمك</h1>
   <section className="sech1">
   
            <div className="swip3">
             <Swiper3/>
              </div>
            
            <div className="din">
            <p>شكل علي زوقك طقمك المفضل من خلال التقليب يمين و يسار حتي تجد التيشرت 
             
                المناسب ونفس الامر مع البنطلون حتي تري 
             
                الصوره كامله للطقم لكي تحدد اذا كان الاستايل مناسب لك ام لا.</p>
                <img src="https://orientspark.com/site/images/gift/shopping-2.png"/>
            </div>
   </section>
   </section>











   <section className="sec666 container">
    <div className="dvb" data-aos="fade-left">
      <img src="https://orientspark.com/site/images/why-us/social-media.png"/>
      <h2>الجــوده</h2>
      <p>الاقمشه التي تم اختياره قطن 100</p>
    </div>
   
    <div className="db" data-aos="fade-left">
      <img className="img9" src="https://orientspark.com/site/images/why-us/heart.png"/>
      <img className="imj" src="https://orientspark.com/site/images/toys/monky.png"/>
      <h2>صنع لاجل حياه حقيقه</h2>
      <p>الاقمشه التي تم اختياره لا تتلاشي بعد 
        <br/>
        الغسيل</p>
    </div>
    <div className="db2" data-aos="fade-left">
      <img src="	https://orientspark.com/site/images/why-us/cloud-computing.png"/>
      <h2>مناسب للطقس</h2>
      <p>الاقمشه التي تم اختياره قطن 100</p>
    </div>
   </section>





   <section className="sec963 container">
   <div>
   <h2>انضم الينا الان</h2> 
   <p>نحن بجانبك أثناء الحمل وما بعده. مع دروس عبر الإنترنت وشخصية مثل أنا حامل - حان وقت الاستعداد! ستتعلم كل ما تحتاج إلى معرفته مع نمو عائلتك</p>
   </div>
    <div className="imk">
    <img data-aos="fade-right" className="ty" src="	https://orientspark.com/uploads/2022_09_26_02_03_21_andm-alyna-alan.jpg"/>
    <img data-aos="fade-left" className="img58" src="	https://orientspark.com/uploads/2022_09_26_02_14_35_kss-ma-kbl-alnom-mn-mdontna.jpg"/>
   </div>
   </section>


   <hr className="hr2"></hr>


   <section className="sec9632 container" data-aos="zoom-in-up">
    <div className="ghj" >
      <p style={{ fontWeight: "700", fontSize: "20px"}}>قصتنا</p>
      <h2>لماذا المواد العضوية مهمه؟</h2>
      <br/>
      <p className="p5">إن بشرة الطفل ليست حساسة فقط - فهي تمتص في الواقع المزيد من كل ما
        <br/>
         تلمسه. لهذا السبب بحثنا 
         <br/>
        عن قطن عضوي معتمد من GOTS في أنقى صوره. يُنتَج القطن التقليدي بالكثير من المواد
        <br/>
         الكيميائية ، لكن القطن الذي ننتجه خالٍ من كل هذا اليأس</p>
    </div>
    <img src="	https://orientspark.com/uploads/2022_09_26_02_36_47_lmatha-almoad-alaadoy-mhmh.jpg"/>
   </section>
    </div>
  )
}

export default Home



