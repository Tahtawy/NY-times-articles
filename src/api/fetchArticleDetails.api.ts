import { AxiosPromise } from 'axios';
import axios, { api_key } from './api';

import { IArticleDetails, IMeta } from '@/models/article.model';

export interface IArticleDetailsResponse {
  status: string;
  copyright: string;
  response: {
    docs: IArticleDetails[];
  };
  meta: IMeta;
}

export const fetchArticleDetailApi = (
  uri: string
): AxiosPromise<IArticleDetailsResponse> => {
  return axios.get(
    `/search/v2/articlesearch.json?fq=uri:"${uri}"&api-key=${api_key}`
  );
};
