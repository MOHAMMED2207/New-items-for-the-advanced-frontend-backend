"use client";
import { useEffect, useState } from "react";
export function useAuth() {
  // Simulate authentication check
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // git token from local storage
    const token = localStorage.getItem("jwt");
    // if token exists, set isAuthenticated to true
    if (token) {
      // ok is found in local storage
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    // After checking, set checking to false
    setChecking(false);
  }, []);

  return { isAuthenticated, checking };
}
