import { css } from '@emotion/react';
import CostNum from '../../atoms/CostNum';
import FilledStar from '../../../../assets/svgs/star.svg?react';
import FilledPuzzle from '../../../../assets/svgs/puzzle.svg?react';
import { gray1 } from '../../../../styles/ColorSystem';

interface BoxProps {
  star: number;
  puzzle: number;
}

function CostBox({ star, puzzle }: BoxProps) {
  return (
    <div css={DivStyle}>
      <CostNum icon={<FilledStar />} cost={star} />
      <div css={LineStyle} />
      <CostNum icon={<FilledPuzzle />} cost={puzzle} />
    </div>
  );
}

const DivStyle = css`
  display: flex;
  height: fit-content;
  align-items: center;
  gap: 1.5rem;
  background-color: white;
  padding: 1.2rem;
  border-radius: 2.6rem;
  width: fit-content;
  box-shadow: 1.024px 1.024px 6.143px 0px rgba(85, 85, 85, 0.10);
`;

const LineStyle = css`
  height: 1.8rem;
  width: 3px;
  border-radius: 1rem;
  background-color: ${gray1};
`;

export default CostBox;
