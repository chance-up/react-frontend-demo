import { css } from '@emotion/react';

enum FontWeightEnum {
  'regular' = 400,
  'medium' = 500,
  'semibold' = 600,
  'bold' = 700,
}

enum FontSizeEnum {
  't0' = '40px',
  't1' = '30px',
  't2' = '26px',
  't3' = '22px',
  't4' = '18px',
  't5' = '16px',
  't6' = '13px',
  't7' = '11px',
  't8' = '9px',
}

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  size: 't0' | 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7' | 't8';
  color?: string;
}

export const Text = (props: TextProps) => {
  const { text, fontWeight = 'medium', size, color } = props;

  const fontWeightValue = fontWeight ? FontWeightEnum[fontWeight] : undefined;
  const titleStyles = css`
    color: ${color || ''};
    font-size: ${size && FontSizeEnum[size]};
    font-weight: ${fontWeightValue};
    line-height: 28px;
  `;

  return <span css={titleStyles}>{text}</span>;
};
