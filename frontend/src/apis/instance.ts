import Axios from 'axios';

// export const BASE_URL = process.env.REACT_APP_HOST;

const axiosInstance = Axios.create({
  baseURL: `http://127.0.0.1:8000`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const client = {
  get: function get<Response = unknown>(url: string) {
    return axiosInstance.get<Response>(url).then((res) => res.data);
  },
  post: function post<Response = unknown, Request = any>(
    url: string,
    body?: Request,
  ) {
    return axiosInstance.post<Response>(url, body).then((res) => res.data);
  },
  patch: function patch<Response = unknown, Request = any>(
    url: string,
    body?: Request,
  ) {
    return axiosInstance.patch<Response>(url, body).then((res) => res.data);
  },
};
