import React, { useState } from "react";
import { BASE_API_URL } from "../utils/common";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
export default function useSignIn() {
  const { login } = useAuth();

  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(true);
  const SignIn = async ({ email, password }) => {
    let res = await axios.post(`${BASE_API_URL}/login`, {
      email,
      password,
      role : "user",
    });
    if (res.data.status == "200") {
      setMessages(res.data.message);
      login(res.data.token,res.data.data)
    } else {
      setMessages(res.data.message);
    }
  };

  return {
    SignIn,
    loading,
    messages,
  };
}
