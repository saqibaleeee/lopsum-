import './index.css'
import './App.css';
import Main from './components/route';
import Product from './components/product';
import Feature from './components/feature';
import Video from './components/video';
import Testimonial from './components/testimonial';
import Offer from './components/offer';
import Excellent from './components/excellent';
import Frequent from './components/frequent';
import Newsletter from './components/newsletter';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
    <Main/>
     
     <Product/>
     <Feature/>
     <Video/>
     <Offer/>
    <Testimonial/>
    <Excellent/>
    <Frequent/>
    <Newsletter/>
    <Footer/>
   
   
    </div>
  );
}

export default App;
