import { useQuery } from '@tanstack/react-query';

import { getFolderList } from '../remotes/get-folder-list';

export const useFolderListQuery = () => {
  const query = useQuery({
    queryFn: getFolderList,
    queryKey: [getFolderList.apiPath],
  });

  return {
    ...query,
    data: query.data,
  };
};
