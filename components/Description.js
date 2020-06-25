import React from 'react';
import './Description.css';
import Phone from '../resources/img/iphone.png';
import Android from '../resources/img/download-app-android.png';
import Ios from '../resources/img/download-app.svg'

const Description = () => {
    return(
    <React.Fragment>

<section class="section-steps" id="works">
            
            <div class="row">
                <div class="col span-1-of-2 steps-box one">
                    <img src={Phone} alt="Omnifood app on iPhone" class="app-screen js--wp-2"/>
                </div>
                <div class="col span-1-of-2 steps-box">
                    <div class="works-step clearfix">
                       
                        <p>홈 쿠킹 레시피 앱</p>
                    </div>
                    <div class="works-step clearfix">
                        
                        <p>건강한 먹거리로 직접 요리하고 일상에 변화를 선사하세요. </p>
                    </div>
                    <div class="works-step clearfix">
                        
                        <p>건강한 라이프 스타일을 만들 수 있습니다.</p>
                    </div>
                    
                    
                    <a href="" class="btn-app"><img src={Ios} alt="App Store Button"/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.vegetarian.fruitfoodtable_app" class="btn-app-two"><img src={Android}  alt="Play Store Button"/></a>
                </div>
            </div>
        </section>
        </React.Fragment>
        );
}

export default Description;