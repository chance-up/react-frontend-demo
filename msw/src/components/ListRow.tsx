import { ReactNode } from 'react';
import { css } from '@emotion/react';

interface ListRowProps {
  contents: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
}

const ListRow = ({ contents, right, onClick }: ListRowProps) => {
  return (
    <li
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border: 1px solid black;
      `}
      onClick={onClick}
    >
      {contents}
      {right}
    </li>
  );
};

export default ListRow;
