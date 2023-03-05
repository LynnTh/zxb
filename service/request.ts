import type { AxiosInstance } from "axios";
import axios, { AxiosError } from "axios";
import ResetLogin from "@/utils/resetLogin";
import { getToken } from "@/utils/storage";
import { handleError } from "@/utils/errors";
import { authenticationLogin } from "@/service/productionLink";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  transformRequest: [
    function (data) {
      return JSON.stringify(data);
    },
  ],
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    if (error.status === 401) {
      ResetLogin();
    } else {
      return Promise.reject(error.response || error);
    }
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers.Authorization = "Bearer " + getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface ApiResponse {
  code: string;
  msg: string;
  result: any;
}

const handleAPIError = (err: any) => {
  const { data } = err;
  if (data && data.result) {
    handleError(data);
  }
};

export const post = (url: string, params: any) => {
  return axiosInstance
    .post<ApiResponse>(url, params)
    .then((res) => {
      return res && res.data;
    })
    .catch((err) => {
      handleAPIError(err);
    });
};

export const get = (url: string, params: any) => {
  return axiosInstance
    .get<ApiResponse>(url, params)
    .then((res) => {
      return res && res.data;
    })
    .catch((err) => {
      handleAPIError(err);
    });
};

export const rdelete = (url: string, params: any) => {
  return axiosInstance
    .delete<ApiResponse>(url, params)
    .then((res) => {
      return res && res.data;
    })
    .catch((err) => {
      handleAPIError(err);
    });
};

export const put = (url: string, params: any) => {
  return axiosInstance
    .put<ApiResponse>(url, params)
    .then((res) => {
      return res && res.data;
    })
    .catch((err) => {
      handleAPIError(err);
    });
};

export function login(params: { username: string; password: string }) {
  return post(authenticationLogin, { ...params }).then((res) => res);
}
