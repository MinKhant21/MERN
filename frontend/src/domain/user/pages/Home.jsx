import React, { useEffect } from "react";
import useFetchProducts from "../hooks/useFetchProducts";

export default function Home() {
  let {fetchProducts} = useFetchProducts()
  useEffect(()=>{
    // fetchProducts()
  },[])
  return (
    <div className=" h-screen">
      <h3>Home</h3>
      <p>abcd</p>
    </div>
  );
}
