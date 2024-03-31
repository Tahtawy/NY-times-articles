import {
  fetchArticleDetailApi,
  IArticleDetailsResponse,
} from '@/api/fetchArticleDetails.api';
import { useQuery } from '@tanstack/react-query';

export const useArticelDeails = (uri: string) => {
  return useQuery<IArticleDetailsResponse>({
    queryKey: ['popularArticles'],
    queryFn: async () => {
      const response = await fetchArticleDetailApi(uri);
      return response.data;
    },
  });
};
