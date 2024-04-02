import React, { useEffect, useState } from 'react'

export default function useCheckUser() {
     

     const [isExit,setIsExit] = useState(false)

     const SignOut = async () =>{
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          setIsExit(true)
     }

     return {
          isExit,
          SignOut,
     }
}
