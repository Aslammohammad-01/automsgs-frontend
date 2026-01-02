export default function ProtectedRoute({ children }) {
  console.log("ProtectedRoute rendered");

  return children;
}
export default function ProtectedRoute({ children }) {
  return (
    <div>
      <h1>ProtectedRoute working</h1>
      {children}
    </div>
  );
}
