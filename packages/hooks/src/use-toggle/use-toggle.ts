import { useCallback, useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(() => {
    setValue((value) => !value);
  }, []);

  return [value, toggleValue, setValue] as const;
};
