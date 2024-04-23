import { css } from '@emotion/react';
import { gray1, gray2, main } from '../../../../styles/ColorSystem';
import { ButtonHTMLAttributes } from 'react';
import ReturnIcon from '../../../../assets/svgs/return.svg?react';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  themes: 'default' | 'disabled' | 'ghost' | 'login';
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
  login: {
    backgroundColor: '#03C75A',
    padding: '0',
  },
};

function Button({ themes = 'default', text, children, ...props }: BtnProps) {
  return (
    <button css={[BtnStyle, themeStyles[themes]]} {...props}>
      {children && <img src={children} alt="logo" />}
      {themes == 'ghost' && <ReturnIcon />}
      {text}
    </button>
  );
}

const BtnStyle = css`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  border-radius: 0.8rem;
  background: ${main};
  color: white;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    max-width: 64px;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

export default Button;
