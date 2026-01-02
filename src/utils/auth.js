export const logout = () => {
  fetch(`${import.meta.env.VITE_API_BASE_URL}/logout`, {
    credentials: "include",
  }).finally(() => {
    window.location.href = "/login";
  });
};
