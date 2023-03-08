import React from "react";
import { Button, Form, Input } from "antd";
import styles from "./index.module.css";

interface Props {
  handleLogin: (info: { username: string; password: string }) => void;
  handleGoRegister: Function;
  loading: boolean;
}

const LoginForm: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <span className={styles.title}>登录</span>
        <span className={styles.subTitle}>
          没有账号？去
          <span
            className={styles.register}
            onClick={() => props.handleGoRegister()}
          >
            注册
          </span>
        </span>
      </div>
      <Form
        name="login"
        onFinish={props.handleLogin}
        autoComplete="off"
        layout="vertical"
        size="large"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "用户名不能为空" }]}
        >
          <Input placeholder={"请输入用户名"} style={{ margin: "8px 0" }} />
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
            loading={props.loading}
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
    </>
  );
};

export default LoginForm;
