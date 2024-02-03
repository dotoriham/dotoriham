import { useState } from 'react';

export const useInputs = <TValue extends object>(intialValue: TValue) => {
  const [value, setValue] = useState(intialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return [value, handleChange, setValue] as const;
};
