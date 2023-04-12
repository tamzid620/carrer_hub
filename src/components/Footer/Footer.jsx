import React from 'react';
import Image from '/Group 9969.png'

const Footer = () => {
    return (
        <div className=''>
          
          <footer className="footer p-10 bg-black text-white">
  <div>
    <span className="footer-title">CareerHub</span> 
    <p className="link link-hover">There are many variations </p> 
    <p className="link link-hover">Suffered alteration in some form</p> 
    
    <div>
   <img src={Image} alt="" />
    </div>
  </div> 
 
  <div>
    <span className="footer-title">Services</span> 
    <p className="link link-hover">Branding</p> 
    <p className="link link-hover">Design</p> 
    <p className="link link-hover">Marketing</p> 
    <p className="link link-hover">Advertisement</p>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <p className="link link-hover">About us</p> 
    <p className="link link-hover">Contact</p> 
    <p className="link link-hover">Jobs</p> 
    <p className="link link-hover">Press kit</p>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <p className="link link-hover">Terms of use</p> 
    <p className="link link-hover">Privacy policy</p> 
    <p className="link link-hover">Cookie policy</p>
  </div>
  <div>
    <span className="footer-title">Contact</span> 
    <p className="link link-hover">524 Broadway , NYC</p> 
    <p className="link link-hover">+1 777 - 978 - 5570</p> 
  </div> 
</footer> 
<footer className="footer px-10 py-4 border-t bg-black text-white border-base-300">
  <div className="items-center">
  
    <p>@2023 CareerHub. All Rights Reserved</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
  <p>Powered by CareerHub</p>
  </div>
</footer>


        </div>
    );
};

export default Footer;