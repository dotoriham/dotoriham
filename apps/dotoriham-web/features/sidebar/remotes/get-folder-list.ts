import { TreeData } from '@atlaskit/tree';

import mockFolderList from '../data/tree-mock.json';

const API_PATH = '/api/folder-list';

const fallbackValue: TreeData = {
  items: {
    '': {
      children: [],
      id: '',
    },
  },
  rootId: '',
};

export const getFolderList = async () => {
  try {
    return mockFolderList as TreeData;
  } catch (e) {
    console.error(e);
    return fallbackValue;
  }
};

getFolderList.apiPath = API_PATH;
getFolderList.fallbackValue = fallbackValue;
