import React from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { removeToken } from "@/utils/storage";
import Link from "next/link";
import { FileOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";

interface Props {
  children: React.ReactNode;
}

const items: MenuProps["items"] = [
  {
    label: "用户管理",
    key: "user",
    icon: <UserOutlined />,
  },
  {
    label: "文件管理",
    key: "file",
    icon: <FileOutlined />,
  },
];

const MainLayout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <div className={styles.layout}>
      <div className={styles.topbar}>
        <div className={styles.container}>
          <div className={styles.title}>振兴杯</div>
          <div className={styles.list}>
            <Menu mode="horizontal" items={items} />
          </div>
          <div className={styles.logout}>
            <Button type="text" icon={<LogoutOutlined />}>
              登出
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
