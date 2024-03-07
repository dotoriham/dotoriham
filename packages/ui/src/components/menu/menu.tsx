import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  return <div>{children}</div>;
};

const Target = () => {
  return <div>Target</div>;
};

const DropDown = () => {
  return <div>Dropdown</div>;
};

const Label = () => {
  return <div>Label</div>;
};

const Item = () => {
  return <div>Item</div>;
};

const Divider = () => {
  return <div>Divider</div>;
};

Menu.Target = Target;
Menu.DropDown = DropDown;
Menu.Label = Label;
Menu.Item = Item;
Menu.Divider = Divider;
