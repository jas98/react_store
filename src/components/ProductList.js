import React from "react";
import Product from "./Product";
import ErrorMessage from "./ErrorMessage"

function ProductList(props) {

    if(props.products.length>0){
        return props.products.map((products, i) => {
            return (
              <Product
                products={products}
                key={i}
                incrementQuantity={props.incrementQuantity}
                decrementQuantity={props.decrementQuantity}
                index={i}
                removeProduct={props.removeProduct}
              />
            );
          });
    }
    else{
        return   <ErrorMessage />

  
    }
  
}

export default ProductList;
