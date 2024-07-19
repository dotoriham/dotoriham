interface Props {
  src: string;
}

export const Profile = ({ src }: Props) => {
  return (
    <img
      src={src}
      alt="프로필 사진"
      style={{
        borderRadius: '50%',
        height: '24px',
        objectFit: 'cover',
        width: '24px',
      }}
    />
  );
};
