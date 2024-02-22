import React, { useState } from 'react'
import {BASE_API_URL} from '../../../utils/common.js';
export default function useSignIn() {

     const [messages,setMessages] = useState("");
     const SignIn = async ({email,password}) => {
          try {
               let response = await fetch(`${BASE_API_URL}/login`,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      email,
                      password
                    })
                  })
                  let result = await response.json();
                  if(result.status == '200'){
                    if(result.user.role ==='user'){
                         setMessages(result.message)
                         localStorage.setItem("token",result.token)
                         localStorage.setItem("user",JSON.stringify(result.user))
                         return true;
                    }else{
                         setMessages("You're not administrator")
                         return false;
                    }
                    
                  }else{
                    setMessages(result.message)
                    return false;
                  }
          }
          catch (error) {
               setMessages(error.message);
          }
     }

     return {
          SignIn,
          messages,
     }
}
