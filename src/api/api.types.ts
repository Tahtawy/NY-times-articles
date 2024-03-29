import {
  Canceler,
  AxiosError,
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

export type { Canceler };

type AxiosMethods = Pick<
  AxiosInstance,
  'get' | 'post' | 'delete' | 'patch' | 'put'
>;

export type AxiosHttpMethod = AxiosMethods[keyof AxiosMethods];

export type ApiExcutor<T> = {
  (url: string, body: unknown, config: AxiosRequestConfig): AxiosPromise<T>;
  (url: string, config: AxiosRequestConfig): AxiosPromise<T>;
};

export type ApiExcutorArgs =
  | [string, unknown, AxiosRequestConfig]
  | [string, AxiosRequestConfig];

export type ApiRequestConfig = AxiosRequestConfig & {
  abort?: (cancel: Canceler) => void;
};

export type ApiError = AxiosError;
