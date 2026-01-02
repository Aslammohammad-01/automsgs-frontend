export default function ProtectedRoute({ children }) {
  return (
    <div>
      <h1 style={{ padding: 20 }}>ProtectedRoute reached ✅</h1>
      {children}
    </div>
  );
}
