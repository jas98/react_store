import React, { useState } from "react";

function Product(props) {
    let totalprice=props.products.price * props.products.quantity


  return (
    
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.products.name_id}{" "}
          <span className="badge bg-secondary">${props.products.price}</span>{" "}
        </h2>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-secondary">
            {props.products.quantity}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
    
      <div className="col-2">
        {totalprice}
      </div>

      <button className="col-2 btn btn-danger" onClick={()=>{props.removeProduct(props.index)}}>Remove</button>
    </div>
  );
}

export default Product;
