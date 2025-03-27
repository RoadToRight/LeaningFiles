import { useState } from 'react';
import Button from './Button';
import './Navbar.css';
import styled from 'styled-components'

const Navbar = () =>{
  
 let [togglemenu , settogglemenu] = useState(false);

function toggle(){

    settogglemenu(prev => !prev)

}
    return (

        <div>

            <nav>
                   <div className="logo"><img src="/images/nike-logo-removebg-preview.png" alt="" /></div>
                   <Ul $isselected = {togglemenu}>
                    <li>Home </li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>More</li>
                    <li> <Button btnName={'LogIn'}/></li>
                   </Ul>


                   
                    <div className='squarespace-logo' onClick={toggle}><img src="/images/squarespace_icon-removebg-preview.png" alt=""/></div>
            </nav>

        </div>

    );
   
 

}
export default Navbar;

const Ul = styled.ul`

    max-height:${(props) => props.$isselected ? '300px' : '0px'}

`