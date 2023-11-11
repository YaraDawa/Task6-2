import React from 'react'
import './Features.css'
import phonepic from './../../Img/phonepic.webp'
import ic5 from './../../Img/ic5.png'
import ic6 from './../../Img/ic6.webp'
import ic3 from './../../Img/ic3.webp'
import ic1 from './../../Img/ic1.webp'
import ic4 from './../../Img/ic4.webp'
import ic2 from './../../Img/ic2.png'






    const Features = () => {
    return (

        <section class="features mt-5">
        <div class="container mt-5">
            <div class="head">
            <h2 class="text-center">INNOVATIVE QUALITIES & FEATURES</h2>
            <p class="text-secondary text-center" >SHOW YOURS TO THE WORLD</p>
            </div>
            <div class="main-features mt-5">
            <div class="row">
                <div class="col-lg-4">
                <div class="feat1  mb-5">
                    <div class="mb-3 p-3">
                    <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                    <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                        qeueri</p>
                    </div>
                    <img src={ic5} alt="deliver"/>
                </div>
    
                <div class="feat1 d-flex mb-5">
                    <div class="mb-3 p-3">
                    <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                    <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                        qeueri</p>
                    </div>
                    <img  src={ic6} alt="deliver"/>
                </div>
                <div class="feat1 d-flex mb-5">
                    <div class="mb-3 p-3">
                    <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                    <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                        qeueri</p>
                    </div>
                    <img src={ic3} alt="deliver"/>
                </div>
    
                </div>
                <div class="col-lg-4">
                <img  src={phonepic} alt="centersd" className="center-img" />
                </div>
                <div class="col-lg-4">
                <div class="feat1 d-flex mb-5 ">
                    <img  src={ic1} alt="deliver"/>
                    <div class="mb-3 p-3">
                    <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                    <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                        qeueri</p>
                    </div>
    
                </div>
                <div class="feat1 d-flex mb-5 ">
                    <img  src={ic4} alt="deliver"/>
                    <div class="mb-3 p-3">
                    <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                    <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                        qeueri</p>
                    </div>
                </div>
                <div class="feat1 d-flex mb-5 ">
                    <img src={ic2} alt="deliver"/>
                    <div class="mb-3 p-3">
                    <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                    <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                        qeueri</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
    }

    export default Features