import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"
import "./home.css"
import {AiOutlineHeart} from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
const Navber = () => {
  return (
    <div className='nav'>
      <Navbar bg="light" expand="lg" style={{width:"100%"}}>
      <Container>
     
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        <section className='sec345'>
          <AiOutlineHeart className="icon11"/>
        <HiShoppingCart className='icon1'/>
         <h3 className='h1nav' href="#link" >من نحن</h3>
          <h3 className='h1nav' href="#link" >تواصل معنا</h3>
        <Nav>
         <NavDropdown style={{ color: "gainsboro"}} title="اولادي" className='drob' id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><h2> اولادي</h2></NavDropdown.Item>
              <section className='navdro'>
              <div>
                <img className='imkn' src='	https://orientspark.com/uploads/2022_10_10_01_45_05_bnaty.png'/>
               </div>
              <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
               <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_44_tyshyrtat.png'/>تيشيرت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_40_kotshy.png'/>كوتشي</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
               <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
              </section>
            </NavDropdown>
            <NavDropdown title="بناتي" style={{color:"black"}} className='drob' id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><h2>بناتي</h2></NavDropdown.Item>
              <section className='navdro'>
              <div>
                <img className='imkn' src='	https://orientspark.com/uploads/2022_10_10_01_48_26_aolady.png'/>
               </div>
              <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
               <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
               <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
               
              </section>
            </NavDropdown>
            <NavDropdown title="بيبي" className='drob' id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><h2> بيبي</h2></NavDropdown.Item>
              <section className='navdro'>
              <div>
                <img className='imkn' src='	https://orientspark.com/uploads/2022_10_10_01_55_33_byby.png'/>
               </div>
              <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
               <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
               <div>
               <NavDropdown.Item href="#action/3.1"><img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_44_17_bntlon.png'/>بنطلون</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img className='navimg' src='	https://orientspark.com/uploads/2022_09_14_09_45_20_gakyt.png'/>جاكيت</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img className='navimg' src='https://orientspark.com/uploads/2022_11_22_07_14_45_bygamh.png'/>بيجامه</NavDropdown.Item>
               </div>
              
              </section>
              
            </NavDropdown>
            <NavDropdown title="هدايا" className='drob' id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><h2> هدايا</h2></NavDropdown.Item>
              <section className='navdrog'>
              <div>
               
               </div>
               <div>
              
               </div>
               <div>
              
               </div>
               <div>
                <img className='imp' src='https://orientspark.com/uploads/2022_10_10_01_57_59_hdaya.png'/>
               </div>
              
              </section>
            </NavDropdown>
            </Nav>
        
          <h3 className='h1nav' href="#link">الرئيسيه</h3>
          <Navbar.Brand href="#home"><img src='https://orientspark.com/site/images/logo1.png' style={{width:"150px" ,height:"100px"}}/></Navbar.Brand>
        </section>
        </Navbar.Collapse>
      
      </Container>
    
    </Navbar>
    </div>
  )
}

export default Navber
