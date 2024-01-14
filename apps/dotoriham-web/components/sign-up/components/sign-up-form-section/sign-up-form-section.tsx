import { Input } from '@dotoriham/ui';

export const SignUpFormSection = () => {
  return (
    <form>
      <Input size="lg" mb={20} placeholder="이메일" />
      <Input size="lg" mb={20} placeholder="비밀번호" />
    </form>
  );
};
