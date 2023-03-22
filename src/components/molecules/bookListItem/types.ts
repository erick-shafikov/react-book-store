import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TBookListItemProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    boookTitle: string;
    category: string;
    authors: Array<string>;
    imageSrc: string;
    id: string;
};
