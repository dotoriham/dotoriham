'use client';

import { useState } from 'react';

import { EyeActiveIcon, EyeInactiveIcon } from '@dotoriham/icons';
import {
  Button,
  Input,
  SwitchableButton,
  Typography,
  color,
} from '@dotoriham/ui';

export const SignUpFormSection = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input size="lg" mb={20} placeholder="이메일" />
      <Input
        size="lg"
        mb={20}
        placeholder="비밀번호"
        rightComponent={
          <EyeToggleButton
            isActive={isPasswordVisible}
            onClick={togglePasswordVisibility}
          />
        }
      />

      <Button type="submit" fullWidth size="lg">
        <Typography type="system_16_500" color="#fff">
          회원가입
        </Typography>
      </Button>
    </form>
  );
};

const EyeToggleButton = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <SwitchableButton
      isActive={isActive}
      onClick={onClick}
      inactiveComponent={<EyeInactiveIcon fontSize={20} color={color.gray6} />}
      activeComponent={<EyeActiveIcon fontSize={20} color={color.black} />}
    />
  );
};
