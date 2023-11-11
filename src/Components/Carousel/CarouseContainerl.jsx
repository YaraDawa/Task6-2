import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carouselbtn.css'
import s1 from './../../Img/s1.jpg';
import s2 from './../../Img/s2.jpg';
import s3 from './../../Img/s3.jpg';

const CarouselContainer = () => {
    return (
        <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src={s1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>ZAINA BLACK EDUCTION</h3>
            <p>CURVY BEVEL DUAL AUDIO</p>
            <div class="mx-auto"><button class="btn-slider"><p>BUY NOW</p></button></div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src={s2}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>DELTA ZERTIGA PROCESSOR DISPLAY</h3>
            <p>FULL SCREEN DISPLAY</p>
            <div class="mx-auto"><button class="btn-slider"><p>SHOP NOW</p></button></div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src={s3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>4K RESOYLTION</h3>
            <p>EXCLUSIVE STEEL FRAME</p>
            <div class="mx-auto"><button class="btn-slider"><p>BUY NOW</p></button></div>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}
export default CarouselContainer;