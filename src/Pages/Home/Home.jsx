
import CarouselContainer from '../../Components/Carousel/CarouseContainerl';
import Header from '../../Components/Header/Header';
import Features from '../../Sections/Features/Features';
import Footer from '../../Components/Footer/Footer';
import New from '../../Sections/New/New';
import Power from '../../Sections/Power/Power';
import See from '../../Sections/See/See';
import See2 from '../../Sections/See2/See2';
import SmallCard from '../../Sections/SmallSec/SmallCard';





function Home() {
  return (
    <>
    {/* <Header /> */}
    
    <CarouselContainer />
  
    <SmallCard />
    <See />
    <Power/>
    <Features />
    <See2 />
    <New />
    
    
    </>
  );
}

export default Home;
