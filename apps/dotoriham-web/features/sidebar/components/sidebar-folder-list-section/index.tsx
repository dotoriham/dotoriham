import Tree, { RenderItemParams } from '@atlaskit/tree';
import { getClassNames } from '@dotoriham/ui';

import classes from './index.module.css';
import { useFolderListService } from '../../services/use-folder-list-service';

const cx = getClassNames(classes);

export const SidebarFolderListSection = () => {
  const {
    // createCabinet,
    // createFolder,
    folderList,
    onCollapseFolder,
    onDragEndFolder,
    onDragStartFolder,
    onExpandFolder,
  } = useFolderListService();

  return (
    <Tree
      tree={folderList}
      renderItem={renderFolderItem}
      onExpand={onExpandFolder}
      onCollapse={onCollapseFolder}
      onDragStart={onDragStartFolder}
      onDragEnd={onDragEndFolder}
      offsetPerLevel={16} // 한 깊이당 padding 값
      // isDragEnabled={isDrag}
      isDragEnabled={true}
      isNestingEnabled
    />
  );
};

const renderFolderItem = ({
  item,
  onExpand,
  onCollapse,
  provided,
}: RenderItemParams) => {
  return (
    <>
      <div
        className={cx('block')}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
        <div
          className={cx('render-folder-item-block')}
          onMouseDown={() =>
            item.isExpanded && item.children.length > 0 && onCollapse(item.id)
          }>
          <div className={cx('folder-left-box')}>
            {/* <FolderItemIcon
              item={item}
              onCollapse={onCollapse}
              onExpand={onExpand}
            /> */}
            <div
              className={cx('folder-title')}
              onClick={() => onExpand(item.id)}>
              {item.data.title}
            </div>
          </div>
          {/* {isDrag && (
            <FolderRightBox onMouseDown={(e) => e.stopPropagation()}>
              <FolderETCButton onClick={() => createFolder(item.id)}>
                <PlusIcon />
              </FolderETCButton>
              <FolderETCButton onClick={(e) => onToggleMenu(e, item.id)}>
                <More16Icon />
              </FolderETCButton>
            </FolderRightBox>
          )} */}
        </div>
      </div>
    </>
  );
};
