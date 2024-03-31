import { AxiosPromise } from 'axios';
import axios, { api_key } from './api';

import { IArticle } from '@/models/article.model';

export interface IListPopularArticlesResponse {
  copyright: string;
  num_results: number;
  results: IArticle[];
  status: string;
}

export const fetchArticlesApi =
  (): AxiosPromise<IListPopularArticlesResponse> => {
    return axios.get(`/mostpopular/v2/viewed/1.json?api-key=${api_key}`);
  };
