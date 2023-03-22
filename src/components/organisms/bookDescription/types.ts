import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TBookDescription = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    title: string;
    author: string;
    description: string;
};
