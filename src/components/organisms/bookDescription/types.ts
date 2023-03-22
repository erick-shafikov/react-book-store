import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TBookDescription = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    title: string;
    authors: Array<string>;
    description: string;
    loading: boolean;
};
