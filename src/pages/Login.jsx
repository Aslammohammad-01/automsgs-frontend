import { useState } from "react";
import { API_BASE_URL } from "../config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ REQUIRED
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Invalid login credentials");
      }

      // ✅ success → redirect
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setMessage("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ THIS WAS MISSING
  return (
    <div style={{ maxWidth: 400, margin: "80px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}
