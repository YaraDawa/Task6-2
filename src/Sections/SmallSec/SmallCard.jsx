import './SmallCard.css'
import free from './../../Img/free.webp'
import offers from './../../Img/offers.webp'
import support from './../../Img/support.webp'
const SmallCard = () =>{
    return(
        <div class="three-icons">
    
        <div class="talk">
        <img src={free} alt="deliver" width="45px"/>
        <div class="title">
        <p class="text"> FREE SHIPPING</p>
            <p class="text2"> For orders over $50</p>
        </div>
            </div>
    
        <div class="talk">
        <img src={offers} alt="deliver" width="45px"/>
        <div class="title">
            <p class="text"> OFFICAL DISCOUNT</p>
            <p class="text2"> Save Big on next product</p>
        </div>
        </div>

    
        <div class="talk">
        <img src={support} alt="deliver" width="45px"/>
        <div class="title">
            <p class="text-black">24/7 HELPLINE</p>
            <p class="text-secondary">Care till the end</p>
        </div>
        </div>
    

        </div>


    )
}
export default SmallCard