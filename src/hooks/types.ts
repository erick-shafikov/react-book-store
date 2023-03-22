export type TBook = {
    id: string;
    selfLink: string;
    volumeInfo: {
        selfLink: string;
        authors: Array<string>;
        categories: Array<string>;
        description: string;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        title: string;
    };
};
