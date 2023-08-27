import React,{useState,useEffect} from 'react';

const Footer = () => {
    const footerDate = new Date().getFullYear();
    return (
      <footer>
        <p>Surfer Dude Studios &copy;{footerDate}</p>
      </footer>
    )
};

export default Footer;