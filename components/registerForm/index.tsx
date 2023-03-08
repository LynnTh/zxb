import React from "react";
import { Button, Form, Input } from "antd";
import styles from "./index.module.css";

interface Props {
  handleRegister: (info: { username: string; password: string }) => void;
  loading: boolean;
}

const RegisterForm: React.FC<Props> = (props) => {
  return (
    <>
      <div className={styles.title}>注册</div>
      <Form
        name="login"
        onFinish={props.handleRegister}
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
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
