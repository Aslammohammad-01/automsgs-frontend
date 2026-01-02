import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/me`, {
      credentials: "include", // 🔐 send HttpOnly cookie
    })
      .then((res) => {
        if (res.status === 200) {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      })
      .catch(() => {
        setAuthorized(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ⏳ Prevent white screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Checking session…</p>
      </div>
    );
  }

  // 🔒 Not logged in
  if (!authorized) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in
  return children;
}
