import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Adminroute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);
  const token = localStorage.getItem("token");
//const API_URL=process.env.REACT_APP_API_URL
const API_URL =
   process.env.NODE_ENV === "production"
    ? "https://jewllery-production.up.railway.app"
    : "http://localhost:5000";
  useEffect(() => {
    const checkAdmin = async () => {
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Unauthorized!",
          text: "Please login first.",
        });
        setIsAdmin(false);
        return;
      }

      try {
        const res = await fetch(`${API_URL}/api/user/admin/check`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          Swal.fire({
            icon: "error",
            title: "Access Denied",
            text: "You are not authorized to view this page.",
          });
          setIsAdmin(false);
          return;
        }

        const data = await res.json();

        if (data.success) {
          setIsAdmin(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Access Denied",
            text: data.message,
          });
          setIsAdmin(false);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong while checking admin access.",
        });
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, [token]);

  if (isAdmin === null) return <div>Loading...</div>;

  if (!isAdmin) return <Navigate to="/404" />;

  return children;
};

export default Adminroute;
