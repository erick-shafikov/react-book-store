import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TSelectProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    category: string;
};
