import { removeToken } from "@/utils/storage";

const logout = () => {
  removeToken();
  window.location.href = "/login";
};

export default logout;
