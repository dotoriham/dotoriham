import { GoogleIconIcon } from '@dotoriham/icons';
import { Button, Typography } from '@dotoriham/ui';

export const GoogleAuthButton = () => {
  return (
    <Button color="dark" variant="outline" size="lg" radius="md" fullWidth>
      <GoogleIconIcon
        fontSize={26}
        style={{
          marginRight: '8px',
        }}
      />
      <Typography type="system_16_500">구글 계정으로 원클릭 로그인</Typography>
    </Button>
  );
};
