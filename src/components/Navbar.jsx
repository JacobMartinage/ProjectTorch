import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../index.css'; 
import {styles} from '../styles';
import {navLinks} from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const [fadeOut, setFadeOut] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 800) { // Adjust this threshold as needed
      setIsSticky(true);

    } 
    else {
      setIsSticky(false);    
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={` ${styles.paddingX} w-full flex items-center py-2 top-0 z-10 bg-background ${isSticky ? 'fixed fade-in' : ''} ${fadeOut ? 'fixed fade-out' : ''}`}>
      <div className = "w-full flex justify-between items-center max-w-7x4 mx-auto">
        <Link 
        to = "/" 
        className = "flex items-center gap-2" 
        onClick = {() => {
          setActive(""); 
          window.scrollTo(0,0)
          }}
        >
          <img src = {logo} alt = "logo" className = "w-14 h-14 object-contain"/>
          <p className = "text-secondary text-[28px] font-bold unselectable"> Project Torch</p>
          </Link>
          <ul className = "list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`hover:text-white text-[22px] cursor-pointer ${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>


            ))}            

          </ul>

          <div className = "sm:hidden flex flex-1 justify-end items-center">
            <img 
            src={toggle ? close : menu}
            alt= "menu"
            className= "w-[28px] h-[28px] object-contain cursor-pointer"
            onClick = {() => setToggle(!toggle)}
            />
            <div className ={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className = "list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium hover:text-white cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>


            ))}            

          </ul>
            </div>

          </div>

      </div>


      


    </nav>
  )
}

export default Navbar