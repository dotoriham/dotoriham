import { useState } from 'react';

interface UseUncontrolledProps<T> {
  value?: T;

  defaultValue?: T;

  onChange?: (value: T) => void;
}

export const useUncontrolled = <T>({
  defaultValue,
  onChange = () => {},
  value,
}: UseUncontrolledProps<T>): [T, (value: T) => void] => {
  const [unControlledValue, setUnControlledValue] = useState(defaultValue);

  const handleChange = (newValue: T) => {
    setUnControlledValue(newValue);
    onChange?.(newValue);
  };

  if (value != null) {
    return [value, onChange];
  }

  return [unControlledValue as T, handleChange];
};
