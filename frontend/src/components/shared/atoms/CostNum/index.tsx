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
      <div css={TextStyle}>{cost}</div>
    </div>
  );
}

const DivStyle = css`
  display: flex;
  justify-content: space-between;
`;

const TextStyle = css`
  text-align: right;
  color: ${gray3};
  font-size: 2rem;
  font-weight: 400;
`;

export default CostNum;
