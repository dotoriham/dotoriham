import { Border, Typography } from '@dotoriham/ui';

import { AgreementListRow } from '../agreement-list-row';
import { 동의사항 } from '../sign-up-form';

interface Props {
  agreementForm: typeof 동의사항;
  onChangeAgreementForm: (key: keyof typeof 동의사항, value?: boolean) => void;
}

export const SignUpAgreement = ({
  agreementForm,
  onChangeAgreementForm,
}: Props) => {
  return (
    <>
      <AgreementListRow mb={6}>
        <Typography type="system_12_400" ml={10}>
          전체 동의
        </Typography>
      </AgreementListRow>

      <Border color="gray4" />

      <AgreementListRow mt={12} withArrow>
        <Typography type="system_12_500" ml={10}>
          [필수]
        </Typography>
        <Typography type="system_12_400" ml={8}>
          이용약관에 동의합니다.
        </Typography>
      </AgreementListRow>

      <AgreementListRow mt={8} withArrow>
        <Typography type="system_12_500" ml={10}>
          [필수]
        </Typography>
        <Typography type="system_12_400" ml={8}>
          개인정보 수집/이용에 동의합니다.
        </Typography>
      </AgreementListRow>

      <AgreementListRow mt={8}>
        <Typography type="system_12_500" ml={10} color="gray5">
          [선택]
        </Typography>
        <Typography type="system_12_400" ml={8}>
          리마인드 알람 수신에 동의합니다.
        </Typography>
      </AgreementListRow>
    </>
  );
};
