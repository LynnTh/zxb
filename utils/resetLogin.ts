import { message } from "antd";
import { removeToken } from "@/utils/storage";

const ResetLogin = () => {
  if (window.location.href.indexOf("/login") === -1) {
    message.warning("认证失效，请重新登录").then(() => {
      removeToken();
      window.location.href = "/login";
    });
  }
};

export default ResetLogin;
