import { useEffect } from "react";
import { logout } from "../utils/auth";
import { API_BASE_URL } from "../config";

export default function Dashboard() {
  // ✅ SESSION CHECK (SECONDARY SAFETY NET)
  useEffect(() => {
    fetch(`${API_BASE_URL}/me`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          alert("Session expired. Please login again.");
          window.location.href = "/login";
        }
      })
      .catch(() => {
        // ❗ Network errors only
        console.warn("Session check failed");
      });
  }, []);

  const handleConnectInstagram = () => {
    // ✅ NO userId, NO token, NO params
    window.location.href = `${API_BASE_URL}/auth/instagram/start`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">AutoMsgs</h1>

        <button
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          className="text-red-600 font-semibold"
        >
          Logout
        </button>
      </nav>

      <main className="flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">📸</div>

            <h2 className="text-2xl font-extrabold mb-3">
              Grow your Instagram faster
            </h2>

            <p className="text-gray-600 mb-6">
              Connect your Instagram account to automatically reply to comments,
              send DMs, and build a stronger community — all using
              Instagram-approved APIs.
            </p>

            <button
              onClick={handleConnectInstagram}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              🔗 Connect Instagram
            </button>

            <p className="text-xs text-gray-500 mt-4">
              AutoMsgs uses official Meta APIs. Your account is safe and compliant.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
