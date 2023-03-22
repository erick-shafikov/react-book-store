import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TBookImageProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    width?: string;
    height?: string;
    src?: string;
    loading: boolean;
};
