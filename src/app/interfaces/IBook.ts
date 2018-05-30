export interface IBook {
    cover: string;
    title: string;
    publishDate?: Date; //?: co the co hoac khong
    price?: number;
    instock?: boolean;
}
