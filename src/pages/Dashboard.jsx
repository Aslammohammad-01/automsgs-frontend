import { logout } from "../utils/auth";

const API_BASE_URL =
  "https://5r6y5cfnhd.execute-api.ap-south-2.amazonaws.com/dev";

export default function Dashboard() {
  const handleConnectInstagram = () => {
    // ✅ Get userId saved during login
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Session expired. Please login again.");
      logout();
      return;
    }

    // 🔐 Redirect to backend OAuth start with state=userId
    window.location.href =
      `${API_BASE_URL}/auth/instagram/start?userId=${userId}`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          AutoMsgs
        </h1>

        <button
          onClick={logout}
          className="text-red-600 font-semibold"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full">
          {/* Connect Instagram Card */}
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
              AutoMsgs uses official Meta APIs.  
              Your account is safe and compliant.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
