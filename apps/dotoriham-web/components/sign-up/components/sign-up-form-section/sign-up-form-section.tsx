import { EyeInactiveIcon } from '@dotoriham/icons';
import { Input } from '@dotoriham/ui';

export const SignUpFormSection = () => {
  return (
    <form>
      <Input
        size="lg"
        mb={20}
        placeholder="이메일"
        rightComponent={<EyeInactiveIcon fontSize={20} />}
      />
      <Input size="lg" mb={20} placeholder="비밀번호" />
    </form>
  );
};
