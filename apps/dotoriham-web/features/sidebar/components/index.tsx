import { getClassNames } from '@dotoriham/ui';

import classes from './index.module.css';
import { SidebarFavoriteFolderListSection } from './sidebar-favorite-folder-list-section';
import { SidebarFolderListSection } from './sidebar-folder-list-section';
import { SidebarFooterMenuSection } from './sidebar-footer-menu-section';
import { SidebarProfileSection } from './sidebar-profile-section';
import { SidebarStaticMenuSection } from './sidebar-static-menu-section';
import { SidebarTagListSection } from './sidebar-tag-list-section';
import { useSidebarResizableWidth } from '../hooks/use-sidebar-resizable-width';

const cx = getClassNames(classes);

export const Sidebar = () => {
  const { control, target } = useSidebarResizableWidth();

  return (
    <aside ref={target} className={cx('sidebar')}>
      <SidebarProfileSection />
      <SidebarStaticMenuSection />
      <SidebarFavoriteFolderListSection />
      <SidebarFolderListSection />
      <SidebarTagListSection />
      <SidebarFooterMenuSection />
      <div ref={control} className={cx('resize-bar')} />
    </aside>
  );
};
