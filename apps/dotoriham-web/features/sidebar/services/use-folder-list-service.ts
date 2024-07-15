import { useCallback, useEffect, useState } from 'react';

import {
  ItemId,
  moveItemOnTree,
  mutateTree,
  TreeDestinationPosition,
  TreeSourcePosition,
} from '@atlaskit/tree';
import { produce } from 'immer';

import { useFolderListQuery } from '../queries/use-folder-list-query';
import { getFolderList } from '../remotes/get-folder-list';

export const useFolderListService = () => {
  const { data } = useFolderListQuery();
  const [folderList, setFolderList] = useState(getFolderList.fallbackValue);

  useEffect(() => {
    if (data == null) {
      return;
    }

    setFolderList(data);
  }, [data]);

  const onExpandFolder = (itemId: ItemId) => {
    setFolderList(mutateTree(folderList, itemId, { isExpanded: true }));
  };

  const onCollapseFolder = (itemId: ItemId) => {
    setFolderList(mutateTree(folderList, itemId, { isExpanded: false }));
  };

  const onDragStartFolder = (itemId: ItemId) => {
    // eslint-disable-next-line no-console
    console.log(itemId);
  };

  const onDragEndFolder = (
    source: TreeSourcePosition,
    destination?: TreeDestinationPosition,
  ) => {
    if (!destination) {
      return;
    }
    const newTree = moveItemOnTree(folderList, source, destination);
    // console.log('새로운 부모Id', destination);
    // console.log('기존 부모Id', source);
    setFolderList(newTree);
  };

  const createFolder = useCallback(
    (parentId: ItemId) => {
      const newFolderId = Math.random().toString();
      const newFolder = {
        children: [],
        data: {
          title: '제목없음',
        },
        id: newFolderId,
      };

      setFolderList((prev) =>
        produce(prev, (draft) => {
          const newObj = draft;
          newObj.items[newFolderId] = newFolder;
          newObj.items[parentId].children.push(newFolderId);
          newObj.items[parentId].isExpanded = true;
        }),
      );
    },
    [setFolderList],
  );

  const createCabinet = useCallback(() => {
    const newCabinetId = Math.random().toString();
    const newCabinet = {
      children: [],
      data: {
        title: '임시보관함',
      },
      id: newCabinetId,
    };

    setFolderList((prev) =>
      produce(prev, (draft) => {
        const newObj = draft;
        newObj.items[newCabinetId] = newCabinet;
        newObj.items.userId.children.push(newCabinetId); // userId 부분은 나중에 login 구현되면 실제 유저 아이디 넣는곳임 newObj.items[userId].children.push(newCabinetId);
      }),
    );
  }, []);

  return {
    createCabinet,
    createFolder,
    folderList,
    onCollapseFolder,
    onDragEndFolder,
    onDragStartFolder,
    onExpandFolder,
  };
};
