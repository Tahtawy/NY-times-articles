import {
  IListPopularArticlesResponse,
  fetchArticlesApi,
} from '@/shared/apis/fetchArticles.api';
import { useQuery } from '@tanstack/react-query';

export const usePopularArticles = () => {
  return useQuery<IListPopularArticlesResponse>({
    queryKey: ['popularArticles'],
    queryFn: async () => {
      const response = await fetchArticlesApi();
      return response.data;
    },
  });
};
