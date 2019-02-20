import React,{Component} from "react";
import instrument from './instruments.png';
import Style from './style';
import Grid from 'react-css-grid'


class Comman extends Component {
    render () {
        return (
          <Style>
            <div className='bgimg'>
                <div className='bg'>
                   
                        <div class="l1"></div>
                        <div class="l2"></div>
                        <div class="l3"></div>
                        <div class="l4"></div>
                        <div class="l5"></div>
                        <div class="l6"></div>
                        <div class="l7"></div>
                        <div class="l8"></div>
                        <div class="l9"></div>
                    </div>
               
                
                <div className="b1">
                        <h6 className="line1">WELCOME TO OUR MUSIC STORE</h6>
                        <h1 className="line2">From Starters to pro...</h1>
                        <p className="line3">lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum</p><br />
                        <button className="line4">Explore Now</button>
                    </div>
                
           
            </div>

            </Style>
            // {/* <div>Column</div>
            // <div>Column</div> */}
         
        )
      }
}

export default Comman;



// class Comman extends Component {
//     render () {
//       return (
//         <Grid
//           width={320}
//           gap={24}>
//           <div>Column</div>
//           <div>Column</div>
//           <div>Column</div>
//           <div>Column</div>
//         </Grid>
//       )
//     }
//   }



//   <Style>
//   <div className='main'>    
//   <div className='bgimg'>
//   <img src={instrument}/>
//   </div>
//   <div className='extra'></div>
//   </div>
//   </Style>