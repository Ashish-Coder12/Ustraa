import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';
import Card from './components/card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {
  const[products,setProducts]=useState([]);
  const[categories,setCategories]=useState([]);
  const[menu,setMenu]=useState(false)

  useEffect(()=>{
    axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob').then(res=>{
      setProducts(res.data.product_list.products)
      setCategories(res.data.category_list)
      console.log(res.data.product_list.products);
      console.log(res.data.category_list);
    }).catch(error => alert(error));
  },[])

    const handleclick =() =>{
      setMenu(!menu)
      console.log(menu);
    }

  return (
    <div className="App">
        <Navbar/>
        <div className="ourproduct">
        <div className="product-section">
          <h3>Our Product</h3>
          <ul className="list">

            {categories.map(categoriesList => {
          return(
            <li style={{backgroundImage:`url(${categoriesList.category_image})`}} >
              <a>  {categoriesList.category_name}</a>
            </li>
          )
        })}
        <li>View all</li>
          </ul>
        </div>
        <div className="product-wrapper">
          {products.map(productList => {
          return(
          <Card
          key={productList.id}
          name={productList.name}
          image={productList.image_urls.x520}
          is_in_stock={productList.is_in_stock}
          price={productList.price}
          final_price={ productList.final_price}
          // weight={productList.weight}
          // weight-unit={productList.weight_unit}
          // rating={.productList.weight.}
          />
          )
        })}
        </div>
        </div>
        <button onClick={() => setMenu(!menu)} className="dropdown">Change</button>
        <div >
          <ul className={menu?"categoriesbottom active":"categoriesbottom "}>
          {categories.map(categoriesList => {
          return(
            <li onClick={handleclick}  >
              <a>  {categoriesList.category_name}</a>
            </li>
          )
        })}
          </ul>
        </div>


    </div>
  );
}

export default App;
