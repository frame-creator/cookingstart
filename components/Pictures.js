import React from 'react';
import Image01 from '../resources/img/01.jpg';
import Image02 from '../resources/img/02.jpg';
import Image03 from '../resources//img/03.jpg';
import Image04 from '../resources/img/05.png';
import Image05 from '../resources/img/08.jpg';
import Image06 from '../resources/img/06.jpg';
import Image07 from '../resources/img/07.jpg';
import Image08 from '../resources/img/09.jpg';
import './Pictures.css';


const Pictures = () => {
    return (
        <React.Fragment>
        <section class="section-meals">
        <ul class="meals-showcase">
            <li>
                <figure class="meal-photo">
                    <img src={Image01} alt="Korean bibimbap with egg and vegetables"/>
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src={Image02} alt="Simple italian pizza with cherry tomatoes"/>
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src={Image03} alt="Chicken breast steak with vegetables"/>
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src={Image04} alt="Autumn pumpkin soup"/>
                </figure>
            </li>
        </ul>
        <ul class="meals-showcase clearfix">
            <li>
                <figure class="meal-photo">
                    <img src={Image05} alt="Paleo beef steak with vegetables"/>
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src={Image06} alt="Healthy baguette with egg and vegetables"/>
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src={Image07} alt="Burger with cheddar and bacon"/>
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src={Image08} alt="Granola with cherries and strawberries"/>
                </figure>
            </li>
        </ul>
    </section>
    </React.Fragment>
    )
}
export default Pictures;