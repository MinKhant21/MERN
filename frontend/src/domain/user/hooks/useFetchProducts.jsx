import React, { useState } from 'react'
import { PRODUCT_API_URL } from '../../../utils/common';
export default function useFetchProducts() {

     let [loading,setLoading] = useState("")

     let [products,setProducts] = useState([]);

     let fetchProducts = async () => {
          await fetch(`${PRODUCT_API_URL}/search?q=phone&limit=10&skip=10`)
          .then((res)=>{
               res.json();
          })
          .then((result)=>{
               console.log(result)
          })
     }
  

     return {
          loading,
          products,
          fetchProducts
     }
}
