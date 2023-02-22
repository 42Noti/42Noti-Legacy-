import React, { useEffect } from "react";
import { useRouter } from "next/router";
import instance from "./api/api";

export default function Home() {
  const router = useRouter();

  const loadUserData = () => {
    const token = localStorage.getItem("accessToken");

    if (!token) return false;

    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // store.dispatch(setToken(token));
    return true;
  };

  useEffect(() => {
    loadUserData() ? router.push("/todo-list") : router.push("/login");
  });

  return <div className="global-container"></div>;
}
