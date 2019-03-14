import React,{Component} from 'react';
import Nav from '../../Navbar';
import Body from './style';
import Footer from '../../Footer';
import ImgGal from'../../ImageGallery/exportGal';


class Products extends React.Component{
    render(){
        return(
            <div>
            <nav>
             <Nav/>
            </nav>
         <Body>
            <div className="main">
            <div className="gallery">
            <ImgGal/>
            </div>
            <div className="discription">
            <h3>
            Kadence Frontier Series Acoustic Guitar
            With Equalizer,Super Combo with Bag,
            1 pack Strings, Strap, Picks,Capo, 
            Tuner and Guitar Stand.
            </h3>
            <span className="mon">Price: </span> <span className="mon-num">INR 6499.00/-</span>
            <p>
            Inclusive of all taxes  
            <br/>Pay on Delivery (Cash/Card) eligible
            EMI starts at ₹306.<br/> No Cost EMI available</p>
             <h3>In stock.</h3>
             {/* put quantity seletor here  */}
             <button className="myButton">Add to Cart</button>
            </div>
            </div>
            <div className="specs">
            <h2>
            Specifications
            </h2>
            <h3>
            <ul>
                <li>Body Shape: Dreadnought</li>
                <li>Body Top: Laminated Lindenwood</li>
                <li>Back and Sides: Laminated Mahogany</li>
                <li>Body Finish: Gloss</li>
                <li>Bracing: Scalloped X</li>
                <li>Neck: Nato</li>
                <li>Neck Finish: Gloss</li>
                <li>Fingerboard: Stained Maple, 12" (305 mm)</li>
                <li>Frets: 20</li>
                <li>Position Inlays: Dot</li>
                <li>Nut : Plastic, 1.69" (43 mm)</li>
                <li>Truss Rod: Dual-Action</li>
                <li>Tuning Machines: Covered Chrome</li>
                <li>Scale Length: 25.6" (650 mm)</li>
                <li>Bridge: Stained Maple</li>
                <li>Pickguard: Black</li>
            </ul>
            </h3>
            </div>
       </Body>
       <footer>
           <Footer/>
       </footer>
       </div>
        );
    }
}

export default Products;



