import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TBookListItemProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    boookTitle: string;
    category: string;
    author: string;
    imageSrc: string;
    id: string;
};
