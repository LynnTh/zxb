import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form, Input, Button, message } from "antd";
import { login } from "@/service/request";
import { token_key } from "@/utils/storage";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import { createHeaderRoute } from "next/dist/server/server-route-utils";
import LoginForm from "@/components/loginForm";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [loginLoading, setLoginLoading] = useState(false);

  const handleSubmit = (value: { username: string; password: string }) => {
    setLoginLoading(true);
    login(value).then((res) => {
      if (res && res.result) {
        localStorage.setItem(token_key, res.result);
        router.push("/");
      }
    });
  };

  return (
    <div className={styles.body}>
      <div id="page" className={styles.site}>
        <div className={styles.container}>
          <div className={styles.login}>
            <div className={styles.hero}>
              <div className={styles.title}>
                第十七届振兴杯
                <br />
                全国青年职业技能大赛
              </div>
              <p>参赛人：庄鑫 陶巍</p>
            </div>
            <div className={styles.main}>
              <LoginForm loading={loginLoading} handleLogin={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
