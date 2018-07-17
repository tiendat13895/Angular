export interface IBook {
    id?: number;
    cover: string;
    title: string;
    url?: string;
    publishDate?: Date; //?: co the co hoac khong
    text?: string;
    price?: number;
    instock?: boolean;
}
