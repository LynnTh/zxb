import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form, Input, Button, message } from "antd";
import { login } from "@/service/request";
import { token_key } from "@/utils/storage";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import { createHeaderRoute } from "next/dist/server/server-route-utils";

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
              <Form
                name="login"
                onFinish={handleSubmit}
                autoComplete="off"
                layout="vertical"
                size="large"
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "用户名不能为空" }]}
                >
                  <Input
                    placeholder={"请输入用户名"}
                    style={{ margin: "8px 0" }}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "密码不能为空" }]}
                >
                  <Input.Password
                    placeholder={"请输入密码"}
                    style={{ margin: "8px 0" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loginLoading}
                    style={{
                      width: "100%",
                      fontSize: "13px",
                      margin: "12px 0",
                    }}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
