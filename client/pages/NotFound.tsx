import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-display text-primary mb-4">404</h1>
        <p className="text-xl text-secondary-text mb-8">Page not found</p>
        <button
          onClick={() => navigate("/")}
          className="btn-primary"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
