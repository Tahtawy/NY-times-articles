import {
  fetchArticleDetailApi,
  IArticleDetailsResponse,
} from '@/shared/apis/fetchArticleDetails.api';
import { useQuery } from '@tanstack/react-query';

export const useArticelDetails = (uri: string) => {
  return useQuery<IArticleDetailsResponse>({
    queryKey: ['popularArticles'],
    queryFn: async () => {
      const response = await fetchArticleDetailApi(uri);
      return response.data;
    },
  });
};
