export interface SetInterface {
    id?: string | null;
    uid: string;
    name: string;
    createdAt: Date | null;
    updatedAt?: Date | null;
    cards?: CardInterface[];
}


export interface CardInterface {
    id?: string | null;
    term: string;
    definition: string;
    order?: number;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    index?: number;
    isOpened?: boolean;
}
