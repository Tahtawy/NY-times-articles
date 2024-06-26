import axios, { AxiosInstance, Cancel } from 'axios';
import {
  ApiError,
  ApiExcutor,
  ApiExcutorArgs,
  AxiosHttpMethod,
  ApiRequestConfig,
} from './api.types';

export const api_key = import.meta.env.VITE_API_KEY;

const axiosParams = {
  baseURL: import.meta.env.VITE_API_URL,
};

const axiosInstance = axios.create(axiosParams);

const didAbort = (error: unknown): error is Cancel & { aborted: boolean } => {
  return axios.isCancel(error);
};

const getCancelSource = () => axios.CancelToken.source();

export const isApiError = (error: unknown): error is ApiError => {
  return axios.isAxiosError(error);
};

const withAbort = <T>(fn: AxiosHttpMethod) => {
  const excutor: ApiExcutor<T> = async (...args: ApiExcutorArgs) => {
    const originalConfig = args[args.length - 1] as ApiRequestConfig;

    const { abort, ...config } = originalConfig;

    if (typeof abort === 'function') {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn<T>(url, body, config);
      } else {
        const [url] = args;
        return await fn<T>(url, config);
      }
    } catch (error) {
      console.log('api error', error);

      if (didAbort(error)) {
        error.aborted = true;
      }

      throw error;
    }
  };

  return excutor;
};

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.get)(url, config),

    delete: <T>(url: string, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.delete)(url, config),

    post: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.post)(url, body, config),

    patch: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.patch)(url, body, config),

    put: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.put)(url, body, config),
  };
};

export default api(axiosInstance);
