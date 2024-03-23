import { css } from '@emotion/react';

interface Props {
  url: string;
}

function ProfileImg({ url }: Props) {
  return <img src={url} alt="profile" css={ImgStyle} />;
}

const ImgStyle = css`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
export default ProfileImg;
