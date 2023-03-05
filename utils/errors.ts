import { message } from "antd";

/*
 * 报错信息结构
 * {
 *   "code": "400",
 *   "msg": "Not Allowed",
 *   "result": "请求数据非法或用户名密码错误"
 * }
 * */

export interface APIError {
  code: string;
  msg: string;
  result: string;
}

export function handleError(err: APIError) {
  if (err) {
    message.error(err.result);
  }
}
