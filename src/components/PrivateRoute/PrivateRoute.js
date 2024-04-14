import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ children, redirectedTo = "/learn-lingo" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Відписка від слухача при розмонтуванні //
    return () => unsubscribe();
  }, []);

  return isAuthenticated ? children : <Navigate to={redirectedTo} />;
};

export default PrivateRoute;
