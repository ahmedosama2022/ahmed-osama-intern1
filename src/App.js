
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import  Navbar  from './Navber';
import هدايا from "./هدايا"
import بيبي from "./بيبي"
import بناتي from "./بناتي"
import اولادي from "./اولادي"
import الرئيسيه from "./الرئيسيه"
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>     
<>
<Routes>
          <Route path='/' element = {<هدايا />}/>
          <Route path='/بيبي' element = {<بيبي />}/>
          <Route path='/بناتي' element = {<بناتي />}/>
          <Route path='/اولادي' element = {<اولادي />}/>
          <Route path='/الرئيسيه' element = {<الرئيسيه />}/>
      </Routes>  
</>
</BrowserRouter>
<Footer/>
    </div>
  );
}

export default App;
