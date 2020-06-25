import React from 'react';
import './Welcome.css';
import Logo from '../resources/img/logo2.png';
const Welcome = () => {
 return (
     <React.Fragment>
   
    <div class="logo-box">
       
  
        
    <img src={Logo} alt="Omnifood logo" class="logo"/>
        <a class="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a>
    </div>

<div class="hero-text-box">
    <h1 class="hero-text-box-01">You are what you eat</h1>
    <h1 class="hero-text-box-02">당신의 식사가 당신이 된다.</h1>
  
    <h1 class="hero-text-box-02">- 사바랭, [미식예찬], 1825 -</h1>
   

</div>
</React.Fragment>
 );
}

export default Welcome;