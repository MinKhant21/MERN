import React , {useState} from 'react'

export default function useLogin() {
     
     const [message , setMessage] = useState(null);
     const [loading, setLoading] = useState(false);

     const login = ({email,password}) => {
          console.log(email);
     }

     return {
          login,
          loading,
          message
     }
}
