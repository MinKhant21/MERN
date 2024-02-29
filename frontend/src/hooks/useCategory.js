import React, { useState } from 'react'
import axios from 'axios'
import {BASE_API_URL} from '../utils/common'
import { getToken } from '../helper'
export default function useCategory() {

     let [message,setMessage] = useState("")

     const Create = async ({name}) => {
          let token = getToken();
       
          let res =  await axios.post(`${BASE_API_URL}/categories`,{
               name
          },{
               headers:{
                    "x-auth-token" : token
               }
          })
          
          if(res.data.status == '200'){
               setMessage(res.data.message)
               return res.data
          }else{
               setMessage(res.data.message)
               return res.data

          }
     }
  

     return {
          Create,
          message,
     }
}
