'use client';

import { useInput, useToggle, useToggles } from '@dotoriham/hooks';
import { EyeActiveIcon, EyeInactiveIcon } from '@dotoriham/icons';
import {
  Button,
  Input,
  Spacing,
  SwitchableButton,
  Typography,
  colors,
  fixedColor,
} from '@dotoriham/ui';

import { SignUpAgreement } from '../sign-up-agreement';
import { SignUpLinkedButton } from '../sign-up-linked-button';

export const 동의사항 = {
  개인정보수집: false,
  리마인드알림: false,
  이용약관: false,
};

type AgreementForm = {
  [key in keyof typeof 동의사항]: boolean;
};

export const SignUpForm = () => {
  const [email, handleChangeEmail] = useInput('');
  const [password, handleChangePassword] = useInput('');
  const [passwordVisible, handleTogglePasswordVisible] = useToggle(false);
  const [agreementForm, handleChangeAgreementForm, setChangeAgreementForm] =
    useToggles<AgreementForm>(동의사항);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isAllAgreed = Object.values(agreementForm).every(
    (value) => value === true,
  );

  const handleAllAgree = () => {
    if (isAllAgreed) {
      setChangeAgreementForm(동의사항);
    } else {
      setChangeAgreementForm({
        개인정보수집: true,
        리마인드알림: true,
        이용약관: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        size="lg"
        mb={20}
        placeholder="이메일"
        value={email}
        type="email"
        onChange={handleChangeEmail}
      />
      <Input
        value={password}
        onChange={handleChangePassword}
        type={passwordVisible ? 'text' : 'password'}
        size="lg"
        mb={20}
        placeholder="비밀번호"
        rightComponent={
          <EyeToggleButton
            isActive={passwordVisible}
            onClick={handleTogglePasswordVisible}
          />
        }
      />

      <Spacing size={8} />
      <SignUpAgreement
        agreementForm={agreementForm}
        isAllAgreed={isAllAgreed}
        onAllAgree={handleAllAgree}
        onChangeAgreementForm={handleChangeAgreementForm}
      />
      <Spacing size={24} />

      <Button type="submit" fullWidth size="lg">
        <Typography type="system_16_500" color={fixedColor.white}>
          회원가입
        </Typography>
      </Button>

      <Spacing size={24} />
      <SignUpLinkedButton />
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
      inactiveComponent={<EyeInactiveIcon fontSize={20} color={colors.gray6} />}
      activeComponent={<EyeActiveIcon fontSize={20} color={colors.black} />}
    />
  );
};
