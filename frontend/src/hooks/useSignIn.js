import React, { useState } from "react";
import { BASE_API_URL } from "../utils/common";
import axios from "axios";
export default function useSignIn() {
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(true);
  const SignIn = async ({ email, password }, role = "user") => {
    let res = await axios.post(`${BASE_API_URL}/login`, {
      email,
      password,
      role,
    });
    if (res.data.status == "200") {
      setMessages(res.data.message);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res.data;
    } else {
      setMessages(res.data.message);
      return res.data;
    }
  };

  return {
    SignIn,
    loading,
    messages,
  };
}
