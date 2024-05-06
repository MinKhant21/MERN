import React , {useState} from 'react'
import {API_BASE_URL} from '../utils/constant.js'
import axios from 'axios';
import {useAuth} from '../context/AuthContext'

export default function useLogin() {
     
     const [message , setMessage] = useState(null);
     const [loading, setLoading] = useState(false);
     let {login} = useAuth();
     const Userlogin =   ({email,password}) => {
          axios.post(`${API_BASE_URL}/login`,{
               email,
               password,
               role : "admin",
          }).then((response) => {
               let result = response.data
               if(result.status === 200){
                    login(result.token,result.data)
                    return
               }else{
                    setMessage(result.message);
                    return
               }
          })
     }

     return {
          Userlogin,
          loading,
          message
     }
}
