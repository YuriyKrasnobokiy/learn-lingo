import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsRefreshing(false); // Встановлення isRefreshing на false після завершення перевірки автентифікації
    });

    // Відписка від слухача при розмонтуванні
    return () => unsubscribe();
  }, []);

  const isLoggedIn = isAuthenticated === true;
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
