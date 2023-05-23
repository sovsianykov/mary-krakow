import { ImageItem } from "@/components/Works/models";

export type CoverBookImage = Omit<ImageItem, "desc">;
