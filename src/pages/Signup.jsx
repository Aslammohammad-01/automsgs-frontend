import { useState } from "react";
import { API_BASE_URL } from "../config";
import AuthLayout from "../components/AuthLayout";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      window.location.href = `/verify-otp?email=${email}`;
    } else {
      setMessage(data.message || "Signup failed");
    }
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border px-4 py-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {message && (
          <p className="text-red-600 text-sm mb-3">{message}</p>
        )}

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          {loading ? "Sending OTP..." : "Sign Up"}
        </button>
      </form>
    </AuthLayout>
  );
}
