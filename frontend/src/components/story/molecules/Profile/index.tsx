import { css } from '@emotion/react';
import ProfileImg from '../../../shared/atoms/ProfileImg';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  url: string;
  id: number;
}

function Profile({ name, url, id }: Props) {
  const navigate = useNavigate();

  const handleProfileMove = (id: number) => {
    navigate(`/user/${id}`);
  };
  return (
    <div css={DivStyle} onClick={() => handleProfileMove(id)}>
      <ProfileImg url={url} />
      <p css={NameStyle}>{name}</p>
    </div>
  );
}

const DivStyle = css`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`;

const NameStyle = css`
  color: white;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: normal;
`;

export default Profile;
