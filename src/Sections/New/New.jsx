    import "./../../Components/Product/Product.css";
    import Carousel from "react-multi-carousel";
    import "react-multi-carousel/lib/styles.css";
    import Product from "./../../Components/Product/Product";
    import { productData, responsive } from "./data.js";

    export default function New() {
    const product = (productData?.map((item) => (
        <Product
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
        />)
    ));

    return (
        <div className="New p-5">
        <h1>NEW ARRIVELS</h1>
        <Carousel showDots={true} responsive={responsive}>
            {product}
        </Carousel>
        </div>
    );
    }