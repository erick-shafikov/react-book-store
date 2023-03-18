import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type THeaderProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    headerText: string;
};
