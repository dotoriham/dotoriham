import { Button } from '@dotoriham/ui';
import { GoogleIconIcon } from '@dotoriham/icons';

export const GoogleAuthButton = () => {
  return (
    <Button color="dark" variant="outline" size="lg" radius="md" fullWidth>
      <GoogleIconIcon
        fontSize={26}
        style={{
          marginRight: '8px',
        }}
      />
      구글 계정으로 원클릭 로그인
    </Button>
  );
};
