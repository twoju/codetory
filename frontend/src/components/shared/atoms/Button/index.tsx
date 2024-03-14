import { css } from '@emotion/react';
import { gray1, gray2, main } from '../../../../styles/ColorSystem';
import { ButtonHTMLAttributes } from 'react';
import ReturnIcon from '../../../../assets/svgs/return.svg?react';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  themes: 'default' | 'disabled' | 'ghost';
  text: string;
}

const themeStyles = {
  default: {
    backgroundColor: main,
    '&:hover': {
      backgroundColor: '#5A85F7',
    },
    '&:active': {
      backgroundColor: '#2359EC',
    },
  },
  disabled: {
    backgroundColor: gray2,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: gray1,
    borderRadius: '3rem',
    fontWeight: '600',
    border: `1px solid ${gray1}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    '&:hover': {
      backgroundColor: 'rgba(85, 85, 85, 0.05)',
    },
  },
};

function Button({ themes = 'default', text }: BtnProps) {
  return (
    <div css={[BtnStyle, themeStyles[themes]]}>
      {themes == 'ghost' && <ReturnIcon />}
      {text}
    </div>
  );
}

const BtnStyle = css`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  border-radius: 0.8rem;
  background-color: ${main};
  color: white;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;

export default Button;
