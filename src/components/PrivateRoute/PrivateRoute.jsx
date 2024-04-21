import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const PrivateRoute = ({ component, redirectedTo = "/learn-lingo" }) => {
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

  return isAuthenticated ? <Navigate to={redirectedTo} /> : component;
};

export default PrivateRoute;
