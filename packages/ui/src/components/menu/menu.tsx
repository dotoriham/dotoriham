import { ReactNode } from 'react';

import { MenuDivider } from './menu-divider';
import { MenuDropDown } from './menu-drop-down';
import { MenuItem } from './menu-item';
import { MenuLabel } from './menu-label';
import { MenuTarget } from './menu-target';

type Position = '';

type Trigger = 'click' | 'hover' | 'click-hover';
interface MenuProps {
  children: ReactNode;

  /** Menu와 Trigger 사이의 거리 */
  offset?: number;

  /** Menu 위치 */
  position?: Position;

  /** Menu 트리거 방식 */
  trigger?: Trigger;

  /** Menu 열리는 딜레이 시간 */
  openDelay?: number;

  /** 메뉴 닫히는 딜레이 시간 */
  closeDelay?: number;

  /** 메뉴 open 상태 */
  open?: boolean;

  /** Menu가 열릴 때 실행되는 callback */
  onOpen?: () => void;

  /** Menu가 닫힐 때 실행되는 callback */
  onClose?: () => void;

  /** Menu 외부를 클릭했을 때 menu를 닫을 지 여부 */
  closeOnClickOutside?: boolean;
}

export const Menu = ({ children }: MenuProps) => {
  return <div>{children}</div>;
};

Menu.Target = MenuTarget;
Menu.DropDown = MenuDropDown;
Menu.Label = MenuLabel;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
