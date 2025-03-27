import React from 'react'
import Section4 from '../Section4/Section4'
import styled from 'styled-components';

const About = () => {
  return (
    <AboutUs>
        <div className="text-div">
            <h1>About Us</h1>
            <p>From fun explainer videos to eye-catching promotional animations, our video animations services cater to every project. Each animation is created with care and creativity to help our clients stand out and achieve their goals. But don't just take our word for it – let our portfolio speak for itself. Get inspired, and imagine the possibilities with our animated video services. As a top video animation agency, we deliver animations that engage, entertain, retain, and convert.From fun explainer videos to eye-catching promotional animations, our video animations services cater to every project. Each animation is created with care and creativity to help our clients stand out and achieve their goals. But don't just take our word for it – let our portfolio speak for itself. Get inspired, and imagine the possibilities with our animated video services. As a top video animation agency, we deliver animations that engage, entertain, retain, and convert.</p>
        </div>
        <div className="map-div">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57893.12020374235!2d67.05020545870725!3d24.921165980761263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b808bfd6b1%3A0x997b1a02c2570822!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725043729857!5m2!1sen!2s" width={"600"} height={"450"}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </AboutUs>
  )
}

export default About;

const AboutUs = styled.div`

    min-height: 130vh;
    background-color: #252424;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    place-items: center;
    @media (max-width:1095px) {
        grid-template-columns: repeat(1,1fr);
        padding: 60px 10px;
    }
    .text-div{
        text-align: center;
        display: flex;
        align-items: center;
        gap: 20px;
        flex-direction: column;
        justify-content: space-between;
        padding: 70px 20px;
        color: white;
        h1{
            font-weight: 1000;
            font-size: 40px;
            color: #FD2031;
        }
        p{
            font-size: 14px;
            @media (max-width:665px) {
                font-size: 12.5px;
    }
        }
    }
    .map-div{
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width:665px) {
        width: 90vw;
        height: 350px;
    }
   
    }
`