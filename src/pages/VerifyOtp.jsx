import { useState } from "react";
import { API_BASE_URL } from "../config";
import AuthLayout from "../components/AuthLayout";

export default function VerifyOtp() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const text = await res.text(); // ✅ FIX

      if (!res.ok) {
        throw new Error(text || "Invalid OTP");
      }

      window.location.href = "/login";
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false); // ✅ ALWAYS RUNS
    }
  };

  const resendOtp = async () => {
    if (cooldown) return;

    setCooldown(true);

    await fetch(`${API_BASE_URL}/resend-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setMessage("OTP resent to your email.");
    setTimeout(() => setCooldown(false), 30000);
  };

  return (
    <AuthLayout title="Verify OTP">
      <form onSubmit={verifyOtp}>
        <input
          type="text"
          placeholder="Enter OTP"
          required
          className="w-full border px-4 py-3 rounded mb-4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {message && (
          <p className="text-sm text-center mb-3 text-red-600">
            {message}
          </p>
        )}

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      <button
        onClick={resendOtp}
        disabled={cooldown}
        className={`text-sm mt-4 block mx-auto ${
          cooldown
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:underline"
        }`}
      >
        {cooldown ? "Resend OTP in 30s" : "Resend OTP"}
      </button>
    </AuthLayout>
  );
}
