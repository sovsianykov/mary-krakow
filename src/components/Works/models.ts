import {StaticImageData} from "next/image";

export interface ImageItem {
    id: number;
    title: string;
    desc: string;
    src: string | StaticImageData;
}
