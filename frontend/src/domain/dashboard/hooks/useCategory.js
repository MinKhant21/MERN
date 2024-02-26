import React, { useState } from 'react'
import {BASE_API_URL} from '../../../utils/common'
export default function useCategory() {
  

     const [message ,setMessage] = useState("")

     const Create = async ({name}) => {
          try {
               await fetch(`${BASE_API_URL}/categories`,{
                    method:"POST",
                    data:{
                         name
               }
               }).then((result)=>{
                    console.log(result)
               })
          } catch (error) {
               
          }
     }
     return {
          Create
     }
}
