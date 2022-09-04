import React from 'react';
import "./Home.css";
import {Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';

import Search from './Search';
function Home () {
  return (
    <div className='home'>
<div className='home_header'>
    <div className='left'>
     <Link to=""> About </Link>
     <Link to=""> Store </Link>
    </div> 
    <div className='right'>
    <Link to=""> Gmail </Link>
    <Link to=""> Images </Link>
<img src="https://ik.imagekit.io/amazonshop/icons8-circled-menu-24_ACKg6pLgK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661166174394" className='appicon' alt=''/>
    <Avatar className='avatar' src="https://ik.imagekit.io/amazonshop/hhghgh_j0vcXsCHQ.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1644426127114" />
</div>
 </div>
<div className='home_body'>
<img src='https://ik.imagekit.io/amazonshop/google-ar21_zEXK7JtKP5.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661167478042' alt='' />
<Search  />
   </div>  
        </div>
  )
}

export default Home;
