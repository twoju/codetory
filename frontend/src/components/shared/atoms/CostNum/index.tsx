import { css } from '@emotion/react';
import { gray3 } from '../../../../styles/ColorSystem';
import { ReactNode } from 'react';

interface NumProps {
  icon: ReactNode;
  cost: number;
}

function CostNum({ icon, cost }: NumProps) {
  return (
    <div css={DivStyle}>
      {icon}
      <div css={TextStyle}>{cost > 999 ? '999+' : cost}</div>
    </div>
  );
}

const DivStyle = css`
  display: flex;
  max-width: 120px;
  justify-content: space-between;
  align-items: flex-end;
  & > svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const TextStyle = css`
  padding-left: 1.25rem;
  text-align: right;
  color: ${gray3};
  font-size: 1.6rem;
  font-weight: 400;
`;

export default CostNum;
