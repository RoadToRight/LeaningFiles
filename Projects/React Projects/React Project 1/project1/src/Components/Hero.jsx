import Button from './Button';
import './Hero.css'
function Hero(){

    return(

        <div className='Hero-Section container'>

            <div className="Hero-Text">

                <span className='h1'>YOUR FEET DESERVE <br/> <span className="thebest">THE BEST</span></span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dolorem eos blanditiis illo id soluta placeat nesciunt <br/>perferendis obcaecati culpa, distinctio, cupiditate <br /> sapientesaepe 
                est tempora tempore libero? Numquam, <br/> temporibus? Iusto, dolorum assumenda?</p>
                <br />
                <div className="Hero-BTN-parent">

                <Button className='Button' btnName='Shop Now'/>
                <Button className='Button Btn-change' btnName='Contact Us'/>
                </div>
                

            </div>


            <div className='Hero-img'><img src="/images/domino-studio-164_6wVEHfI-unsplash-removebg-preview.png" alt=""  className='responsive-img'/></div>

            

        </div>

    )

}

export default Hero;