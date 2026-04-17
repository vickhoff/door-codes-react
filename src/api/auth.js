// REVIEW: Inconsistent indentation in loginUser — the closing paren of fetch(),
// the if-block, and the return are indented as if they're inside the fetch options
// object. They should be at the function-body level.
export async function loginUser(userData) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
}

// REVIEW: Indentation issue — the entire body of registerUser is indented
// at 12+ spaces. This should match loginUser's style.
export async function registerUser(userData) {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
}
