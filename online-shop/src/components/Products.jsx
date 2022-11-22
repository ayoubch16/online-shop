import React from "react";
import { useDispatch,useSelector } from "react-redux";


export default function Products(){
    const selector = useSelector(state=>state);
    const  dispatch = useDispatch();

    const products = selector.products;
    console.log(products);
    const cartProducts = selector.cartProducts;
    return(
        <div className="productsList">
            {products.map(item=>
            <div className="products" key={item.id}>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <span>Color : {item.color}</span>
                <div className="priceBlock">
                    <span className="productPrice">{item.price}</span>
                    <button>BUY</button>
                </div>
            </div>    
            )}

        </div>

    )

}