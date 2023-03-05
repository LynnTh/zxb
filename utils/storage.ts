export const token_key = "token";

export function getToken() {
  return localStorage.getItem(token_key) || "";
}

export function removeToken() {
  localStorage.removeItem(token_key);
}
