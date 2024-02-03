import { useCallback, useState } from 'react';

export const useToggles = <TValue extends object>(initialValue: TValue) => {
  const [value, setValue] = useState(initialValue);

  const handleToggleValue = useCallback(
    (name: keyof TValue, value?: boolean) => {
      setValue((prev) => ({ ...prev, [name]: value ?? !prev[name] }));
    },
    [],
  );

  return [value, handleToggleValue, setValue] as const;
};
