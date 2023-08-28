import React,{useState,useEffect} from 'react';

const Footer = () => {
    const footerDate = new Date().getFullYear();
    return (
      <footer id="footer" className='container'>
        <hr />
        <p>Surfer Dude Studios &copy;{footerDate}</p>
      </footer>
    )
};

export default Footer;