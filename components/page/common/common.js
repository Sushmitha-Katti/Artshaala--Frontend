import React,{Component} from "react";
import Style from './style';
import Link from 'next/link';


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
                        <Link href="/"><button className="line4">Explore Now</button></Link>
                    </div>
                
           
            </div>

            </Style>
        )
      }
}

export default Comman;
