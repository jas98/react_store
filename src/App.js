import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem.js";

function App() {
  const productList1 = [
    { price: 1225, name_id: "Iphone xs", quantity: 0 },
    { price: 995, name_id: "Samsung 22 Pro", quantity: 0 }, ];

  let [productList, setProductList] = useState(productList1);
  let [totalAmount, setTotalAmount] = useState(0);

  let newTotalAmount = totalAmount;

  function incrementQuantity(index) {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);

   // console.log(newProductList[index].price);
    newTotalAmount += newProductList[index].price;
   // console.log(newTotalAmount)
    setTotalAmount(newTotalAmount);
  }

  function decrementQuantity(index) {
    let newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    } else {
      newProductList[index].quantity = 0;
    }
  }

function resetAll(){

let newProductList = [...productList1];
setProductList(newProductList);
let newTotalAmount =totalAmount
    setTotalAmount(0);




}

function removeProduct(index){
  let newProductList = [...productList];
 let newTotal=totalAmount
 // console.log(newProductList[index].price);
newTotal=newTotal-(newProductList[index].price *newProductList[index].quantity)
  newProductList.splice(index,1)
  setProductList(newProductList)
  setTotalAmount(newTotal)
console.log(productList.length-1)

}

function addItem(name,price){
  let newProductList = [...productList];
  let item = { price:parseInt(price), name_id:name,quantity:0};
  newProductList.push(item)   
  setProductList(newProductList)
}

  return (
    <>
     <Navbar />
    <AddItem addItem={addItem } />
     
      <main className="container mt-5">
        <ProductList
          products={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeProduct={removeProduct}
        />
      </main>
      <Footer totalPrice={totalAmount}  resetAll={resetAll} />
    </>
  );
}

export default App;
