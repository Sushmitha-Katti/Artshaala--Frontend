import React,{Component} from 'react';
import Nav from '../../Navbar';
import {Body,BlueText,Button}  from './style';
import Footer from '../../Footer';
import ImgGal from'../../ImageGallery/exportGal';
import Head from '../../head';
import StarRating from 'react-star-rating-component';
import Cards from '../../page/Home/couroselCards';


class Products extends React.Component{
    render(){
        return(
            <div>
            <head>
                <Head/>
            </head>
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
            
             <div className="rev">
             <StarRating   editing={false}
              renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
              starCount={5}
              value={4}/>
             <BlueText>100 reviews</BlueText>
             </div>
             <br/>
             <BlueText>Write a review</BlueText>
             <br/>
             <br/>
             
           <span className="mon">Price: </span> <span className="mon-num">INR 6499.00/-</span>
            <p>
            Inclusive of all taxes  
            <br/>Pay on Delivery (Cash/Card) eligible
            EMI starts at ₹306.<br/> No Cost EMI available</p>
             <h3>In stock.</h3>
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
            <section className="rating">
            <div className="rt">
            <StarRating   editing={false}
            renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={4}/>
            </div>
            <div className ="rr">
            <BlueText >Write a review</BlueText>
            </div>
            <div className="rating-box">
            <div className="star">
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={5}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={4}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={3}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={2}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={1}/>
            </div>
            <div className="rating-window">
            <StarRating   editing={false}
            renderStarIcon={()=><i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={5}/>
            <StarRating   editing={false}
            renderStarIcon={()=> <i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={4}/>
            <StarRating   editing={false}
            renderStarIcon={()=><i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={3}/>
            <StarRating   editing={false}
            renderStarIcon={()=> <i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={2}/>
            <StarRating   editing={false}
            renderStarIcon={()=> <i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={1}/>
            </div>
            </div>
            </section>
            <section className="comment">
            <h1 className="head">Santosh Kamble bgm</h1>
            <div>
            <StarRating   
            editing={false}
            renderStarIcon={()=> <i class="fa fa-star fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={4}/>
             </div>
             <h4 className="date">
             25 January 2019
             </h4>
             <BlueText>Verified Purchase</BlueText>
             <p className="content">Delivered in time, packaging super and safe guitar is very good at this price range, stand is also good.</p>
             <p className="rev"> One person found this useful</p>
             <div>
             <Button>
             <button className="myButton" style={{marginRight: '20px'}}>
              Helpful
             </button>
             <button className="myButton" style={{marginRight: '20px'}}>
              Comment
             </button>
             <button className="myButton" >
              Report
             </button>
             </Button>  
             </div>
            </section>
            <div>
                <h1 className="rp">RELATED PRODUCTS</h1>
                <Cards/>
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



